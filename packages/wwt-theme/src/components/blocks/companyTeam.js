import React from 'react';
import { connect, styled } from 'frontity';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowLink from '../UI/arrowLink';
import tw from 'twin.macro';

SwiperCore.use([Navigation]);

const CompanyTeam = ({ content, libraries }) => {
    const Html2React = libraries.html2react.Component;
    const { background_image, copy, team_heading, team } = content;

    const params = {
        speed: 500,
        navigation: true,
        slidesPerView: 4,
        spaceBetween: 42,
        watchOverflow: true,
    };

    return (
        <BlockWrapper>
            {background_image && 
                <img src={background_image} alt={team_heading} />    
            }
            {copy && 
                <CopyBlock>
                    <Html2React html={copy} />
                </CopyBlock>
            }
            {team &&
                <TeamWrapper>
                    <div tw="container">
                        <h2>{ team_heading }</h2>
                        <Swiper {...params} tw="overflow-visible h-auto">
                            {team.map((t, i) => {
                                const { name, role, photo, bio } = t;
                                return (
                                    <SwiperSlide key={i.toString()}>
                                        <Card>
                                            <div tw="p-4 bg-white">
                                                {role && <Role>{role}<br/></Role>}
                                                {name && <p tw="m-0"><b tw="text-lg text-blue">{name}</b></p>}
                                            </div> 
                                            {photo && 
                                                <figure tw="m-0">
                                                    <img src={photo.sizes.team_size} alt={name} tw="align-middle" />
                                                </figure>
                                            }
                                            {bio && 
                                                <BioLink>
                                                    <ArrowLink link="#" text="Read bio" className="arrow-green" />
                                                </BioLink>
                                            }
                                        </Card>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </TeamWrapper>
            }
        </BlockWrapper>
    );
};

export default connect(CompanyTeam);

const BlockWrapper = tw.div`
    flex flex-col flex-wrap md:flex-nowrap pt-10 md:pt-20
`;

const CopyBlock = styled.div`
    ${tw`bg-blue text-white px-16 lg:px-56 py-10 lg:py-40 w-11/12 lg:w-3/4 -mt-44 relative z-10`}
    p {
        ${tw`text-white`}
    }
`;

const TeamWrapper = styled.div`
    ${tw`flex flex-col flex-wrap bg-gray py-10 lg:pb-40 lg:pt-110 -mt-100 relative z-0`}
    h2 {
        ${tw`text-center mb-20`}
    }
`;

const BioLink = tw.div`
    flex bg-white p-4 invisible opacity-0 transition-all duration-500
`;

const Role = tw.div`
    overflow-ellipsis overflow-hidden whitespace-nowrap m-0 text-base
`;

const Card = styled.div`
    ${tw`w-full text-blue hover:scale-105 transition-all duration-500 hover:z-10 transform origin-center`}
    &:hover {
        ${BioLink} {
            ${tw`visible opacity-100`}
        }
    }
`;