import React from 'react';
import { connect, styled, css } from 'frontity';
import Triangle from '../UI/triangle';
import ArrowLink from '../UI/arrowLink';
import H1 from '../common/h1';
import tw from "twin.macro";
import triangleImage from '../../assets/img/Header-Tri-blue.svg';

const Hero = ({ post, data, fmedia, libraries, state }) => {
    const source_url = fmedia.source_url;
    const title = post.title.rendered;
    const content = post.content.rendered;
    const Html2React = libraries.html2react.Component;
    const heroLink = libraries.source.normalize(post.acf.hero_link);
    const heroLinkText = post.acf.hero_link_text;
    const { black, white } = state.theme.colours;
    // console.log(post);
    return (
        <HeroWrapper bg={source_url}>
            <HeroContainer>
                {data.isHome && <Triangle bg={triangleImage} />}
                <HeroInner>
                    <H1 colour={data.isHome ? black : white} title={title} />
                    {content && <HeroContent className="hero-content" colour={data.isHome ? black : white}><Html2React html={content} /></HeroContent>}
                    {heroLinkText && <ArrowLink link={heroLink} text={heroLinkText} className="arrow-white" colour={black} />}
                </HeroInner>
            </HeroContainer>
        </HeroWrapper>
    );
};

export default connect(Hero);

const HeroWrapper = styled.div`
    ${tw`flex justify-start items-end min-h-screen w-screen bg-no-repeat bg-cover bg-center overflow-hidden relative`};
    background-image: url(${props => props.bg})
`;

const HeroContainer = styled.div`
    ${tw`px-4 md:px-24 pb-10 md:pb-20 xl:pb-40`};
`;

const HeroInner = styled.div`
    ${tw`relative w-1/2 md:w-3/5 2xl:w-1/2 md:pr-8`};
`;

const HeroContent = styled.div`
    ${tw`text-lg`};
    p {
        margin: 1rem 0 .5rem;
        color: ${props => props.colour}
    }
`;


