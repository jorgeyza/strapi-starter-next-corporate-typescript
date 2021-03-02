import Link from 'next/link';

import { LinkType } from '../../utils/types';

interface CustomLinkProps {
  link: LinkType;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ link, children }) => {
  const isInternalLink = link.url?.startsWith('/');

  // For internal links, use the Next.js Link component
  if (isInternalLink) {
    return (
      <Link href="/[[...slug]]" as={link.url}>
        <a>{children}</a>
      </Link>
    );
  }

  // Plain <a> tags for external links
  return (
    <a
      href={link.url}
      // Change target and rel attributes is newTab is turned on
      target={link.newTab ? '_blank' : '_self'}
      rel={link.newTab ? 'noopener noreferrer' : ''}
    >
      {children}
    </a>
  );
};

export default CustomLink;
