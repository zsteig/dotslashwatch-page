import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';
import * as React from 'react';

import { DynamicComponent } from '@/components/components-registry';
import ImageBlock from '@/components/molecules/ImageBlock';
import { PageComponentProps, ProjectLayout } from '@/types';
import HighlightedPreBlock from '@/utils/highlighted-markdown';
import BaseLayout from '../BaseLayout';

type ComponentProps = PageComponentProps & ProjectLayout;

const Component: React.FC<ComponentProps> = (props) => {
    const {
        title,
        description,
        markdownContent,
        media,
        bottomSections = []
    } = props;

    const markdownOptions = {
        forceBlock: true,
        overrides: {
            pre: HighlightedPreBlock,
            ImageBlock: ImageBlock
        }
    };

    return (
        <BaseLayout {...props}>
            <article className="px-4 py-14 lg:py-20">
                <header className="max-w-5xl mx-auto mb-10 sm:mb-14">
                    <div className="flex flex-col gap-6 md:flex-row md:justify-between">
                        <h1 className="text-5xl sm:text-6xl md:max-w-2xl md:grow">{title}</h1>
                    </div>
                </header>
                {description && (
                    <div className="max-w-5xl mx-auto mb-10 text-lg uppercase sm:text-xl sm:mb-14">{description}</div>
                )}
                {media && (
                    <figure className="max-w-3xl mx-auto mb-10 sm:mb-14">
                        <ProjectMedia media={media} />
                    </figure>
                )}
                {markdownContent && (
                    <Markdown
                        options={markdownOptions}
                        className="max-w-3xl mx-auto prose sm:prose-lg"
                    >
                        {markdownContent}
                    </Markdown>
                )}
            </article>
            {bottomSections?.map((section, index) => {
                return <DynamicComponent key={index} {...section} />;
            })}
        </BaseLayout>
    );
};
export default Component;

function ProjectMedia({ media }) {
  if (Array.isArray(media)) {
    return (
      <>
        {media.map((item, index) => (
          <figure key={index} className="max-w-3xl mx-auto mb-10 sm:mb-14">
            <DynamicComponent {...item} className={classNames('rounded-4xl', { 'w-full': item.type === 'ImageBlock' })} />
          </figure>
        ))}
      </>
    );
  }
  return (
    <figure className="max-w-3xl mx-auto mb-10 sm:mb-14">
      <DynamicComponent {...media} className={classNames('rounded-4xl', { 'w-full': media.type === 'ImageBlock' })} />
    </figure>
  );
}
