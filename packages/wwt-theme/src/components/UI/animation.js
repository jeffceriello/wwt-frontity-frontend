import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'frontity';
import { gsap } from "gsap";

const Animation = ({ svg, elId }) => {
    const [loading, setLoading] = useState(false);
    let animationRef = useRef(null);
       
    useEffect(() => {
        const svgRef = animationRef.current;
        setLoading(true);

        const importIcon = async () => {
            try {
                svgRef.contentWindow.addEventListener("load", () => {
                    const svgEl = svgRef.contentWindow.document.getElementById(elId);
                    gsap.to(svgRef, {
                        duration: .3,
                        scrollTrigger: {
                            trigger: svgRef,
                            start: "top 80%",
                            once: true,
                            scrub: false,
                            onEnter: () => {
                                svgEl.dispatchEvent(new Event('click'))
                            }
                        }
                    }, false);
                    // let observer = new IntersectionObserver((entries, observer) => { 
                    //     entries.forEach(entry => {
                    //         if(entry.isIntersecting){
                    //             console.log(entry);
                    //             entry.target.src = entry.target.dataset.src;
                    //             observer.unobserve(entry.target);
                    //         }
                    //     });
                    // }, {rootMargin: "0px 0px -20% 0px"});
                    // observer.observe(svgEl);
                });
            } catch (err) {
                throw err;
            } finally {
                setLoading(false);
            }
        }
        importIcon();
    }, []);

    return (
        <object ref={animationRef} type="image/svg+xml" data={svg}>svg-animation</object>
    );
};

export default connect(Animation);