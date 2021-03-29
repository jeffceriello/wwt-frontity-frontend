import React from 'react';
import { connect, styled } from "frontity";
import NavItems from './navItems';
import tw from "twin.macro";

const Connect = ({ state, isButton, colour, className }) => {
    const items = state.source.get(`/menu/${state.theme.connectMenu}/`).items;
    // console.log(items);
    return (
        <NavWrapper className={className}>
            <NavItems items={items} isButton={isButton} colour={colour} />
        </NavWrapper>
    );
};

export default connect(Connect);

const NavWrapper = styled.ul`
    ${tw`flex flex-wrap justify-between list-none m-0 p-0`};
`;