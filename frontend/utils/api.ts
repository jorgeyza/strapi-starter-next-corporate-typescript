import { GlobalDataType, PagesType } from './types';

export function getStrapiURL(path: string): string {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`;
}

// Helper to make GET requests to Strapi

export async function fetchAPI(path: string, options = {}) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}

export const getPageData = async (slug: string, preview = false) => {
  // Find the pages that match this slug
  const pagesData = (await fetchAPI(
    `/pages?slug=${slug}&status=published${preview ? '&status=draft' : ''}`
  )) as PagesType[];

  // Make sure we found something, otherwise return null
  if (pagesData == null || pagesData.length === 0) {
    return null;
  }

  // Return the first item since there should only be one result per slug
  return pagesData[0];
};

// Get site data from Strapi (metadata, navbar, footer...)
export const getGlobalData = async () => {
  const global = (await fetchAPI('/global')) as GlobalDataType;
  return global;
};
