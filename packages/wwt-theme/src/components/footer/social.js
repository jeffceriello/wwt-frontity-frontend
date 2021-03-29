import React from 'react';
import { connect, styled } from "frontity";
import NavItems from '../header/navItems';
import tw from "twin.macro";

const Social = ({ state, colour, className }) => {
    const items = state.source.get(`/menu/${state.theme.socialMenu}/`).items;
    return (
        <NavWrapper className={className}>
            <NavItems items={items} colour={colour} />
        </NavWrapper>
    );
};

export default connect(Social);

const NavWrapper = styled.ul`
    ${tw`flex flex-wrap flex-col xl:flex-row justify-between list-none m-0 p-0`};
    a {
        ${tw`text-sm`}
    }
`;