import { Icon } from "./Icons";

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div
        className={`rv inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-850/70 px-3.5 py-1.5 ${
          center ? "mx-auto" : ""
        }`}
      >
        <Icon name="bolt" className="h-3 w-3 text-brand-500" />
        <span className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-mist-500">
          {eyebrow}
        </span>
      </div>
      <h2
        className="rv mt-5 font-display text-3xl font-extrabold leading-[1.1] sm:text-[2.6rem]"
        style={{ transitionDelay: "70ms" }}
      >
        {title}
      </h2>
      {lead && (
        <p
          className="rv mt-4 text-[16px] leading-relaxed text-mist-500"
          style={{ transitionDelay: "140ms" }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
