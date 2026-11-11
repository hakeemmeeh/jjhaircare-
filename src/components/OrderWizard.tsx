"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Minus, Plus, MessageCircle } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { whatsappOrderUrl } from "@/data/site-config";

type Intent = "order" | "question" | "wholesale" | "other";
type Area = "nairobi" | "other";

const INTENTS: { id: Intent; label: string; hint: string }[] = [
  { id: "order", label: "Order products", hint: "Pick what you'd like and where to deliver" },
  { id: "question", label: "Ask about a product", hint: "Ingredients, how to use, what suits your hair" },
  { id: "wholesale", label: "Wholesale", hint: "Salons, shops and resellers" },
  { id: "other", label: "Something else", hint: "Any other question" },
];

const priceOf = (p: string | undefined) => (p ? Number(p.replace(/[^0-9]/g, "")) : 0);

const labelCls = "block text-sm uppercase tracking-widest font-mono text-jj-gold mb-2";
const inputCls =
  "w-full bg-transparent border-b border-jj-black/30 pb-3 text-lg text-jj-black placeholder:text-jj-charcoal/50 focus:outline-none focus:border-jj-black";
const primaryBtn =
  "inline-flex items-center justify-center gap-2 bg-jj-black text-white font-medium px-7 py-4 min-h-[52px] uppercase tracking-wider text-sm hover:bg-jj-olive transition-colors disabled:opacity-40 disabled:hover:bg-jj-black";
const ghostBtn = "py-3 px-2 text-sm uppercase tracking-widest text-jj-charcoal/80 hover:text-jj-black";

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
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-jj-charcoal/70 mb-3" aria-live="polite">
        Step {Math.min(step, steps.length - 1) + 1} of {steps.length}
      </p>
      <div className="flex gap-1.5 mb-8" aria-hidden="true">
        {steps.map((s, i) => (
          <span key={s} className={`h-1 flex-1 ${i <= step ? "bg-jj-black" : "bg-jj-black/15"}`} />
        ))}
      </div>

      {current === "need" && (
        <fieldset>
          <legend className="font-serif text-2xl md:text-3xl text-jj-black mb-6">What do you need?</legend>
          <div className="grid gap-3">
            {INTENTS.map((i) => (
              <button
                key={i.id}
                type="button"
                aria-pressed={intent === i.id}
                onClick={() => {
                  setIntent(i.id);
                  setStep(1);
                }}
                className={`flex items-center justify-between gap-4 border px-5 py-4 min-h-[64px] text-left transition-colors ${
                  intent === i.id ? "border-jj-black bg-jj-black/5" : "border-jj-black/20 hover:border-jj-black"
                }`}
              >
                <span>
                  <span className="block text-lg text-jj-black">{i.label}</span>
                  <span className="block text-sm text-jj-charcoal/70">{i.hint}</span>
                </span>
                {intent === i.id && <Check className="h-5 w-5 shrink-0 text-jj-black" aria-hidden="true" />}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {current === "products" && (
        <fieldset>
          <legend className="font-serif text-2xl md:text-3xl text-jj-black mb-6">Pick your products</legend>
          <ul className="grid gap-3">
            {PRODUCTS.map((p) => {
              const n = qty[p.slug] ?? 0;
              return (
                <li
                  key={p.slug}
                  className={`flex items-center gap-4 border p-3 ${n > 0 ? "border-jj-black bg-jj-black/5" : "border-jj-black/20"}`}
                >
                  <span className="relative h-16 w-16 shrink-0 overflow-hidden">
                    <Image src={p.image} alt="" fill sizes="64px" className="object-cover" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-jj-black leading-snug">{p.name}</span>
                    <span className="block text-sm text-jj-charcoal/70">{p.price ?? "Ask for price"}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setQ(p.slug, -1)}
                      disabled={n === 0}
                      aria-label={`Remove one ${p.name}`}
                      className="flex h-11 w-11 items-center justify-center border border-jj-black/30 disabled:opacity-30"
                    >
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <span className="w-8 text-center text-lg tabular-nums" aria-live="polite" aria-label={`${n} ${p.name}`}>
                      {n}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQ(p.slug, 1)}
                      aria-label={`Add one ${p.name}`}
                      className="flex h-11 w-11 items-center justify-center border border-jj-black/30 hover:border-jj-black"
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>
          {total > 0 && (
            <p className="mt-5 text-jj-charcoal/80">
              Products total: <strong className="text-jj-black">KES {total.toLocaleString("en-US")}</strong> (before delivery)
            </p>
          )}
        </fieldset>
      )}

      {current === "delivery" && (
        <fieldset>
          <legend className="font-serif text-2xl md:text-3xl text-jj-black mb-6">Where should we deliver?</legend>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {(
              [
                { id: "nairobi", label: "In Nairobi", hint: "Delivered by rider" },
                { id: "other", label: "Outside Nairobi", hint: "Sent by parcel" },
              ] as { id: Area; label: string; hint: string }[]
            ).map((a) => (
              <button
                key={a.id}
                type="button"
                aria-pressed={area === a.id}
                onClick={() => setArea(a.id)}
                className={`border px-5 py-4 min-h-[64px] text-left transition-colors ${
                  area === a.id ? "border-jj-black bg-jj-black/5" : "border-jj-black/20 hover:border-jj-black"
                }`}
              >
                <span className="block text-lg text-jj-black">{a.label}</span>
                <span className="block text-sm text-jj-charcoal/70">{a.hint}</span>
              </button>
            ))}
          </div>
          {area && (
            <div>
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
              <p className="mt-3 text-sm text-jj-charcoal/70">We&apos;ll confirm the delivery cost and timing on WhatsApp.</p>
            </div>
          )}
        </fieldset>
      )}

      {current === "details" && (
        <div>
          <h2 className="font-serif text-2xl md:text-3xl text-jj-black mb-6">
            {isOrder ? "Your name" : "Tell us a little more"}
          </h2>
          <div className="grid gap-7">
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
          <h2 className="font-serif text-2xl md:text-3xl text-jj-black mb-6">Check and send</h2>
          <pre className="whitespace-pre-wrap break-words border border-jj-black/15 bg-white/60 p-5 font-sans text-base leading-relaxed text-jj-charcoal">
            {message()}
          </pre>
          <p className="mt-3 text-sm text-jj-charcoal/70">This opens WhatsApp with the message ready. Nothing is sent until you tap send there.</p>
        </div>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        {step > 0 ? (
          <button type="button" onClick={() => setStep((s) => s - 1)} className={ghostBtn}>
            ← Back
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
            </button>
          )
        )}
      </div>

      <p className="mt-8 text-sm text-jj-charcoal/70">
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
