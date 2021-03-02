import { getStrapiMedia } from '../../utils/media';
import { ImageMediaType, VideoMediaType } from '../../utils/types';

interface VideoProps {
  media: VideoMediaType;
  poster?: ImageMediaType;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
}

const Video: React.FC<VideoProps> = ({
  media,
  poster = null,
  className,
  controls = true,
  autoPlay = false,
}) => {
  const fullVideoUrl = getStrapiMedia(media.url);
  const fullPosterUrl = getStrapiMedia(poster?.url ?? '');

  return (
    <video
      className={className}
      poster={fullPosterUrl ?? undefined}
      controls={controls}
      autoPlay={autoPlay}
    >
      <source src={fullVideoUrl!} type={media.mime} />
    </video>
  );
};

export default Video;
