import App from 'next/app';
import type { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { OpenGraph } from 'next-seo/lib/types';

import { getStrapiMedia } from '../utils/media';
import { getGlobalData } from '../utils/api';
import { GlobalDataType } from '../utils/types';

import Layout from '../components/layout';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Prevent Next bug when it tries to render the [[...slug]] route
  const router = useRouter();
  if (router.asPath === '/[[...slug]]') {
    return null;
  }

  // Extract the data we need
  const { global }: { global: GlobalDataType } = pageProps;

  if (global == null) {
    return <ErrorPage statusCode={404} />;
  }

  const { metadata } = global;

  return (
    <>
      {/* Favicon */}
      <Head>
        <link rel="icon" href={getStrapiMedia(global.favicon.url)} />
      </Head>
      {/* Global site metadata */}
      <DefaultSeo
        titleTemplate={`%s | ${global.metaTitleSuffix}`}
        title={'Page'}
        description={metadata.metaDescription}
        openGraph={
          {
            ...(metadata.shareImage &&
              metadata.shareImage.formats && {
                images: Object.values(metadata.shareImage.formats).map(
                  (image) => {
                    return {
                      url: getStrapiMedia(image.url),
                      width: image.width,
                      height: image.height,
                    };
                  }
                ),
              }),
          } as OpenGraph
        }
        twitter={{
          ...(metadata.twitterCardType && {
            cardType: metadata.twitterCardType,
          }),
          // Handle is the twitter username of the content creator
          ...(metadata.twitterUsername && { handle: metadata.twitterUsername }),
        }}
      />
      {/* Display the content */}
      <Layout global={global}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

interface ExtendedAppContext extends AppContext {
  pathname: string;
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: ExtendedAppContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await getGlobalData();
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global, path: ctx.pathname } };
};

export default MyApp;
