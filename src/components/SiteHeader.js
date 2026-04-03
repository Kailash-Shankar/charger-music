'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONTACT_INFO, NAV_LINKS } from '@/data/siteData';

function isActive(pathname, href) {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="border-b border-black/10 bg-[#151515] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
      <div className="bg-[linear-gradient(135deg,#9c1c22_0%,#b3131b_55%,#7f0c12_100%)] text-white">
        <div className="mx-auto flex max-w-[1700px] flex-col gap-5 px-4 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-4">
          <div className="min-w-0">
            <h1 className="font-display text-[2rem] font-bold leading-tight tracking-[0.01em] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.26)] sm:text-[2.35rem] lg:text-[3rem]">
              Strawberry Crest High
            </h1>
            <h2 className="mt-1.5 font-display text-[2rem] font-bold leading-tight tracking-[0.01em] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.26)] sm:text-[2.35rem] lg:text-[3rem]">
              School Music Department
            </h2>
          </div>

          <div className="flex flex-1 flex-col gap-3 lg:max-w-[600px]">
            <div className="relative hidden h-[62px] lg:block">
              <div className="absolute left-0 top-[12px] h-[1px] w-full bg-black/45" />
              <div className="absolute left-0 top-[24px] h-[1px] w-full bg-black/45" />
              <div className="absolute left-0 top-[36px] h-[1px] w-full bg-black/45" />
              <div className="absolute left-0 top-[48px] h-[1px] w-full bg-black/45" />
              <div className="absolute left-0 top-[60px] h-[1px] w-full bg-black/45" />
              <div className="absolute left-1 top-[-20px] text-[6rem] leading-none text-black/55">
                {'\uD834\uDD1E'}
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-[#a32020]/95 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)]">
                {CONTACT_INFO.address}
              </div>
            </div>

            <div className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_22px_rgba(0,0,0,0.12)] sm:text-sm lg:hidden">
              {CONTACT_INFO.address}
            </div>
          </div>

          <div className="flex items-center justify-start lg:justify-end">
            <div className="flex h-[96px] w-[96px] items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-[0_18px_32px_rgba(0,0,0,0.18)] sm:h-[118px] sm:w-[118px] lg:h-[132px] lg:w-[132px]">
              <img
                src="https://static.wixstatic.com/media/407ce4_52c9645257ee46caa73cab642040742c~mv2.jpg/v1/fill/w_142,h_142,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/chgs_edited_edited.jpg"
                alt="Strawberry Crest Chargers logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen((open) => !open)}
            className="fixed right-4 top-4 z-50 inline-flex items-center gap-3 rounded-full border border-white/20 bg-[#111111]/90 px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_34px_rgba(0,0,0,0.28)] backdrop-blur-sm lg:hidden"
          >
            <span className="flex w-6 flex-col gap-1.5" aria-hidden="true">
              <span className={`h-0.5 w-6 bg-white transition-all duration-200 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-6 bg-white transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-6 bg-white transition-all duration-200 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
            <span>{mobileOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>

      <nav className="hidden border-t border-black/10 bg-[linear-gradient(180deg,#eef1f5_0%,#d9dee5_100%)] lg:block">
        <div className="mx-auto max-w-[1900px] overflow-x-auto px-3 py-2">
          <div className="flex min-w-max items-stretch gap-0 border border-black/10 bg-white/40">
            {NAV_LINKS.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    'flex min-h-[48px] min-w-[122px] items-center justify-center border-r border-black/10 px-5 text-center font-sans text-[0.92rem] font-semibold uppercase tracking-[0.14em] transition-all duration-200 last:border-r-0',
                    active
                      ? 'bg-[#1f1f1f] text-white'
                      : 'bg-transparent text-[#211f1d] hover:bg-white hover:text-[#a32020]',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px]"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav className="fixed right-4 top-[4.75rem] z-50 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-white/15 bg-[linear-gradient(180deg,#eef1f5_0%,#d9dee5_100%)] shadow-[0_24px_44px_rgba(0,0,0,0.24)]">
            <div className="border-b border-black/10 bg-white/45 px-4 py-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#7f0c12]">
              Navigation
            </div>
            <div className="bg-white/70">
              {NAV_LINKS.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      'flex min-h-[48px] items-center justify-between border-b border-black/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-colors last:border-b-0',
                      active ? 'bg-[#1f1f1f] text-white' : 'text-[#211f1d] hover:bg-white',
                    ].join(' ')}
                  >
                    <span>{item.label}</span>
                    <span className={active ? 'text-white/70' : 'text-[#a32020]'}>&rsaquo;</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      ) : null}

    </header>
  );
}

