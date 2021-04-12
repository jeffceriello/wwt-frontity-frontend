import React, { useRef } from 'react';
import { connect, styled } from 'frontity';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tw from 'twin.macro';

const Contact = ({ post, data, fmedia, libraries }) => {
    const pinnedRef = useRef(null);
    const { source_url } = fmedia;
    const { title, content } = post;
    const Html2React = libraries.html2react.Component;
    return (
        <ContactWrapper>
            <ContactHero bg={source_url} />
            <ContactForm>
                <Html2React html={content.rendered} />
            </ContactForm>
        </ContactWrapper>
    )
};

export default connect(Contact);

const ContactWrapper = styled.div`
    ${tw`flex flex-wrap md:flex-nowrap md:space-x-20 2xl:space-x-40 mt-36`}
`;

const ContactHero = styled.div`
    ${tw`w-full md:w-1/2 mb-4 md:mb-0 bg-cover h-full`}
    background-image: url(${props => props.bg})
`;

const ContactForm = styled.div`
    ${tw`w-full md:w-1/2 md:pr-40 pt-40`}
    h3 {
        margin-bottom: 5rem;
        font-family: var(--font-light);
    }
    h4 {
        
    }
`;