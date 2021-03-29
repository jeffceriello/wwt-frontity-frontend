import React from 'react';
import { connect, styled } from "frontity";
import NavItems from './navItems';
import tw from "twin.macro";

const Nav = ({ state }) => {
    const items = state.source.get(`/menu/${state.theme.headerMenu}/`).items;
    // console.log(items);
    return (
        <NavWrapper>
            <NavItems items={items} />
        </NavWrapper>
    );
};

export default connect(Nav);

const NavWrapper = styled.ul`
    ${tw`flex flex-wrap justify-between list-none m-0 p-0`};
`;