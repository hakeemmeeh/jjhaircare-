"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Bike, Check, HelpCircle, MessageCircle, Minus, Package, Plus, ShoppingBag, Sparkles, Store } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { whatsappOrderUrl } from "@/data/site-config";

type Intent = "order" | "question" | "wholesale" | "other";
type Area = "nairobi" | "other";

const INTENTS: { id: Intent; label: string; hint: string; icon: typeof ShoppingBag }[] = [
  { id: "order", label: "Order products", hint: "Pick what you'd like and where to deliver", icon: ShoppingBag },
  { id: "question", label: "Ask about a product", hint: "Ingredients, how to use, what suits your hair", icon: Sparkles },
  { id: "wholesale", label: "Wholesale", hint: "Salons, shops and resellers", icon: Store },
  { id: "other", label: "Something else", hint: "Any other question", icon: HelpCircle },
];

const STEP_NAMES: Record<string, string> = {
  need: "Start",
  products: "Products",
  delivery: "Delivery",
  details: "Your details",
  review: "Review",
};

const priceOf = (p: string | undefined) => (p ? Number(p.replace(/[^0-9]/g, "")) : 0);

const labelCls = "block text-xs uppercase tracking-[0.2em] font-mono text-jj-gold mb-2";
const inputCls =
  "w-full rounded-xl border border-jj-black/20 bg-white/70 px-4 py-3.5 text-lg text-jj-black placeholder:text-jj-charcoal/50 focus:outline-none focus:border-jj-black focus:ring-2 focus:ring-jj-black/10 transition";
const primaryBtn =
  "inline-flex items-center justify-center gap-2.5 rounded-full bg-jj-black text-white font-medium px-8 py-4 min-h-[52px] uppercase tracking-wider text-sm shadow-lg shadow-jj-black/10 hover:bg-jj-olive transition-colors disabled:opacity-40 disabled:shadow-none disabled:hover:bg-jj-black";
const ghostBtn =
  "inline-flex items-center gap-2 rounded-full py-3 px-4 min-h-[48px] text-sm uppercase tracking-widest text-jj-charcoal/80 hover:bg-jj-black/5 hover:text-jj-black transition-colors";
const optionCls = (on: boolean) =>
  `group flex w-full items-center gap-4 rounded-2xl border px-4 py-4 min-h-[72px] text-left transition-all duration-200 ${
    on
      ? "border-jj-black bg-jj-black text-white shadow-lg shadow-jj-black/10"
      : "border-jj-black/15 bg-white/60 hover:border-jj-black/60 hover:-translate-y-0.5 hover:shadow-md"
  }`;
const iconWrap = (on: boolean) =>
  `flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors ${
    on ? "bg-white/15 text-white" : "bg-jj-black/5 text-jj-black group-hover:bg-jj-black group-hover:text-white"
  }`;
const legendCls = "font-serif text-2xl md:text-3xl text-jj-black mb-2";
const subCls = "text-jj-charcoal/70 mb-6";

