import React from 'react';
import { connect, styled } from "frontity";
import NavItems from '../header/navItems';
import Button from '../UI/button';
import Social from './social';
import tw from "twin.macro";
import { theme } from '../../../../../tailwind.config';

const Footer = ({ state, libraries }) => {
    const options = state.source.get("theme-wwt-settings");
    const items = state.source.get(`/menu/${state.theme.headerMenu}/`).items;
    const connect = state.source.get(`/menu/${state.theme.connectMenu}/`).items;
    const { copy, link_text, link_url, small_print } = options.acf;
    const Html2React = libraries.html2react.Component;
    const linkUrl = libraries.source.normalize(link_url);
    const { white } = state.theme.colours;
    
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterRow tw="mb-10">
                    <div tw="md:w-3/4 2xl:w-3/5">
                        <Html2React html={copy} />
                    </div>
                    <div tw="md:w-1/4 my-10 md:mb-20">
                        <Button link={linkUrl} hoverBg={white}>{link_text}</Button>
                    </div>
                </FooterRow>
                <FooterRow>
                    <div tw="md:w-3/5">
                        <div tw="flex flex-wrap justify-between mb-5">
                            <NavWrapper className="footer--nav-wrapper">
                                <NavItems items={items} colour={white} />
                                <NavItems items={connect} colour={white} />
                            </NavWrapper>
                        </div>
                        <div tw="md:w-3/5 2xl:w-1/2">
                            <Social colour={white} className="footer--nav-wrapper" />
                        </div>
                    </div>
                    <SmallPrint>
                        <Html2React html={small_print} />
                    </SmallPrint>
                </FooterRow>
            </FooterContainer>
        </FooterWrapper>
    );
};

export default connect(Footer);

const FooterWrapper = tw.div`
    flex bg-blue py-20 text-white
`;

const FooterContainer = tw.div`
    container 
`;

const FooterRow = styled.div`
    ${tw`flex flex-wrap justify-between items-end`}
    p,
    h2,
    h3 {
        ${tw`text-white m-0`}
    }
`;

const NavWrapper = styled.ul`
    ${tw`list-none m-0 p-0 flex-grow flex flex-wrap flex-col xl:flex-row justify-between`};
`;

const SmallPrint = styled.div`
    ${tw`md:w-1/4`}
    img {
        max-width: 175px;
    }
    p {
        ${tw`text-sm`}
        a {
            font-family: var(--font-semiBold);
            ${tw`text-white no-underline relative`}
            &:after {
                content: "";
                bottom: -3px;
                height: 2px;
                ${tw`absolute left-0 w-full bg-white`}
            }
        }
    }
`;