import React from 'react';
import { connect, styled } from 'frontity';
import ArrowLink from '../UI/arrowLink';
import tw from 'twin.macro';

const Related = ({ content, libraries }) => {
    const { copy, link_text, link_url, image } = content;
    const Html2React = libraries.html2react.Component;
    const linkUrl = libraries.source.normalize(link_url);
    return (
        <RelatedWrapper>
            <RelatedBg bg={image} />
            <RelatedInner>
                {copy && 
                    <ColumnBlock>
                        <Html2React html={copy} />
                        {link_text && <ArrowLink link={linkUrl} text={link_text} arrowWhite={true} className="arrow-blue" />}
                    </ColumnBlock>
                }
            </RelatedInner>
        </RelatedWrapper>
    );
};

export default connect(Related);

const RelatedBg = styled.div`
    ${tw`absolute top-0 left-0 w-full h-full transform transition-transform duration-500 bg-no-repeat bg-right`};
    background-image: url(${props => props.bg});
    background-size: auto 100%;
    clip-path: polygon(45% 0, 100% 0%, 100% 100%, 55% 100%);
`;

const RelatedWrapper = styled.div`
    ${tw`flex flex-wrap items-center md:flex-nowrap bg-yellow relative overflow-hidden w-full py-20 md:py-40`};
    &:hover {
        ${RelatedBg} {
            ${tw`translate-x-8`}
        }
    }
`;

const RelatedInner = tw.div`
    container flex flex-wrap md:flex-nowrap relative z-20
`;

const ColumnBlock = styled.div`
    ${tw`w-full md:w-2/5 mb-4 md:mb-0`}
    p {
        ${tw`text-blue text-4xl`}
    }
`;