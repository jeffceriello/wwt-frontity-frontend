import React from 'react';
import { styled, css } from 'frontity';
import tw from "twin.macro";

const Triangle = ({ bg }) => {
    return (
        <Tr bg={bg} />
    );
};

export default Triangle;

const Tr = styled.div`
    ${tw`absolute bottom-0 left-0 w-5/6 lg:w-2/3 max-w-6xl min-h-full bg-no-repeat bg-contain bg-left-bottom`}
    background-image: url(${props => props.bg})
`;