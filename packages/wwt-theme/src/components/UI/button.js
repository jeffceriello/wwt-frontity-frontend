import React from 'react';
import { connect, styled } from 'frontity';
import tw from "twin.macro";

const Button = ({ actions, link, className, isExternal, children }) => {
    const onClick = (event) => {
        if (link.startsWith("http")) return;
        event.preventDefault();
        actions.router.set(link);
        window.scrollTo(0, 0);
    };
    
    return (
        <ButtonItem
            href={link}
            onClick={onClick}
            className={className}
            target={isExternal ? "_blank" : null}
        >
            {children}
        </ButtonItem>
    );
};

export default connect(Button);

const ButtonItem = styled.a`
    ${tw`text-black inline-block text-lg rounded-full no-underline bg-green py-4 px-8`};
`;