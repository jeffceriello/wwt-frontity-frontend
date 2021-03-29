import React, { useEffect, useRef } from 'react';
import { connect, styled } from 'frontity';
import Swiper from 'react-id-swiper';
import tw from 'twin.macro';



const VerticalSlider = ({ content, libraries, state }) => {
    const { gallerySwiper, contentSwiper } = state.theme;
    // const gallerySwiper = useRef();
    // const contentSwiper = useRef();

    const { slides } = content;

    const params1 = {
        direction: 'vertical',
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    };
    const params2 = {
        preloadImages: false,
        lazy: true,
        // noSwiping: true,
        effect: 'fade'
    };

    // useEffect(() => {
    //     if (gallerySwiper && contentSwiper) {
    //         gallerySwiper.controller.control = contentSwiper
    //         contentSwiper.controller.control = gallerySwiper
    //     }
    // }, [gallerySwiper, contentSwiper])

    return (
        <VerticalSliderWrapper>
            <VerticalSliderCol>
                <Swiper {...params2} ref={gallerySwiper}>
                    {slides && slides.map((slide, i) => {
                        const {  image } = slide;
                        return (
                            <ImageSlide key={i.toString()} bg={image} />
                        )
                    })}
                </Swiper>
            </VerticalSliderCol>
            <VerticalSliderCol>
                <Swiper {...params1} ref={contentSwiper}>
                    {slides && slides.map((slide, i) => {
                        const {  copy, heading, link_text, link_url } = slide;
                        const Html2React = libraries.html2react.Component;
                        const linkUrl = libraries.source.normalize(link_url);
                        return (
                            <ContentSlide key={i.toString()}>
                                <p>{heading}</p>
                                <Html2React html={copy} />
                            </ContentSlide>
                        )
                    })}
                </Swiper>
            </VerticalSliderCol>
        </VerticalSliderWrapper>
    );
};

export default connect(VerticalSlider);

const VerticalSliderWrapper = tw.div`
    container flex flex-wrap md:flex-nowrap py-10 md:py-20
`;

const VerticalSliderCol = tw.div`
    md:w-1/2
`;

const ImageSlide = styled.div`
${tw`bg-cover`}
    background-image: url(${props => props.bg})
`;

const ContentSlide = tw.div`
    p-10 md:p-20
`;