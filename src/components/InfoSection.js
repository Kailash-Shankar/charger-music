import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function InfoSection({ title, intro, children, actions = [] }) {
  return (
    <>
      <PageHero title={title} subtitle={intro} />
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          {actions.length ? (
            <div className="mb-10 flex flex-wrap gap-3">
              {actions.map((action) =>
                action.external ? (
                  <a
                    key={action.href}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={action.variant === 'outline' ? 'btn-outline' : 'btn-primary'}
                  >
                    {action.label}
                  </a>
                ) : (
                  <Link
                    key={action.href}
                    href={action.href}
                    className={action.variant === 'outline' ? 'btn-outline' : 'btn-primary'}
                  >
                    {action.label}
                  </Link>
                )
              )}
            </div>
          ) : null}
          {children}
        </div>
      </section>
    </>
  );
}
