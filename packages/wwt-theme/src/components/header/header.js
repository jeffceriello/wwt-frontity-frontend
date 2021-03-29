import React, { useRef, useEffect } from 'react';
import { connect, styled } from "frontity";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "@frontity/components/link";
import Nav from "./nav";
import Connect from "./connect";
import tw from "twin.macro";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Header = ({ state }) => {
    const header = useRef();
    const options = state.source.get("theme-wwt-settings");
    const { white } = state.theme.colours;

    useEffect(() => {
        gsap.to(header.current, {
            backgroundColor: 'rgba(255, 255, 255, 1)',
            duration: .3,
            scrollTrigger: {
                trigger: header.current,
                start: 0,
                toggleActions: "play none none reverse",
                scrub: false
            }
        });
    }, []);

    return (
        <HeaderWrapper ref={header}>
            <Figure>
                <Link link="/">
                    <img src={options.acf.logo_dark} alt="WWT Logo" width="165" />
                </Link>
            </Figure>
            <Nav />
            <Connect isButton={true} colour={white} />
        </HeaderWrapper>
    );
};

export default connect(Header);

const HeaderWrapper = styled.header`
    ${tw`p-4 md:p-10 flex flex-wrap justify-between items-center fixed top-0 left-0 w-screen z-50 bg-white bg-opacity-0`};
`;
const Figure = styled.figure`
    ${tw`mb-4 md:mb-0`};
`;