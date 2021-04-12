import React from 'react';
import { connect } from 'frontity';
import HeroSlider from '../hero/heroSlider';

const Hero = ({ post, data, fmedia }) => {
    const { link } = data;
    return (
        (link !== "/connect/") ? 
            <HeroSlider post={post} data={data} fmedia={fmedia} />
            : null 
    );
};

export default connect(Hero);