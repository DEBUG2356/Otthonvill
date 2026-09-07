import { Logo } from "./Logo";
import { Icon } from "./Icons";
import { areas, footerNav, services, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-8 border-t border-ink-700 bg-ink-900/50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-600/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-mist-500">
              Lakossági villanyszerelés és új épületek teljes villamosítása Kecskeméten és
              60 km-es körzetében.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="BB OtthonVill a Facebookon"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-600 text-mist-500 transition-colors hover:border-brand-600 hover:text-brand-400"
              >
                <Icon name="facebook" className="h-4.5 w-4.5" />
              </a>
              <a
                href={site.phoneHref}
                aria-label="Telefonhívás"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-600 text-mist-500 transition-colors hover:border-brand-600 hover:text-brand-400"
              >
                <Icon name="phone" className="h-4.5 w-4.5" />
              </a>
              <a
                href={site.emailHref}
                aria-label="E-mail írása"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-600 text-mist-500 transition-colors hover:border-brand-600 hover:text-brand-400"
              >
                <Icon name="mail" className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.2em] text-mist-100">
              Oldalak
            </h3>
            <ul className="mt-5 space-y-2.5">
              {footerNav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="group inline-flex items-center gap-1.5 text-[14px] text-mist-500 transition-colors hover:text-brand-400"
                  >
                    <span className="h-px w-0 bg-brand-500 transition-all duration-300 group-hover:w-3" />
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.2em] text-mist-100">
              Szolgáltatások
            </h3>
            <ul className="mt-5 space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#szolgaltatasok"
                    className="group inline-flex items-start gap-1.5 text-[14px] text-mist-500 transition-colors hover:text-brand-400"
                  >
                    <span className="mt-2.5 h-px w-0 shrink-0 bg-brand-500 transition-all duration-300 group-hover:w-3" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.2em] text-mist-100">
              Elérhetőség
            </h3>
            <ul className="mt-5 space-y-3.5 text-[14px] text-mist-500">
              <li className="flex items-start gap-2.5">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <a href={site.phoneHref} className="hover:text-brand-400">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <a href={site.emailHref} className="break-all hover:text-brand-400">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span>
                  {site.address.zip} {site.address.city}, {site.address.street}
                </span>
              </li>
            </ul>

            <p className="mt-6 text-[12.5px] leading-relaxed text-mist-600">
              Szolgáltatási terület: {areas.slice(0, 6).join(" · ")} és környéke.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-700 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-mist-600">
            © {year} {site.name} · {site.tagline}
          </p>
          <p className="flex items-center gap-2 text-[13px] text-mist-600">
            <Icon name="bolt" className="h-3 w-3 text-brand-600" />
            {site.motto}
          </p>
        </div>
      </div>
    </footer>
  );
}
