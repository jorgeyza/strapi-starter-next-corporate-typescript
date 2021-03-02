import { NextSeo } from 'next-seo';
import { OpenGraph } from 'next-seo/lib/types';

import { getStrapiMedia } from '../../utils/media';
import { MetadataType } from '../../utils/types';

interface SeoProps {
  metadata: MetadataType;
}

const Seo: React.FC<SeoProps> = ({ metadata }) => {
  // Prevent errors if no metadata was set
  if (!metadata) return null;

  return (
    <NextSeo
      title={metadata.metaTitle}
      description={metadata.metaDescription}
      openGraph={
        {
          // Title and description are mandatory
          title: metadata.metaTitle,
          description: metadata.metaDescription,
          // Only include OG image if we have it
          // Careful: if you disable image optimization in Strapi, this will break
          ...(metadata.shareImage &&
            metadata.shareImage.formats && {
              images: Object.values(metadata.shareImage.formats).map(
                (image) => {
                  return {
                    url: getStrapiMedia(image.url),
                    width: image.width,
                    height: image.height,
                    alt: image.alternativeText,
                  };
                }
              ),
            }),
        } as OpenGraph
      }
      // Only included Twitter data if we have it
      twitter={{
        ...(metadata.twitterCardType && { cardType: metadata.twitterCardType }),
        // Handle is the twitter username of the content creator
        ...(metadata.twitterUsername && { handle: metadata.twitterUsername }),
      }}
    />
  );
};

export default Seo;

export interface OpenGraphImages {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}
