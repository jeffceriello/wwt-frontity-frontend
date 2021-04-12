import React, { useRef, useEffect, useState } from 'react';
import { connect, styled } from "frontity";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "../UI/link";
import Nav from "./nav";
import Connect from "./connect";
import tw from "twin.macro";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Header = ({ state, colour, data }) => {
    const header = useRef(null);
    const [ navColour, setNavColour ] = useState(colour);
    const [ logoColour, setLogoColour ] = useState(colour);
    const [ logo, setLogo ] = useState(null);
    const options = state.source.get("theme-wwt-settings");

    const { black, white } = state.theme.colours;

    const colourUpdate = (col) => {
        setNavColour(col);
        setLogoColour(col);
    };

    const logoUpdate = () => {
        if (logoColour === white) {
            setLogo(options.acf.logo_light);
        }
        if (logoColour === black) {
            setLogo(options.acf.logo_dark);
        }
    };

    useEffect(() => {
        logoUpdate(colour);
    }, [logoColour])

    useEffect(() => {
        colourUpdate(colour);
        gsap.set(header.current, {clearProps: true});
        gsap.to(header.current, {
            backgroundColor: 'rgba(255, 255, 255, 1)',
            duration: .3,
            scrollTrigger: {
                id: "header-ref",
                trigger: header.current,
                start: 0,
                toggleActions: "play none none reverse",
                scrub: false,
                onEnter: () => {
                    colourUpdate(black);
                },
                onLeaveBack: () => {
                    colourUpdate(colour);
                }
            }
        });
        
        return () => {
            const headerScrollAnimation = ScrollTrigger.getById(`header-ref`);
			if (headerScrollAnimation) {
				headerScrollAnimation.kill(true);
			}
        }
    }, [colour]);

    return (
        <HeaderWrapper ref={header}>
            <Figure>
                <Link link="/">
                    <img src={logo} alt="WWT Logo" width="165" />
                </Link>
            </Figure>
            <Nav colour={navColour} />
            <Connect isButton={true} colour={white} isFixed={true} />
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