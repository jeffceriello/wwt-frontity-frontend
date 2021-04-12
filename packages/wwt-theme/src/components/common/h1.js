import React from 'react';
import { connect, styled } from 'frontity';
import tw from "twin.macro";

const H1 = ({ colour, title, libraries }) => {
    const Html2React = libraries.html2react.Component;
    return (
        <HeroH1 colour={colour}><Html2React html={title} /></HeroH1>
    );
};

export default connect(H1);

const HeroH1 = styled.h1`
    ${tw`text-3xl md:text-7xl mt-0 mb-0`};
    color: ${props => props.colour}
`;