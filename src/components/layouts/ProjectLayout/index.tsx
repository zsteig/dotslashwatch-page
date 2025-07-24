import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';
import * as React from 'react';

import { DynamicComponent } from '@/components/components-registry';
import { PageComponentProps, ProjectLayout } from '@/types';
import HighlightedPreBlock from '@/utils/highlighted-markdown';
import BaseLayout from '../BaseLayout';

type ComponentProps = PageComponentProps &
    ProjectLayout & {
        prevProject?: ProjectLayout;
        nextProject?: ProjectLayout;
    };

const Component: React.FC<ComponentProps> = (props) => {
    const {
        title,
        description,
        markdownContent,
        media,
        prevProject,
        nextProject,
        bottomSections = []
    } = props;

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
                        options={{ forceBlock: true, overrides: { pre: HighlightedPreBlock } }}
                        className="max-w-3xl mx-auto prose sm:prose-lg"
                    >
                        {markdownContent}
                    </Markdown>
                )}
            </article>
            {/* {(prevProject || nextProject) && (
                <nav className="px-4 mt-12 mb-20">
                    <div className="grid max-w-5xl mx-auto gap-x-6 gap-y-12 sm:grid-cols-2 lg:gap-x-8">
                        {prevProject && <ProjectNavItem project={prevProject} className={undefined} />}
                        {nextProject && (
                            <ProjectNavItem project={nextProject} className="sm:items-end sm:col-start-2" />
                        )}
                    </div>
                </nav>
            )} */}
            {bottomSections?.map((section, index) => {
                return <DynamicComponent key={index} {...section} />;
            })}
        </BaseLayout>
    );
};
export default Component;

function ProjectMedia({ media }) {
    return <DynamicComponent {...media} className={classNames('rounded-4xl', { 'w-full': media.type === 'ImageBlock' })} />;
}
