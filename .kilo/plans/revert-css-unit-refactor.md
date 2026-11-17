# Plan: Make the CSS revert actually reflect (restore standard Tailwind)

## Symptom
User: "we changed the css style from tailwind then we reverted back then committed and pushed but not reflecting."

## Root cause (verified)
- Commit `13721d4` "Apply CSS unit conventions" converted standard Tailwind utilities into
  arbitrary CSS-unit values across **41 files** (382 insertions / 382 deletions). Examples:
  - `max-w-3xl` → `max-w-[60%]`, `max-w-5xl` → `max-w-[80%]`, `max-w-6xl` → `max-w-[90%]`
  - `text-4xl` → `text-[2.25rem]`, `text-3xl` → `text-[1.875rem]`, `text-lg` → `text-[1.125rem]`,
    `text-sm` → `text-[0.875rem]`, `text-xs` → `text-[0.75rem]`
  - `rounded-3xl` → `rounded-[24px]`, `rounded-full` → `rounded-[9999px]`
  - `px-8 py-4` → `px-[0.5em] py-[0.25em]`, `shadow-xl`/`shadow-sm` → `shadow-[...]`
- The "revert" commit `a244f4a` only changed **1 line in 1 file** (`Hero.tsx` hero container).
- Later commits `fb271fe` + `b2eed10` only converted the **`tracking-*` classes**
  (`tracking-[0.3em]`→`tracking-widest`, `tracking-[0.2em]`→`tracking-wider`).
- Therefore the bulk refactor is still present in `main` and on the live site.
- Confirmed live: `https://jjhaircare.vercel.app` serves `text-[0.75rem]`×33, `text-[2.25rem]`×12,
  `max-w-[60%]`×3, `px-[0.5em]`×6 and **zero** `text-xs`/`text-sm`/`text-4xl`/`rounded-3xl`.

Net: `git diff 7b48d9e HEAD -- 'src/**'` still shows all 41 files / 382±382 — the refactor was never undone.

## Goal
Restore standard Tailwind utility classes across all 41 files (undo `13721d4`), while **keeping**
the already-applied Tailwind-ward tweaks and functional fixes.

## Preserve (do NOT revert these later changes)
- `tracking-widest` / `tracking-wider` (from `fb271fe`, `b2eed10`) — keep, do not restore `tracking-[0.3em]`/`[0.2em]`.
- Hero container: `max-w-7xl 2xl:max-w-[1500px] ... gap-6 lg:gap-6` (from `490899a` + `a244f4a`) — keep.
- Product accordion: `border-b-[1px] border-jj-black/10` (from `83d5e37`) — keep.
- Nav phone add/remove (`fe963c4`/`ebb6d33`) net-zero — no action.

## Chosen approach: `git revert` of the refactor (no history rewrite)
1. **Baseline build** (before changes): `npm run build` — confirm it currently passes.
2. `git revert --no-commit 13721d4` — stages the reverse of the refactor.
   - ~22 files revert cleanly automatically (correct Tailwind classes restored by git).
   - ~19 files will CONFLICT (they were touched after `13721d4`):
     `src/app/faq/page.tsx`, `src/app/not-found.tsx`, `src/app/products/[slug]/page.tsx`,
     `src/app/shipping/page.tsx`, `src/app/testimonials/page.tsx`,
     `src/components/About.tsx`, `AboutSnippet.tsx`, `DeliveryStrip.tsx`, `FaqTeaser.tsx`,
     `FeaturedProduct.tsx`, `Features.tsx`, `HairGoals.tsx`, `Hero.tsx`, `JournalFull.tsx`,
     `JournalSnippet.tsx`, `Marquee.tsx`, `OrderWizard.tsx`, `Products.tsx`, `SocialStrip.tsx`.
3. **Resolve each conflict** with this rule per hunk:
   - Take the **reverted (standard Tailwind)** class for units `13721d4` introduced
     (`max-w-[60|80|90%]`→`max-w-3xl|5xl|6xl`, `text-[Nrem]`→Tailwind scale, `rounded-[24px]`→`rounded-3xl`,
     `rounded-[9999px]`→`rounded-full`, `px-[0.5em]`→`px-8`, `py-[0.25em]`→`py-4`, `shadow-[...]`→`shadow-xl|sm`, etc.).
   - **Keep** `tracking-widest`/`tracking-wider` on those lines.
   - **Keep** Hero container line and accordion `border-b-[1px]` exactly as they are now.
4. `git add` resolved files, then `git commit` (message: `Revert CSS unit refactor to standard Tailwind`).
5. **Verify locally**:
   - `npm run build` must pass.
   - `npm run lint` must pass (or only report pre-existing issues).
   - Optional: `npm run dev` and eyeball home/products/about/contact for layout sanity.
6. **Deploy**: `git push origin main` → Vercel auto-deploys `jjhaircare.vercel.app`.
7. **Verify live**: `curl -s https://jjhaircare.vercel.app` and confirm Tailwind classes are present
   (`text-4xl`, `text-3xl`, `max-w-3xl`, `rounded-3xl`, `text-xs`) and arbitrary-value ones are gone.

## Risks / notes
- `13721d4` was not purely cosmetic: `max-w-3xl` (48rem) vs `max-w-[60%]`, and `px-8` (2rem) vs
  `px-[0.5em]`, differ. Reverting intentionally restores the original layout/spacing — this is the point.
- Rollback: `git revert <new-revert-commit>` or `git reset --hard b2eed10` (nothing pushed yet at that stage).
- If build fails after revert, fix in the same commit before pushing (do not push a red build).

## Out of scope
- The orphaned "Audit fixes" commit `c8880e7` and stale stashes (`7037227`, `5aed70f`) are unrelated to this issue.