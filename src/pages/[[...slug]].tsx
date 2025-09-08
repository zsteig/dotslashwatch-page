import Head from 'next/head';
import { useMemo } from 'react';

import { DynamicComponent } from '@/components/components-registry';
import { PageComponentProps } from '@/types';
import { allContent } from '@/utils/content';
import {
  seoGenerateMetaDescription,
  seoGenerateMetaTags,
  seoGenerateTitle,
} from '@/utils/seo-utils';
import { resolveStaticProps } from '@/utils/static-props-resolvers';

// ✅ Modular helper to render meta tags
function RenderMetaTags({
  tags,
}: {
  tags: { property: string; content: string; format?: string }[];
}) {
  return tags.map((tag) =>
    tag.format === 'property' ? (
      <meta key={tag.property} property={tag.property} content={tag.content} />
    ) : (
      <meta key={tag.property} name={tag.property} content={tag.content} />
    )
  );
}

const Page: React.FC<PageComponentProps> = (props) => {
  const { global, ...page } = props;
  const { site } = global;

  // ✅ Memoized SEO values for performance
  const title = useMemo(() => seoGenerateTitle(page, site), [page, site]);
  const metaTags = useMemo(() => seoGenerateMetaTags(page, site), [page, site]);
  const metaDescription = useMemo(() => seoGenerateMetaDescription(page, site), [page, site]);

  return (
    <>
      <Head>
        <title>{title}</title>
        {metaDescription && <meta name="description" content={metaDescription} />}
        <RenderMetaTags tags={metaTags} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {site.favicon && (
          <>
            <link rel="icon" href={site.favicon} />
          </>
        )}
      </Head>
      <DynamicComponent {...props} />
    </>
  );
};

// ✅ Streamlined path resolver
export function getStaticPaths() {
  const paths = allContent()
    .map((obj) => obj.__metadata?.urlPath)
    .filter(Boolean);
  return { paths, fallback: false };
}

// ✅ Early return + fallback support
export function getStaticProps({ params }) {
  const urlPath = '/' + (params.slug || []).join('/');
  const allData = allContent();
  const props = resolveStaticProps(urlPath, allData);
  return props ? { props } : { notFound: true };
}

export default Page;
