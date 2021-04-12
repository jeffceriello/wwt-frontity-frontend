import React, { createRef, useEffect } from 'react';
import { connect, styled } from 'frontity';
import { gsap } from "gsap";
import SwiperCore, { EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Triangle from '../UI/triangle';
import ArrowLink from '../UI/arrowLink';
import H1 from '../common/h1';
import tw from "twin.macro";
import triangleImage from '../../assets/img/Header-Tri-blue.svg';

SwiperCore.use([EffectFade, Autoplay]);

const sliderParams = {
    preloadImages: false,
    lazy: true,
    noSwiping: true,
    effect: 'fade',
    autoplay: {
        delay: 5000,
    },
    speed: 800
};

const HeroSlider = ({ post, data, libraries, state, fmedia }) => {
    let heroRefs = [];
    const { black, white } = state.theme.colours;
    const source_url = fmedia.source_url;
    const title = post.title.rendered;
    const content = post.content.rendered;
    const Html2React = libraries.html2react.Component;
    const heroLink = libraries.source.normalize(post.acf.hero_link);
    const heroLinkText = post.acf.hero_link_text;
    const hero = post.acf.hero;

    useEffect(() => {
        heroRefs.forEach(r => {
            gsap.set(r.current, {y: 50, autoAlpha: 0});
            gsap.to(r.current, {
                duration: 1.5,
                y: 0,
                autoAlpha: 1,
                delay: .5,
                ease: "power2.out"
            });
        });
    }, []);

    if (hero) {
        return (
            <Swiper {...sliderParams}>
                {hero && hero.map((slide, i) => {
                    const heroSlideRef = createRef();
                    heroRefs.push(heroSlideRef);
                    const { background_image, title, copy, hero_link, hero_link_text } = slide;
                    return (
                        <SwiperSlide key={i.toString()}>
                            <HeroWrapper bg={background_image}>
                                <HeroContainer className={`${data.isHome ? "hero-container-homepage" : null}`}>
                                    {data.isHome && <Triangle bg={triangleImage} />}
                                    <HeroInner ref={heroSlideRef} className={`${data.isHome ? "hero-inner-homepage" : null}`}>
                                        <H1 colour={data.isHome ? black : white} title={title} />
                                        {copy && <HeroContent className="hero-content" colour={data.isHome ? black : white}><Html2React html={copy} /></HeroContent>}
                                        {hero_link_text && <ArrowLink link={hero_link} text={hero_link_text} className="arrow-white" colour={black} />}
                                    </HeroInner>
                                </HeroContainer>
                            </HeroWrapper>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        )
    } else {
        const heroSlideRef = createRef();
        heroRefs.push(heroSlideRef);
        return (
            <HeroWrapper bg={source_url} margin={!data.isHome}>
                <HeroContainer className={`${data.isHome ? "hero-container-homepage" : null}`}>
                    {data.isHome && <Triangle bg={triangleImage} />}
                    <HeroInner ref={heroSlideRef} className={`${data.isHome ? "hero-inner-homepage" : null}`}>
                        <H1 colour={data.isHome ? black : white} title={title} />
                        {content && <HeroContent className="hero-content" colour={data.isHome ? black : white}><Html2React html={content} /></HeroContent>}
                        {heroLinkText && <ArrowLink link={heroLink} text={heroLinkText} className="arrow-white" colour={black} />}
                    </HeroInner>
                </HeroContainer>
            </HeroWrapper>
        );
    }
}

export default connect(HeroSlider);

const HeroWrapper = styled.div`
    ${tw`flex justify-start items-end min-h-screen w-screen bg-no-repeat bg-cover bg-center overflow-hidden relative`};
    background-image: url(${props => props.bg});
    margin-bottom: ${props => props.margin ? "5rem" : "0"};
`;

const HeroContainer = styled.div`
    ${tw`px-4 md:px-16 pb-20 w-full`};
    &.hero-container-homepage {
        ${tw`md:pb-48 lg:pb-52 xl:pb-60`}
    }
`;

const HeroInner = styled.div`
    ${tw`relative w-full md:w-1/2 xl:w-3/4`};
    transform: translateY(50px);
    opacity: 0;
    h1 {
        margin-bottom: 10px;
    }
    &.hero-inner-homepage {
        ${tw`w-1/2 md:pr-10 2xl:pr-20`}
    }
`;

const HeroContent = styled.div`
    ${tw`text-lg`};
    p {
        margin: 1rem 0 .5rem;
        color: ${props => props.colour}
    }
`;


