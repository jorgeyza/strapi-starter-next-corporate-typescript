import { useRouter } from 'next/router';
import Hero, { HeroProps } from './sections/hero';
import LargeVideo, { LargeVideoProps } from './sections/large-video';
import FeatureColumnsGroup, {
  FeatureColumnsGroupProps,
} from './sections/feature-columns-group';
import FeatureRowsGroup, {
  FeatureRowsGroupProps,
} from './sections/feature-rows-group';
import BottomActions, { BottomActionsProps } from './sections/bottom-actions';
import TestimonialsGroup, {
  TestimonialsGroupProps,
} from './sections/testimonials-group';
import RichText, { RichTextProps } from './sections/rich-text';
import Pricing, { PricingProps } from './sections/pricing';
import LeadForm, { LeadFormProps } from './sections/lead-form';
import { SectionDataType } from '../utils/types';

interface SectionDataProps {
  sectionData: SectionDataType;
}

export type SectionComponentProps =
  | HeroProps
  | LargeVideoProps
  | FeatureColumnsGroupProps
  | FeatureRowsGroupProps
  | BottomActionsProps
  | TestimonialsGroupProps
  | RichTextProps
  | PricingProps
  | LeadFormProps;

interface SectionsProps {
  sections: SectionDataType[];
  preview: boolean;
}

// Map Strapi sections to section components
const sectionComponents = {
  'sections.hero': Hero,
  'sections.large-video': LargeVideo,
  'sections.feature-columns-group': FeatureColumnsGroup,
  'sections.feature-rows-group': FeatureRowsGroup,
  'sections.bottom-actions': BottomActions,
  'sections.testimonials-group': TestimonialsGroup,
  'sections.rich-text': RichText,
  'sections.pricing': Pricing,
  'sections.lead-form': LeadForm,
};

// Display a section individually
const Section: React.FC<SectionDataProps> = ({ sectionData }) => {
  // Prepare the component
  if (!sectionData) {
    return null;
  }

  const SectionComponent: React.FC<SectionComponentProps> =
    sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  }

  // Display the section
  return <SectionComponent data={sectionData} />;
};

const PreviewModeBanner: React.FC = () => {
  const router = useRouter();
  // const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
  //   router.asPath
  // )}`;

  return (
    <div className="py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide">
      <div className="container">
        Preview mode is on.{' '}
        <a
          className="underline"
          href={`/api/exit-preview?redirect=${router.asPath}`}
        >
          Turn off
        </a>
      </div>
    </div>
  );
};

// Display the list of sections
const Sections: React.FC<SectionsProps> = ({ sections, preview }) => {
  return (
    <div className="flex flex-col">
      {/* Show a banner if preview mode is on */}
      {preview && <PreviewModeBanner />}
      {/* Show the actual sections */}
      {sections.map((section) => (
        <Section
          sectionData={section}
          key={`${section?.__component}${section?.id}`}
        />
      ))}
    </div>
  );
};

export default Sections;
