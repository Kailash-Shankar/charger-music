import InfoSection from '@/components/InfoSection';
import { HOME_GALLERY } from '@/data/siteData';

export const metadata = {
  title: 'Orchestra Photo Gallery',
  description: 'Photos from Strawberry Crest orchestra performances and events.',
};

export default function OrchestraPhotoGalleryPage() {
  return (
    <InfoSection title="Orchestra Photo Gallery" intro="A gallery of moments from the Strawberry Crest music program.">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {HOME_GALLERY.map((src, index) => (
          <div key={src} className="aspect-[4/3] overflow-hidden rounded-sm border border-white/10 bg-[#161616]">
            <img src={src} alt={`Orchestra gallery ${index + 1}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </InfoSection>
  );
}
