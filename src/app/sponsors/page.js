import InfoSection from '@/components/InfoSection';
import { EXTERNAL_LINKS } from '@/data/siteData';

export const metadata = {
  title: 'Sponsors',
  description: 'Supporters and sponsors of the Strawberry Crest music program.',
};

export default function SponsorsPage() {
  return (
    <InfoSection
      title="Sponsors"
      intro="Community partners and supporters who help the music program grow."
      actions={[
        { label: 'Support the Program', href: EXTERNAL_LINKS.donate, external: true },
        { label: 'Contact Us', href: '/contact', variant: 'outline' },
      ]}
    >
      <div className="rounded-sm border border-white/10 bg-[#161616] p-6 text-gray-300 leading-relaxed">
        Sponsor information, recognition opportunities, and partner highlights can live here. For now, this page gives visitors a working destination from the main navigation and a clear path to support the Strawberry Crest music department.
      </div>
    </InfoSection>
  );
}
