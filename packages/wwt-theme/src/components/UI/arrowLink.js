import React from 'react';
import { connect } from 'frontity';
import Link from './link';
import tw, { styled } from "twin.macro";
import arrow from '../../assets/img/arrow.svg';
import arrow2 from '../../assets/img/arrow-white.svg';

const ArrowLink = ({ link, text, className, colour, arrowWhite }) => {
    return (
        <LinkWrapper link={link} colour={colour}>
            <span>{text}</span>
            <ArrowWrapper className={className}>
                <img src={arrowWhite ? arrow2 : arrow} alt="Arrow" css={tw`pl-0.5 pb-0.5`} />
            </ArrowWrapper>
        </LinkWrapper>
    );
};

export default connect(ArrowLink);

const LinkWrapper = styled(Link)`
    ${tw`flex items-center`}
    span {
        ${tw`relative text-blue text-opacity-100`};
        ${({ colour }) => colour && `
            color: ${colour};
        `};
            &:before {
                ${tw`transition-all duration-300 ease-in-out bg-current`}
                content: "";
                position: absolute;
                bottom: -3px;
                left: 0;
                width: 0;
                height: 2px;
            }
        }
        &:hover {
            span {
                &:before {
                    width: 100%;
                }
            }
        }
    }
`;

const ArrowWrapper = styled.div`
    ${tw`text-center transition duration-300 ease-in-out transform`}
    width: 26px;
    height: 26px;
    border-radius: 26px;
    margin-left: 10px;
    ${LinkWrapper}:hover & {
        transform: translateX(10px);
    }
`;