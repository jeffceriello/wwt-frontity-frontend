import React from 'react';
import { connect, styled } from 'frontity';
import ArrowLink from '../UI/arrowLink';
import tw from "twin.macro";

const Columns = ({ content, libraries }) => {
    const columnsBlocks = content.columns;
    return (
        <ColumnsWrapper>
            {columnsBlocks && columnsBlocks.map((column, i) => {
                const { copy, small_heading, image_width, image, link_url, link_text } = column;
                const Html2React = libraries.html2react.Component;
                const linkUrl = libraries.source.normalize(link_url);
                return (
                    <ColumnBlock key={i.toString()}>
                        {image &&
                            <ImageWrapper>
                                <img src={image} width={image_width} />
                            </ImageWrapper>
                        }
                        <ColumnContent>
                            {small_heading && <Heading>{small_heading}</Heading>}
                            {copy && <Html2React html={copy} />}
                            {link_text && <ArrowLink link={linkUrl} text={link_text} className="arrow-green" />}
                        </ColumnContent>
                    </ColumnBlock>
                );
            })}
        </ColumnsWrapper>
    );
};

export default connect(Columns);

const ColumnsWrapper = styled.div`
    ${tw`container flex flex-wrap md:flex-nowrap md:space-x-20 2xl:space-x-40 py-10 md:py-20 z-10`}
`;

const ColumnBlock = styled.div`
    ${tw`w-full md:w-1/3 mb-4 flex flex-col`}
`;

const ImageWrapper = styled.figure`
    ${tw`mb-4`}
`;

const ColumnContent = styled.div`
    ${tw`flex flex-col`}
`;

const Heading = styled.h5`
    ${tw`text-xl mb-3`}
`;