import InfoSection from '@/components/InfoSection';
import { GALLERY_MARCHING_2020 } from '@/data/siteData';

export const metadata = {
  title: 'Marching Season 2020',
  description: 'Marching season 2020 gallery.',
};

export default function MarchingSeason2020Page() {
  return (
    <InfoSection title="Marching Season 2020" intro="A look back at the 2020 season.">
      {GALLERY_MARCHING_2020.length ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY_MARCHING_2020.map((src, index) => (
            <div key={src} className="aspect-[4/3] overflow-hidden rounded-sm border border-white/10 bg-[#161616]">
              <img src={src} alt={`Marching season 2020 ${index + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-sm border border-white/10 bg-[#161616] p-6 text-gray-300">
          This gallery is ready for photos. Add image URLs in <code>src/data/siteData.js</code> to populate it.
        </div>
      )}
    </InfoSection>
  );
}
