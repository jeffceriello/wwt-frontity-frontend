import { css } from "frontity";

import RoobertRegular from '../assets/fonts/Roobert-Regular.woff';
import RoobertSemiBold from '../assets/fonts/Roobert-SemiBold.woff';
import RoobertLight from '../assets/fonts/Roobert-Light.woff';

const styleWithFont = css`
    @font-face {
        font-family: "Roobert Regular";
        font-style: normal;
        font-weight: 400;
        src: url(${RoobertRegular});
    }
    @font-face {
        font-family: "Roobert SemiBold";
        font-style: normal;
        font-weight: 400;
        src: url(${RoobertSemiBold});
    }
    @font-face {
        font-family: "Roobert Light";
        font-style: normal;
        font-weight: 400;
        src: url(${RoobertLight});
    }
    * {
        box-sizing: border-box;
    }
    :root {
        --font-regular: "Roobert Regular";
        --font-semiBold: "Roobert SemiBold";
        --font-light: "Roobert Light";
        --colour-black-01: #000000;
        --colour-white-01: #ffffff;
        --colour-green-01: #2EC4B6;
        --colour-grey-01:  #737373;
        --break-small: 768px;
    }
    body {
        margin: 0;
        font-family: var(--font-regular);
        -webkit-font-smoothing:antialiased;
	    -moz-osx-font-smoothing:grayscale;
    }
    figure {
        margin: 0;
    }
    img {
        max-width: 100%;
    }
    h1,
    h2,
    h3 {
        font-family: var(--font-semiBold);
        margin: 0;
    }
    h2 {
        font-size: 1.625rem;
        line-height: 2.06rem;
        margin-bottom: 30px;
        @media (min-width: 768px) {
            font-size: 3.875rem;
            line-height: 4.5rem;
        }
    }
    h3 {
        font-size: 1.625rem;
        line-height: 2.06rem;
        margin-bottom: 30px;
        @media (min-width: 768px) {
            font-size: 3rem;
            line-height: 3.75rem;
        }
    }
    h4 {
        font-family: var(--font-light);
        margin: 0;
    }
    h5 {
        margin: 0;
        color: var(--colour-grey-01);
    }
    p {
        margin-top: 0;
        color: var(--colour-grey-01);
        font-size: 0.875rem;
        line-height: 1.25rem;
        @media (min-width: 768px) {
            font-size: 1.125rem;
            line-height: 1.875rem;
        }
    }
    b {
        font-family: var(--font-semiBold);
    }
    .hero-content p {
        margin-bottom: 0;
    }
    .arrow-green {
        background-color: var(--colour-green-01);
    }
    .arrow-white {
        background-color: var(--colour-white-01);
    }
    .menu--nav-item {
        position: relative;
        &:before {
            content: "";
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--colour-black-01);
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 300ms;
        }
        &:hover,
        &[aria-current="page"] {
            &:before {
                width: 100%;
            }
        }
    }
    .square-element {
        height: 100%;
        max-height: 80vh;
        &:before {
            content: '';
            width: 0;
            white-space: normal;
            display: inline-block;
            vertical-align: middle;
            max-width: 100%;
            padding-top: 100%;
        }
    }
    .footer--nav-wrapper {
        .menu--nav-item {
            &:before {
                background-color: var(--colour-white-01);
            }
        }
    }
    .swiper-container {
        height: 100%;
    }
`;

export default styleWithFont;