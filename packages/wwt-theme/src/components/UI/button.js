import React, { useRef } from 'react';
import { connect, styled } from 'frontity';
import tw from "twin.macro";

const Button = ({ actions, link, className, isExternal, children, isFixed, hoverBg }) => {
    const buttonItemRef = useRef();
    let x = null;
    let y = null;

    const move = (e) => {
        if (isFixed) {
            x = e.clientX - e.target.offsetLeft;
            y = e.clientY - e.target.offsetTop;
        } else {
            x = e.pageX - e.target.offsetLeft;
            y = e.pageY - e.target.offsetTop;
        }
        e.target.style.setProperty('--x', `${ x }px`);
        e.target.style.setProperty('--y', `${ y }px`);
    }

    const onClick = (event) => {
        if (link.startsWith("http")) return;
        event.preventDefault();
        actions.router.set(link);
        window.scrollTo(0, 0);
    };
    
    return (
        <ButtonItem
            ref={buttonItemRef}
            href={link}
            onClick={onClick}
            className={className}
            target={isExternal ? "_blank" : null}
            hoverBg={hoverBg}
            onMouseOver={() => {
                buttonItemRef.current.addEventListener("mousemove", move);
            }}
        >
            <span tw="z-10 relative transition duration-300">{children}</span>
        </ButtonItem>
    );
};

export default connect(Button);

const ButtonItem = styled.a`
    ${tw`text-black inline-block text-lg rounded-full no-underline bg-green py-4 px-8 overflow-hidden relative`};
    &:before {
        --size: 0;
        content: '';
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background-color: ${props => props.hoverBg ? props.hoverBg : `var(--colour-blue-01)`};
        transform: translate(-50%, -50%);
        border-radius: 100%;
        transition: width .5s ease, height .5s ease;
    }
    &:hover {
        ::before {
            --size: 400px;
        }
        span {
            color: ${props => props.hoverBg ? `var(--colour-blue-01)` : `var(--colour-white-01)`};
        }
    }
`;