import React, { useState, useRef, useEffect } from 'react';
import { connect, styled } from 'frontity';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowLink from '../UI/arrowLink';
import SwiperCore, { Pagination, Controller, EffectFade, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Animation from '../UI/animation';
import svg2 from '../../assets/img/animation-homepage-2.svg';
import tw from 'twin.macro';

SwiperCore.use([Pagination, Controller, EffectFade, Mousewheel]);

const VerticalSlider = ({ content, libraries, data }) => {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const pinnedRef = useRef(null);

    const { slides } = content;

    const params1 = {
        direction: 'vertical',
        // mousewheel: {
        //     releaseOnEdges: true,
        //     forceToAxis: true,
        //     eventsTarget: ".vertical-slider-wrapper"
        // },
        speed: 1000,
        pagination: {
            clickable: true,
        },
        slidesPerView: 1,
        controller: {
            control: secondSwiper
        }
    };
    const params2 = {
        preloadImages: false,
        lazy: true,
        noSwiping: true,
        effect: 'fade',
        controller: {
            control: firstSwiper
        }
    };

    useEffect(() => {
        const pinnedRefEl = pinnedRef.current;
	    if (!pinnedRefEl) return;

        let ns = Math.random().toString(36).substring(7);
        gsap.to(pinnedRef.current, {
            duration: .3,
            scrollTrigger: {
                id: `${ ns }-title`,
                trigger: pinnedRef.current,
                start: "top top",
                end: "200%",
                // pin: true,
                pinSpacing: "100%"
            }
        });
        return () => {
            const pinnedElTrigger = ScrollTrigger.getById(`${ ns }-title`);
			if (pinnedElTrigger) {
				pinnedElTrigger.kill(true);
                // console.log(ScrollTrigger.getById(`${ ns }-title`));
			}
        }
    }, []);

    return (
        <VerticalSliderWrapper className="vertical-slider-wrapper" ref={pinnedRef}>
            <VerticalSliderCol tw="z-0">
                <Swiper {...params2} onSwiper={setSecondSwiper}>
                    {slides && slides.map((slide, i) => {
                        const {  image } = slide;
                        return (
                            <SwiperSlide key={i.toString()}>
                                <ImageSlide bg={image} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </VerticalSliderCol>
            {/* {data.isHome &&  */}
                <SvgWrapper>
                    <Animation svg={svg2} elId="emy803gonfxd1" />
                </SvgWrapper>
            {/* } */}
            <VerticalSliderCol tw="z-20">
                <Swiper {...params1} onSwiper={setFirstSwiper}>
                    {slides && slides.map((slide, i) => {
                        const {  copy, heading, link_text, link_url } = slide;
                        const Html2React = libraries.html2react.Component;
                        const linkUrl = libraries.source.normalize(link_url);
                        return (
                            <SwiperSlide key={i.toString()}>
                                <ContentSlide>
                                    <div>
                                        <p>{heading}</p>
                                        <Html2React html={copy} />
                                        {link_text && <ArrowLink link={linkUrl} text={link_text} className="arrow-green" />}
                                    </div>
                                </ContentSlide>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </VerticalSliderCol>
        </VerticalSliderWrapper>
    );
};

export default connect(VerticalSlider);

const VerticalSliderWrapper = tw.div`
    relative flex flex-wrap md:flex-nowrap pt-10 md:pt-20 max-w-full max-h-screen
`;

const VerticalSliderCol = tw.div`
    md:w-1/2
`;

const ImageSlide = styled.div`
    ${tw`bg-cover h-full w-full`}
    background-image: url(${props => props.bg})
`;

const ContentSlide = styled.div`
    ${tw`p-10 md:p-14 md:pr-20 2xl:p-20 2xl:pr-40 flex items-center h-full`}
`;

const SvgWrapper = styled.div`
    ${tw`absolute w-3/5 z-10 pointer-events-none`}
    right: 25vw;
    top: -25vh;
`;