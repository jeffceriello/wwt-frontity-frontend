import React from 'react';
import { styled } from 'frontity';
import tw from "twin.macro";

const Logos = ({ content }) => {
    const logos = content.logos;
    return (
        <LogosWrapper>
            {logos.map((logo, i) => {
                return (
                    <figure key={i.toString()}>
                        <img src={logo} />
                    </figure>
                );
            })}
        </LogosWrapper>
    );
};

export default Logos;

const LogosWrapper = styled.div`
    ${tw`container flex flex-wrap md:flex-nowrap justify-center items-center py-10 md:py-20`}
    figure {
        ${tw`w-1/4 md:w-auto`}
    }
`;