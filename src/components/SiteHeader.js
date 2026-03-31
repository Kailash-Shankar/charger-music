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
    <header className="border-b border-black bg-[#1a1a1a]">
      <div className="bg-[#a32020] text-white">
        <div className="mx-auto flex max-w-[1700px] flex-col gap-6 px-4 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="min-w-0">
            <h1 className="font-display text-3xl font-bold leading-tight tracking-[0.04em] text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.35)] sm:text-4xl lg:text-5xl">
              Strawberry Crest High
            </h1>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-[0.04em] text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.35)] sm:text-4xl lg:text-5xl">
              School Music Department
            </h2>
          </div>

          <div className="flex flex-1 flex-col gap-4 lg:max-w-[640px]">
            <div className="relative hidden h-[84px] lg:block">
              <div className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 bg-black" />
              <div className="absolute left-0 top-[18px] h-[3px] w-full bg-black" />
              <div className="absolute left-0 top-[34px] h-[3px] w-full bg-black" />
              <div className="absolute left-0 top-[50px] h-[3px] w-full bg-black" />
              <div className="absolute left-0 top-[66px] h-[3px] w-full bg-black" />
              <div className="absolute left-2 top-[-20px] text-[8rem] leading-none text-black">
                𝄞
              </div>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#a32020] px-4 text-xl text-white">
                {CONTACT_INFO.address}
              </div>
            </div>

            <div className="rounded-sm border border-white/20 bg-black/20 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white lg:hidden">
              {CONTACT_INFO.address}
            </div>
          </div>

          <div className="flex items-center justify-start gap-4 lg:justify-end">
            <div className="flex h-[128px] w-[128px] items-center justify-center overflow-hidden bg-white p-3 shadow-lg sm:h-[156px] sm:w-[156px] lg:h-[184px] lg:w-[184px]">
              <img
                src="https://static.wixstatic.com/media/407ce4_52c9645257ee46caa73cab642040742c~mv2.jpg/v1/fill/w_142,h_142,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/chgs_edited_edited.jpg"
                alt="Strawberry Crest Chargers logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <nav className="border-t border-white/10 bg-[#e8e8e8]">
        <div className="mx-auto max-w-[1900px] overflow-x-auto">
          <div className="flex min-w-max items-stretch">
            {NAV_LINKS.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    'flex min-h-[82px] min-w-[150px] items-center justify-center border-r border-black/10 px-6 text-center font-condensed text-[1.05rem] uppercase tracking-[0.03em] transition-colors',
                    active
                      ? 'bg-[#2a2a2a] text-white'
                      : 'bg-[#efefef] text-black hover:bg-white',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="bg-[#2d2d2d] px-4 py-5">
        <div className="mx-auto h-2 max-w-[1450px] bg-[repeating-linear-gradient(90deg,#d63a2f_0_18px,transparent_18px_27px)]" />
      </div>
    </header>
  );
}
