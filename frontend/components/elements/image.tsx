import { getStrapiMedia } from '../../utils/media';
import { MediaType } from '../../utils/types';

interface ImageProps {
  media: MediaType;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ media, className }) => {
  const { url, alternativeText } = media;
  const fullUrl = getStrapiMedia(url);

  return (
    <img src={fullUrl!} alt={alternativeText || ''} className={className} />
  );
};

export default Image;
