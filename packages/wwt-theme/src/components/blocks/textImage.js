import React from 'react';
import { connect, styled } from 'frontity';
import ArrowLink from '../UI/arrowLink';
import tw from 'twin.macro';

const TextImage = ({ content, data, libraries }) => {
    const { copy, link_text, link_url, image_position, image } = content;
    const Html2React = libraries.html2react.Component;
    const linkUrl = libraries.source.normalize(link_url);
    return (
        <TextImageWrapper>
            {copy && 
                <ColumnBlock tw="md:pr-60">
                    <Html2React html={copy} />
                    {link_text && <ArrowLink link={linkUrl} text={link_text} className="arrow-green" />}
                </ColumnBlock>
            }
            {image &&
                <ColumnBlock position={image_position}>
                    <img src={image} alt={link_text} />
                </ColumnBlock>
            }
        </TextImageWrapper>
    );
};

export default connect(TextImage);

const TextImageWrapper = tw.div`
    container flex flex-wrap items-center md:flex-nowrap py-10 md:py-20 z-20
`;

const ColumnBlock = styled.div`
    ${tw`w-full md:w-1/2 mb-4 md:mb-0`}
    order: ${props => props.position}
`;