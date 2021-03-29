import React, { useEffect } from 'react';
import { connect, css, styled } from 'frontity';
import ArrowLink from '../UI/arrowLink';
import Link from '../UI/link';
import tw from "twin.macro";

const CaseStudies = ({ state, content, actions, libraries }) => {
    const caseStudies = content.case_studies;
    const { white } = state.theme.colours;

    // useEffect(() => {
    //     actions.source.fetch("/case_studies");
    // }, []);
    // state.source.get("/case_studies/");

    return (
        <>
            <CaseStudiesHeadings>
                {content.heading_1 && <p>{content.heading_1}</p>}
                {content.heading_2 && <h3>{content.heading_2}</h3>}
            </CaseStudiesHeadings>
            <CaseStudiesWrapper>
                {caseStudies && caseStudies.map((caseStudy, i) => {
                    const caseStudyType = caseStudy.post_type;
                    const caseStudyData = state.source[caseStudyType][caseStudy.ID];
                    const title = caseStudyData.title.rendered;
                    const featuredImage = state.source.attachment[caseStudyData.featured_media];
                    const featuredImageSource_url = featuredImage.source_url;
                    const client = caseStudyData.acf.client;
                    const link = libraries.source.normalize(caseStudyData.link);

                    return (
                        <CaseStudy key={i.toString()} bg={featuredImageSource_url} className="square-element">
                            <CaseStudyInner>
                                <div>
                                    <CaseStudyClient><b>{client}</b></CaseStudyClient>
                                    <Link link={link}><CaseStudyTitle>{title}</CaseStudyTitle></Link>
                                </div>
                                <div>
                                    {link && <ArrowLink link={link} text="View Case Study" className="arrow-white" colour={white} />}
                                </div>
                            </CaseStudyInner>
                        </CaseStudy>
                    );
                })}
            </CaseStudiesWrapper>
        </>
    );
};

export default connect(CaseStudies);

const CaseStudiesHeadings = tw.div`
    md:w-3/5 m-auto flex flex-wrap pt-10 md:pt-20 pb-10 flex-col text-center
`;

const CaseStudiesWrapper = tw.div`
    container flex flex-wrap md:flex-nowrap pb-10 md:pb-20
`;

const CaseStudy = styled.div`
    ${tw`w-full md:w-1/2 bg-no-repeat bg-cover bg-center overflow-hidden hover:scale-105 transition-all duration-500 hover:z-10 transform origin-center`};
    background-image: url(${props => props.bg})
    // transition: z-index .5s step-end, transform .4s ease-in-out;
    // z-index: 0;
    // &:hover {
    //     transition: z-index .5s step-start, transform .4s ease-in-out;
    //     z-index: 1;
    // }
`;

const CaseStudyInner = tw.div`
    flex flex-col justify-between absolute w-full h-full z-10 top-0 left-0 p-10
`;

const CaseStudyClient = tw.p`
    text-white w-full
`;

const CaseStudyTitle = tw.h4`
    text-white text-3xl md:text-5xl
`;
