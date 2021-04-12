import React, { useRef, useEffect } from 'react';
import { styled, css } from 'frontity';
import { gsap } from "gsap";
import tw from "twin.macro";

const Triangle = ({ bg }) => {

    const triangleRef = useRef();

    useEffect(() => {
        gsap.to(triangleRef.current, {
            duration: 1.5,
            y: 0,
            x: 0,
            rotation: 0,
            delay: .5,
            ease: "power2.out"
        });
    }, []);

    return (
        <Tr ref={triangleRef} bg={bg} />
    );
};

export default Triangle;

const Tr = styled.div`
    ${tw`absolute bottom-0 left-0 w-4/5 lg:w-2/3 max-w-4xl min-h-full bg-no-repeat bg-contain bg-left-bottom`}
    background-image: url(${props => props.bg});
    transform: rotate(-20deg) translateY(60px) translateX(-25%);
`;