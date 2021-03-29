import React from "react";
import { connect, styled } from "frontity";
import tw from "twin.macro";

const Link = ({ actions, link, className, children, "aria-current": ariaCurrent, colour }) => {
    const onClick = (event) => {
        if (link.startsWith("http")) return;
        event.preventDefault();
        actions.router.set(link);
        window.scrollTo(0, 0);
    };

    return (
        <LinkItem
            href={link}
            onClick={onClick}
            className={className}
            aria-current={ariaCurrent}
            colour={colour}
        >
            {children}
        </LinkItem>
    );
};

export default connect(Link);

const LinkItem = styled.a`
    ${tw`text-black text-lg no-underline float-left`};
    color: ${props => props.colour}
`;