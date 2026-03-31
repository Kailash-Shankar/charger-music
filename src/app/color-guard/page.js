import InfoSection from '@/components/InfoSection';
import { COLOR_GUARD_PHOTOS, EXTERNAL_LINKS } from '@/data/siteData';

export const metadata = {
  title: 'Color Guard',
  description: 'Learn about the SCHS Color Guard program.',
};

export default function ColorGuardPage() {
  return (
    <InfoSection
      title="Color Guard"
      intro="The visual heartbeat of the Marching Chargers, blending movement, artistry, and performance."
      actions={[
        { label: 'Join Color Guard', href: EXTERNAL_LINKS.colorGuardJoinForm, external: true },
        { label: 'View Multimedia', href: '/multimedia', variant: 'outline' },
      ]}
    >
      <div className="mb-8 rounded-sm border border-white/10 bg-[#161616] p-6 text-gray-300 leading-relaxed">
        Strawberry Crest Color Guard performs with the marching band throughout the season and brings choreography, flags, rifles, and expressive movement to the field. Students of all experience levels are encouraged to explore the program.
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {COLOR_GUARD_PHOTOS.map((src, index) => (
          <div key={src} className="aspect-square overflow-hidden rounded-sm border border-white/10 bg-[#161616]">
            <img src={src} alt={`Color guard photo ${index + 1}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </InfoSection>
  );
}
