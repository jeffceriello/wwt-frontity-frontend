import React from 'react';
import { gsap } from "gsap";

const Animation = ({ animationRef, svg, elId }) => {

    animationRef = node => {
        if (!node) {
          return;
        }
        node.contentWindow.addEventListener("load", () => {
            const svgEl = node.contentWindow.document.getElementById(elId)
            gsap.to(node, {
                duration: .3,
                scrollTrigger: {
                    trigger: node,
                    start: "top 80%",
                    // markers: true,
                    once: true,
                    scrub: false,
                    onEnter: () => {
                        svgEl.dispatchEvent(new Event('click'))
                    }
                }
            });
        });
    };

    return (
        <object ref={animationRef} type="image/svg+xml" data={svg}>svg-animation</object>
    );
};

export default Animation;