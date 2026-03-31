import InfoSection from '@/components/InfoSection';
import { GALLERY_MPA_2024 } from '@/data/siteData';

export const metadata = {
  title: 'MPA 2024',
  description: 'Music Performance Assessment 2024 gallery.',
};

export default function Mpa2024Page() {
  return (
    <InfoSection title="MPA 2024" intro="Photos from Music Performance Assessment 2024.">
      {GALLERY_MPA_2024.length ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY_MPA_2024.map((src, index) => (
            <div key={src} className="aspect-[4/3] overflow-hidden rounded-sm border border-white/10 bg-[#161616]">
              <img src={src} alt={`MPA 2024 ${index + 1}`} className="h-full w-full object-cover" />
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
