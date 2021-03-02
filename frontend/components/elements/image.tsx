import { getStrapiMedia } from '../../utils/media';
import { ImageMediaType } from '../../utils/types';
import Image from 'next/image';

interface ImageProps {
  media: ImageMediaType;
  className?: string;
}

const CustomImage: React.FC<ImageProps> = ({ media, className }) => {
  const { url, alternativeText } = media;
  const fullUrl = getStrapiMedia(url);

  return (
    <Image
      src={fullUrl!}
      alt={alternativeText || ''}
      className={className}
      width={media.width as number}
      height={media.height as number}
    />
  );
};

export default CustomImage;
