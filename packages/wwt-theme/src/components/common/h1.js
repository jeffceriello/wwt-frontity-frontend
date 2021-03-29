import React from 'react';
import { connect, styled } from 'frontity';
import tw from "twin.macro";

const H1 = ({ colour, title }) => {
    return (
        <HeroH1 colour={colour}>{title}</HeroH1>
    );
};

export default connect(H1);

const HeroH1 = styled.h1`
    ${tw`text-3xl md:text-7xl mt-0 mb-0`};
    color: ${props => props.colour}
`;