import { ContentObject, GlobalProps } from '@/types';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import { Annotated } from './Annotated';

/**
 * Since the layout of pages is dynamic (e.g. a page can have sections of different types, sections can have blocks of various types, etc.),
 * many of the components to render are resolved run-time based on the content type.
 * The <DynamicComponent> component accepts and ContentObject instance and returns an initialized component for that type.
 *
 * For example, when a page component iterates the section objects in its 'sections' content field,
 * it can create the actual component for each section using:
 *
 *     const component = <DynamicComponent {...section} />
 *
 * Another feature of DynamicComponent is automatically wrapping the actual component with a Stackbit annotation,
 * if such is found in the content object (see annotateContentObject() in src/utils/content.ts).
 * This replaces the need for manually typing in annotation throught the codebase.
 *
 * Note: component code is loaded via Next.js dynamic import, so that it's only fetched if actually used in a page.
 */

type DynamicComponentProps = ContentObject & {
    global?: GlobalProps;
};

export const DynamicComponent: React.FC<DynamicComponentProps> = (props) => {
    const modelName = props.type;

    // Resolve component by content type
    if (!modelName) {
        throw new Error(`Object does not have a 'type' property: ${JSON.stringify(props, null, 2)}`);
    }

    let Component = components[modelName] as ComponentType;
    if (!Component) {
        throw new Error(`No component matches type: '${modelName}'`);
    }

    return (
        <Annotated content={props}>
            <Component {...props} />
        </Annotated>
    );
};

const components = {
    CtaSection: dynamic(() => import('./sections/CtaSection')),
    DividerSection: dynamic(() => import('./sections/DividerSection')),
    FeaturedItem: dynamic(() => import('./sections/FeaturedItemsSection/FeaturedItem')),
    FeaturedItemsSection: dynamic(() => import('./sections/FeaturedItemsSection')),
    FeaturedProjectsSection: dynamic(() => import('./sections/FeaturedProjectsSection')),
    HeroSection: dynamic(() => import('./sections/HeroSection')),
    ImageBlock: dynamic(() => import('./molecules/ImageBlock')),
    MediaGallerySection: dynamic(() => import('./sections/MediaGallerySection')),
    ProjectFeedSection: dynamic(() => import('./sections/ProjectFeedSection')),
    RecentProjectsSection: dynamic(() => import('./sections/RecentProjectsSection')),
    QuoteSection: dynamic(() => import('./sections/QuoteSection')),
    LabelsSection: dynamic(() => import('./sections/LabelsSection')),
    TestimonialsSection: dynamic(() => import('./sections/TestimonialsSection')),
    TextSection: dynamic(() => import('./sections/TextSection')),
    PageLayout: dynamic(() => import('./layouts/PageLayout')),
    ProjectLayout: dynamic(() => import('./layouts/ProjectLayout')),
    ProjectFeedLayout: dynamic(() => import('./layouts/ProjectFeedLayout'))
};