/** Step-by-step order / enquiry form. Builds one complete WhatsApp message at the end. */
export default function OrderWizard() {
  const [step, setStep] = useState(0);
  const [intent, setIntent] = useState<Intent | null>(null);
  const [qty, setQty] = useState<Record<string, number>>({});
  const [area, setArea] = useState<Area | null>(null);
  const [place, setPlace] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const isOrder = intent === "order";
  const steps = isOrder ? ["need", "products", "delivery", "details", "review"] : ["need", "details", "review"];
  const current = steps[Math.min(step, steps.length - 1)];
  const chosen = PRODUCTS.filter((p) => (qty[p.slug] ?? 0) > 0);
  const total = chosen.reduce((sum, p) => sum + priceOf(p.price) * qty[p.slug], 0);

  const canNext =
    (current === "need" && intent !== null) ||
    (current === "products" && chosen.length > 0) ||
    (current === "delivery" && area !== null && place.trim().length > 1) ||
    (current === "details" && name.trim().length > 1 && (isOrder || note.trim().length > 2)) ||
    current === "review";

  const setQ = (slug: string, d: number) =>
    setQty((q) => ({ ...q, [slug]: Math.max(0, Math.min(20, (q[slug] ?? 0) + d)) }));

  const message = () => {
    const lines = [`Hi JJ Haircare! I'm ${name.trim()}.`];
    if (isOrder) {
      lines.push("", "I'd like to order:");
      chosen.forEach((p) => lines.push(`- ${qty[p.slug]} x ${p.name}${p.price ? ` (${p.price} each)` : ""}`));
      if (total) lines.push(`Products total: KES ${total.toLocaleString("en-US")} (before delivery)`);
      lines.push("", `Delivery: ${area === "nairobi" ? "Nairobi, by rider" : "Outside Nairobi, by parcel"} - ${place.trim()}`);
      if (note.trim()) lines.push("", `Note: ${note.trim()}`);
    } else {
      const topic = INTENTS.find((i) => i.id === intent)?.label ?? "Enquiry";
      lines.push(`Topic: ${topic}`, "", note.trim());
    }
    return lines.join("\n");
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-baseline justify-between gap-4 mb-3">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-jj-charcoal/70" aria-live="polite">
            Step {Math.min(step, steps.length - 1) + 1} of {steps.length}
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-jj-black">{STEP_NAMES[current]}</p>
        </div>
        <div className="flex gap-1.5" aria-hidden="true">
          {steps.map((st, i) => (
            <span key={st} className="h-1.5 flex-1 overflow-hidden rounded-full bg-jj-black/10">
              <span
                className={`block h-full rounded-full bg-jj-black transition-all duration-500 ${i <= step ? "w-full" : "w-0"}`}
              />
            </span>
          ))}
        </div>
      </div>

      <div key={current} className="jj-step-in">
      {current === "need" && (
        <fieldset>
          <legend className={legendCls}>What do you need?</legend>
          <p className={subCls}>Choose one to get started.</p>
          <div className="grid gap-3">
            {INTENTS.map((i) => {
              const on = intent === i.id;
              const Icon = i.icon;
              return (
                <button
                  key={i.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => {
                    setIntent(i.id);
                    setStep(1);
                  }}
                  className={optionCls(on)}
                >
                  <span className={iconWrap(on)}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-lg leading-snug">{i.label}</span>
                    <span className={`block text-sm ${on ? "text-white/75" : "text-jj-charcoal/70"}`}>{i.hint}</span>
                  </span>
                  <ArrowRight
                    className={`h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 ${on ? "text-white" : "text-jj-charcoal/50"}`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      {current === "products" && (
        <fieldset>
          <legend className={legendCls}>Pick your products</legend>
          <p className={subCls}>Tap + to add. You can choose more than one.</p>
          <ul className="grid gap-3">
            {PRODUCTS.map((p) => {
              const n = qty[p.slug] ?? 0;
              return (
                <li
                  key={p.slug}
                  className={`flex items-center gap-3 sm:gap-4 rounded-2xl border p-2.5 pr-2.5 sm:pr-3 transition-all duration-200 ${
                    n > 0 ? "border-jj-black bg-white shadow-md" : "border-jj-black/15 bg-white/60"
                  }`}
                >
                  <span className="relative h-14 w-14 sm:h-[68px] sm:w-[68px] shrink-0 overflow-hidden rounded-xl">
                    <Image src={p.image} alt="" fill sizes="68px" className="object-cover" />
                    {n > 0 && (
                      <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-jj-black text-white">
                        <Check className="h-3 w-3" aria-hidden="true" />
                      </span>
                    )}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[15px] sm:text-base font-medium text-jj-black leading-snug">{p.name}</span>
                    <span className="block text-sm text-jj-charcoal/70 whitespace-nowrap">{p.price ?? "Ask for price"}</span>
                  </span>
                  <span className="flex shrink-0 items-center rounded-full border border-jj-black/15 bg-jj-ivory p-0.5">
                    <button
                      type="button"
                      onClick={() => setQ(p.slug, -1)}
                      disabled={n === 0}
                      aria-label={`Remove one ${p.name}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full text-jj-black hover:bg-jj-black/10 disabled:opacity-30 disabled:hover:bg-transparent"
                    >
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <span className="w-6 text-center text-base font-medium tabular-nums" aria-live="polite" aria-label={`${n} ${p.name}`}>
                      {n}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQ(p.slug, 1)}
                      aria-label={`Add one ${p.name}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-jj-black text-white hover:bg-jj-olive"
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="mt-5 flex items-center justify-between rounded-2xl bg-jj-black/5 px-5 py-4">
            <span className="text-jj-charcoal/80 leading-snug">
              {chosen.length === 0 ? (
                "Nothing selected yet"
              ) : (
                <>
                  {chosen.reduce((c, p) => c + qty[p.slug], 0)} selected
                  <span className="block text-sm text-jj-charcoal/70">Before delivery</span>
                </>
              )}
            </span>
            <strong className="text-lg text-jj-black tabular-nums whitespace-nowrap">KES {total.toLocaleString("en-US")}</strong>
          </div>
        </fieldset>
      )}

      {current === "delivery" && (
        <fieldset>
          <legend className={legendCls}>Where should we deliver?</legend>
          <p className={subCls}>We confirm the delivery cost and timing on WhatsApp.</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-7">
            {(
              [
                { id: "nairobi", label: "In Nairobi", hint: "Delivered by rider", icon: Bike },
                { id: "other", label: "Outside Nairobi", hint: "Sent by parcel", icon: Package },
              ] as { id: Area; label: string; hint: string; icon: typeof Bike }[]
            ).map((a) => {
              const on = area === a.id;
              const Icon = a.icon;
              return (
                <button key={a.id} type="button" aria-pressed={on} onClick={() => setArea(a.id)} className={optionCls(on)}>
                  <span className={iconWrap(on)}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-lg leading-snug">{a.label}</span>
                    <span className={`block text-sm ${on ? "text-white/75" : "text-jj-charcoal/70"}`}>{a.hint}</span>
                  </span>
                  {on && <Check className="h-5 w-5 shrink-0" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
          {area && (
            <div className="jj-step-in">
              <label htmlFor="ow-place" className={labelCls}>
                {area === "nairobi" ? "Your area or estate" : "Your town"}
              </label>
              <input
                id="ow-place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                autoComplete="address-level2"
                placeholder={area === "nairobi" ? "e.g. Kilimani" : "e.g. Mombasa"}
                className={inputCls}
              />
            </div>
          )}
        </fieldset>
      )}

      {current === "details" && (
        <div>
          <h2 className={legendCls}>{isOrder ? "Who is the order for?" : "Tell us a little more"}</h2>
          <p className={subCls}>{isOrder ? "So we know who to ask for on delivery." : "We'll reply on WhatsApp."}</p>
          <div className="grid gap-6">
            <div>
              <label htmlFor="ow-name" className={labelCls}>Name</label>
              <input
                id="ow-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                placeholder="Your name"
                className={inputCls}
              />
            </div>
            <div>
              <label htmlFor="ow-note" className={labelCls}>{isOrder ? "Note (optional)" : "Your message"}</label>
              <textarea
                id="ow-note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                placeholder={isOrder ? "Anything we should know?" : "How can we help?"}
                className={`${inputCls} resize-none`}
              />
            </div>
          </div>
        </div>
      )}

      {current === "review" && (
        <div>
          <h2 className={legendCls}>Check and send</h2>
          <p className={subCls}>This opens WhatsApp with your message ready. Nothing is sent until you tap send there.</p>
          <div className="overflow-hidden rounded-2xl border border-jj-black/15 bg-white/70">
            <div className="flex items-center justify-between gap-4 border-b border-jj-black/10 px-5 py-4">
              <span className="text-sm text-jj-charcoal/70">Name</span>
              <span className="text-jj-black font-medium text-right">{name.trim()}</span>
            </div>
            {isOrder ? (
              <>
                <ul className="border-b border-jj-black/10 px-5 py-2">
                  {chosen.map((p) => (
                    <li key={p.slug} className="flex items-center gap-3 py-2.5">
                      <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg">
                        <Image src={p.image} alt="" fill sizes="44px" className="object-cover" />
                      </span>
                      <span className="flex-1 min-w-0 text-jj-black leading-snug">
                        {qty[p.slug]} × {p.name}
                      </span>
                      <span className="shrink-0 text-jj-charcoal/80 tabular-nums whitespace-nowrap">
                        KES {(priceOf(p.price) * qty[p.slug]).toLocaleString("en-US")}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-start justify-between gap-4 border-b border-jj-black/10 px-5 py-4">
                  <span className="text-sm text-jj-charcoal/70">Delivery</span>
                  <span className="text-jj-black text-right">
                    {area === "nairobi" ? "Nairobi, by rider" : "Outside Nairobi, by parcel"}
                    <span className="block text-sm text-jj-charcoal/70">{place.trim()}</span>
                  </span>
                </div>
                {note.trim() && (
                  <div className="flex items-start justify-between gap-4 border-b border-jj-black/10 px-5 py-4">
                    <span className="text-sm text-jj-charcoal/70">Note</span>
                    <span className="text-jj-black text-right break-words min-w-0">{note.trim()}</span>
                  </div>
                )}
                <div className="flex items-center justify-between gap-4 bg-jj-black/5 px-5 py-4">
                  <span className="text-jj-charcoal/80 leading-snug">
                    Products total
                    <span className="block text-sm text-jj-charcoal/70">Before delivery</span>
                  </span>
                  <strong className="text-lg text-jj-black tabular-nums whitespace-nowrap">KES {total.toLocaleString("en-US")}</strong>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between gap-4 border-b border-jj-black/10 px-5 py-4">
                  <span className="text-sm text-jj-charcoal/70">Topic</span>
                  <span className="text-jj-black text-right">{INTENTS.find((i) => i.id === intent)?.label}</span>
                </div>
                <p className="px-5 py-4 text-jj-black whitespace-pre-wrap break-words">{note.trim()}</p>
              </>
            )}
          </div>
        </div>
      )}
      </div>

      <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-jj-black/10 pt-6">
        {step > 0 ? (
          <button type="button" onClick={() => setStep((s) => s - 1)} className={ghostBtn}>
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back
          </button>
        ) : (
          <span />
        )}
        {current === "review" ? (
          <a href={whatsappOrderUrl(message())} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Send on WhatsApp
          </a>
        ) : (
          current !== "need" && (
            <button type="button" disabled={!canNext} onClick={() => setStep((s) => s + 1)} className={primaryBtn}>
              Continue
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          )
        )}
      </div>

      <p className="mt-6 text-center text-sm text-jj-charcoal/70">
        Prefer to just chat?{" "}
        <a
          href={whatsappOrderUrl("Hi JJ Haircare!")}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 text-jj-black"
        >
          Open WhatsApp
        </a>
      </p>
    </div>
  );
}
