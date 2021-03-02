import { MediaType } from '../../utils/types';

import Image from '../elements/image';

interface ColumnFeaturesType {
  id: string | number;
  title: string;
  description: string;
  icon: MediaType;
}

export interface FeatureColumnsGroupProps {
  data: {
    features: ColumnFeaturesType[];
  };
}

const FeatureColumnsGroup: React.FC<FeatureColumnsGroupProps> = ({ data }) => {
  return (
    <div className="container flex flex-col lg:flex-row lg:flex-wrap gap-12 align-top py-12">
      {data.features.map((feature) => (
        <div className="flex-1 text-lg" key={feature.id}>
          <Image media={feature.icon} className="w-10" />
          <h3 className="font-bold mt-4 mb-4">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureColumnsGroup;
