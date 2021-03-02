import { SectionComponentProps } from '../components/sections';

export interface ButtonType {
  id: string | number;
  text: string;
  type: 'primary' | 'secondary';
}

export interface LinkType {
  id: string | number;
  url: string;
  text: string;
  newTab?: boolean;
}

export type ButtonAppearance =
  | 'dark'
  | 'white-outline'
  | 'white'
  | 'dark-outline';

interface SectionPictureFormats {
  thumbnail: {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path: string | null;
    url: string;
  };
  large: {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path: string | null;
    url: string;
  };
  medium: {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path: string | null;
    url: string;
  };
  small: {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path: string | null;
    url: string;
  };
}

export interface SectionButton {
  id: string | number;
  url: string;
  newTab: boolean;
  text: string;
  type: 'primary' | 'secondary';
}

export interface ImageMediaType {
  id: number | string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: SectionPictureFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface VideoMediaType {
  id: number | string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: null;
  height: null;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface MetadataType {
  metaTitle: string;
  metaDescription: string;
  shareImage?: ImageMediaType;
  twitterCardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterUsername?: string;
}

export interface NotificationBannerType {
  text: string;
  type: 'alert' | 'info' | 'warning';
}

export interface NavbarType {
  logo: ImageMediaType;
  links: LinkType[];
  button: SectionButton;
}

export interface FooterType {
  logo: ImageMediaType;
  columns: {
    id: string | number;
    title: string;
    links: LinkType[];
  }[];
  smallText: string;
}

export interface GlobalDataType {
  metadata: MetadataType;
  metaTitleSuffix: string;
  favicon: ImageMediaType;
  notificationBanner: NotificationBannerType;
  navbar: NavbarType;
  footer: FooterType;
}

interface ColumnFeaturesType {
  id: string | number;
  title: string;
  description: string;
  icon: ImageMediaType;
}

interface RowFeaturesType {
  id: string | number;
  title: string;
  description: string;
  media: ImageMediaType;
  link: LinkType;
}

interface LogoType {
  id: string | number;
  title: string;
  logo: ImageMediaType;
}

interface TestimonialType {
  id: string | number;
  logo: ImageMediaType;
  picture: ImageMediaType;
  text: string;
  authorName: string;
  authorTitle: string;
  link: string;
}

interface PlansType {
  id: string | number;
  name: string;
  description: string;
  features: {
    id: string | number;
    name: string;
  }[];
  isRecommended: boolean;
  price: number;
  pricePeriod: String;
}

interface SubmitButtonType {
  text: string;
  type: 'primary' | 'secondary';
}

export interface HeroSection {
  __component: 'sections.hero';
  id: number | string;
  title: string;
  label: string;
  description: string;
  smallTextWithLink: string;
  buttons: SectionButton[];
  picture: ImageMediaType;
}

export interface LargeVideoSection {
  __component: 'sections.large-video';
  id: number | string;
  title: string;
  description: string;
  video: ImageMediaType;
  poster: ImageMediaType;
}

export interface FeatureColumnsGroupSection {
  __component: 'sections.feature-columns-group';
  id: number | string;
  features: ColumnFeaturesType[];
}

export interface FeatureRowsGroupSection {
  __component: 'sections.feature-rows-group';
  id: number | string;
  features: RowFeaturesType[];
}

export interface BottomActionsSection {
  __component: 'sections.bottom-actions';
  id: number | string;
  title: string;
  buttons: SectionButton[];
}

export interface TestimonialsGroupSection {
  __component: 'sections.testimonials-group';
  id: number | string;
  title: string;
  description: string;
  link: LinkType;
  logos: LogoType[];
  testimonials: TestimonialType[];
}

export interface RichTextSection {
  __component: 'sections.rich-text';
  id: number | string;
  content: string;
}

export interface PricingSection {
  __component: 'sections.pricing';
  id: number | string;
  title: string;
  plans: PlansType[];
}

export interface LeadFormSection {
  __component: 'sections.lead-form';
  id: number | string;
  title: string;
  emailPlaceholder: string;
  submitButton: SubmitButtonType;
  location: string;
}

export type SectionDataType =
  | HeroSection
  | LargeVideoSection
  | FeatureColumnsGroupSection
  | FeatureRowsGroupSection
  | BottomActionsSection
  | TestimonialsGroupSection
  | RichTextSection
  | PricingSection
  | LeadFormSection;

export interface PagesType {
  id: string | number;
  slug: string;
  shortName: string;
  metadata: MetadataType;
  contentSections: SectionComponentProps[];
  status: 'published' | 'draft';
}
