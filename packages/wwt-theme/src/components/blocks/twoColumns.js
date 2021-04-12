import React from 'react';
import { connect, styled } from 'frontity';
import ArrowLink from '../UI/arrowLink';
import tw from 'twin.macro';

const TwoColumns = ({ content, libraries }) => {
    const Html2React = libraries.html2react.Component;
    const { main_paragraph, blocks } = content;
    return (
        <BlockWrapper>
            {main_paragraph && 
                <ColumnBlock>
                    <Heading>{main_paragraph}</Heading>
                </ColumnBlock>
            }
            {blocks &&
                <ColumnBlock>
                    {blocks.map((block, i) => {
                        const { title, copy, link_text, link_url } = block;
                        const linkUrl = libraries.source.normalize(link_url);
                        return (
                            <Block key={i.toString()}>
                                {title && <h2>{title}</h2>}
                                <Html2React html={copy} />
                                {link_text && <ArrowLink link={linkUrl} text={link_text} className="arrow-green" />}
                            </Block>
                        )
                    })}
                </ColumnBlock>
            }
        </BlockWrapper>
    );
};

export default connect(TwoColumns);

const BlockWrapper = tw.div`
    container flex justify-between flex-wrap md:flex-nowrap py-10 md:py-20 z-20
`;

const ColumnBlock = styled.div`
    ${tw`w-full md:w-1/2 mb-4 md:mb-0 md:pr-20 2xl:pr-44`}
`;

const Block = tw.div`
    mb-16 md:mb-24
`;

const Heading = styled.h3`
    font-family: var(--font-light);
    -webkit-font-smoothing: auto;
`;