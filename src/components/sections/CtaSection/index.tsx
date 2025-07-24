import classNames from 'classnames';

import { Action } from '@/components/atoms';
import Section from '../Section';

export default function CtaSection(props) {
    const { elementId, colors, backgroundSize, title, text, actions = [], styles = {} } = props;
    const sectionFlexDirection = styles.self?.flexDirection ?? 'row';
    const sectionAlign = styles.self?.textAlign ?? 'left';
    return (
        <Section elementId={elementId} colors={colors} backgroundSize={backgroundSize} styles={styles.self}>
            <div
                className={classNames(
                    'flex flex-row gap-1 max-w-xl mx-auto',
                    styles.self?.flexDirection !== 'col' && 'lg:flex-row lg:items-center lg:justify-center'
                )}
            >
                {actions.length > 0 && (
                    <div className={classNames('w-full', { 'lg:w-auto': sectionFlexDirection === 'row' })}>
                        <div
                            className={classNames('w-full flex flex-wrap items-center gap-4', {
                                'lg:w-auto': sectionFlexDirection === 'row',
                                'justify-center': sectionAlign === 'center',
                                'justify-end': sectionAlign === 'right'
                            })}
                        >
                            {actions.map((action, index) => (
                                <Action key={index} {...action} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Section>
    );
}
