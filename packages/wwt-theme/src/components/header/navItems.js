import React from 'react';
import { connect, styled } from 'frontity';
// import Link from "@frontity/components/link";
import Link from '../UI/link';
import Button from '../UI/button';
import tw from "twin.macro";

const NavItems = ({ items, isButton, state, libraries, colour }) => {
    return (
        <>
            {items.map((item) => {
                const name = item.title;
                const link = libraries.source.normalize(item.url);
                const isCurrentPage = state.router.link === link;
                
                return (
                    <NavItem key={item.ID} isSelected={isCurrentPage}>
                        {isButton ?
                            <Button link={link} children={name} />
                        :
                            <Link link={link} aria-current={isCurrentPage ? "page" : null} className="menu--nav-item" children={name} colour={colour} />
                        }
                    </NavItem>
                )
            })}
        </>
    )
};

export default connect(NavItems);

const NavItem = styled.li`
    ${tw`flex-initial px-4`};
`;