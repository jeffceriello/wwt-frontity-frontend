import React from 'react';
import { connect } from 'frontity';
import Hero from '../blocks/hero';
import Logos from '../blocks/logos';
import FullTextBlock from '../blocks/fullTextBlock';
import Columns from '../blocks/columns';
import CaseStudies from '../blocks/caseStudies';
import TextImage from '../blocks/textImage';
import VerticalSlider from '../blocks/verticalSlider';
import TwoColumns from '../blocks/twoColumns';
import CompanyTeam from '../blocks/companyTeam';
import Related from '../blocks/related';
import Contact from '../blocks/contact';

const Layout = ({ state }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const fmedia = state.source.attachment[post.featured_media];
    const flexible_content = post.acf.flexible_content;
    const { link } = data;
    console.log(post);

    return (
        <>
            {fmedia && <Hero post={post} fmedia={fmedia} data={data} />}

            {(link === "/connect/")
                ? <Contact fmedia={fmedia} data={data} post={post} />
                : null
            }

            {flexible_content && flexible_content.map((content, index) => {
                if (content.acf_fc_layout === "logos")
                    return <Logos key={index} content={content} data={data} />;
                
                if (content.acf_fc_layout === "full_width_text_block")
                    return <FullTextBlock key={index} content={content} data={data} />;
                
                if (content.acf_fc_layout === "columns")
                    return <Columns key={index} content={content} data={data} />;
                    
                if (content.acf_fc_layout === "case_studies")
                    return <CaseStudies key={index} content={content} data={data} />;

                if (content.acf_fc_layout === "text_w_image")
                    return <TextImage key={index} content={content} data={data} />;

                if (content.acf_fc_layout === "vertical_slider")
                    return <VerticalSlider key={index} content={content} data={data} />;
                
                if (content.acf_fc_layout === "two_columns")
                    return <TwoColumns key={index} content={content} data={data} />;
                    
                if (content.acf_fc_layout === "company_team")
                    return <CompanyTeam key={index} content={content} data={data} />;

                if (content.acf_fc_layout === "related")
                    return <Related key={index} content={content} data={data} />;
            })}
        </>
    )
};

export default connect(Layout);