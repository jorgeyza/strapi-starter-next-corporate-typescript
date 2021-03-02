import Markdown from 'react-markdown';

export interface RichTextProps {
  data: {
    content: string;
  };
}

const RichText: React.FC<RichTextProps> = ({ data }) => {
  return (
    <div className="prose prose-lg container py-12">
      <Markdown source={data.content} />
    </div>
  );
};

export default RichText;
