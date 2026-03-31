import InfoSection from '@/components/InfoSection';
import { BOOSTERS_BOARD, EXTERNAL_LINKS } from '@/data/siteData';

export const metadata = {
  title: 'Music Boosters',
  description: 'Support the program through the Strawberry Crest Music Boosters.',
};

export default function MusicBoostersPage() {
  return (
    <InfoSection
      title="Music Boosters"
      intro="Parents, families, and supporters who help power the music department all year long."
      actions={[
        { label: 'Donate', href: EXTERNAL_LINKS.donate, external: true },
        { label: 'Buy Merch', href: EXTERNAL_LINKS.merch, external: true, variant: 'outline' },
      ]}
    >
      <div className="rounded-sm border border-white/10 bg-[#161616] p-6">
        <h2 className="mb-6 text-2xl font-display font-bold text-white">Board Members</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {BOOSTERS_BOARD.map((member) => (
            <div key={`${member.role}-${member.name}`} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
              <p className="font-semibold text-white">{member.role}</p>
              <p className="text-gray-300">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </InfoSection>
  );
}
