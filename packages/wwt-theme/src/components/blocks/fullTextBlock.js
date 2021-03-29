import React, { useRef } from 'react';
import { connect, styled } from 'frontity';
import ArrowLink from '../UI/arrowLink';
import Animation from '../UI/animation';
import svg1 from '../../assets/img/animation-homepage-1.svg';
import tw from "twin.macro";

const FullTextBlock = ({ data, content, libraries }) => {
    let animation1 = useRef();
    const block = content.block;
    const Html2React = libraries.html2react.Component;
    const linkUrl = libraries.source.normalize(content.link_url);
    const linkText = content.link_text;
    // console.log(content);

    return (
        <FullBlockWrapper>
            {data.isHome && 
                <SvgWrapper>
                    <Animation animationRef={animation1} svg={svg1} elId="eq4vlru6wq191" />
                </SvgWrapper>
            }
            <FullBlockInner>
                <Html2React html={block} />
                {linkUrl && <ArrowLink link={linkUrl} text={linkText} className="arrow-green" />}
            </FullBlockInner>
        </FullBlockWrapper>
    );
};

export default connect(FullTextBlock);

const FullBlockWrapper = styled.div`
    ${tw`container flex flex-wrap relative py-10 md:py-20`}
`;
const FullBlockInner = styled.div`
    ${tw`w-screen md:w-3/4 z-10`}
    p {
        ${tw`md:pr-56 text-sm md:text-3xl`}
    }
`;

const SvgWrapper = styled.div`
    ${tw`absolute top-0 w-1/2 z-0`}
    right: -10%;
`;