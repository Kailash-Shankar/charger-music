'use client';

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

  return (
    <header className="border-b border-black bg-[#1a1a1a] shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
      <div className="bg-[#a32020] text-white">
        <div className="mx-auto flex max-w-[1700px] flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-3">
          <div className="min-w-0">
            <h1 className="font-display text-[2rem] font-bold leading-tight tracking-[0.03em] text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.35)] sm:text-[2.4rem] lg:text-[3.1rem]">
              Strawberry Crest High
            </h1>
            <h2 className="mt-2 font-display text-[2rem] font-bold leading-tight tracking-[0.03em] text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.35)] sm:text-[2.4rem] lg:text-[3.1rem]">
              School Music Department
            </h2>
          </div>

          <div className="flex flex-1 flex-col gap-3 lg:max-w-[600px]">
            <div className="relative hidden h-[62px] lg:block">
              <div className="absolute left-0 top-[12px] h-[2px] w-full bg-black" />
              <div className="absolute left-0 top-[24px] h-[2px] w-full bg-black" />
              <div className="absolute left-0 top-[36px] h-[2px] w-full bg-black" />
              <div className="absolute left-0 top-[48px] h-[2px] w-full bg-black" />
              <div className="absolute left-0 top-[60px] h-[2px] w-full bg-black" />
              <div className="absolute left-1 top-[-20px] text-[6rem] leading-none text-black">
                {'\uD834\uDD1E'}
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#a32020] px-3 py-1 text-base font-medium text-white">
                {CONTACT_INFO.address}
              </div>
            </div>

            <div className="rounded-sm border border-white/20 bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white sm:text-sm lg:hidden">
              {CONTACT_INFO.address}
            </div>
          </div>

          <div className="flex items-center justify-start lg:justify-end">
            <div className="flex h-[96px] w-[96px] items-center justify-center overflow-hidden bg-white p-2 shadow-lg sm:h-[118px] sm:w-[118px] lg:h-[132px] lg:w-[132px]">
              <img
                src="https://static.wixstatic.com/media/407ce4_52c9645257ee46caa73cab642040742c~mv2.jpg/v1/fill/w_142,h_142,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/chgs_edited_edited.jpg"
                alt="Strawberry Crest Chargers logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <nav className="border-t border-black/10 bg-[#ececec]">
        <div className="mx-auto max-w-[1900px] overflow-x-auto px-3 py-2">
          <div className="flex min-w-max items-center gap-2">
            {NAV_LINKS.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    'flex min-h-[48px] min-w-[122px] items-center justify-center rounded-sm px-4 text-center font-condensed text-[0.98rem] uppercase tracking-[0.04em] transition-all',
                    active
                      ? 'bg-[#1f1f1f] text-white shadow-[inset_0_-3px_0_0_#b3131b]'
                      : 'bg-transparent text-black hover:bg-white hover:text-[#a32020]',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="bg-[#2d2d2d] px-4 py-3">
        <div className="mx-auto h-1.5 max-w-[1450px] bg-[repeating-linear-gradient(90deg,#d63a2f_0_16px,transparent_16px_24px)]" />
      </div>
    </header>
  );
}

