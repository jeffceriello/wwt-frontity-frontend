import React from "react";
import Header from './header/header';
import Footer from './footer/footer';
import globalStyle from './globalStyle';
import swiperStyle from '../assets/css/swiper';
import { connect, Global, styled } from "frontity";
// import { useTransition, animated } from "react-spring";
import Switch from "@frontity/components/switch";
import Layout from './layout/layout';
import Loading from './UI/loading';
import tw from "twin.macro";

const Root = ({ state }) => {
    const { black, white } = state.theme.colours;
    let headerC = black;
    // const transitions = useTransition(state.router.link, link => link, {
    //     from: { opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0 }
    // }); 
    const data = state.source.get(state.router.link);
    if (data.link === "/about/" || data.link === "/approach/") {
        headerC = white;
    }
    return (
        <>
            <Global styles={globalStyle}/>
            <Global styles={swiperStyle} />
            <Header colour={headerC} data={data} />
            
            {/* {transitions.map(({ item, props, key }) => {
                return (
                    <animated.div key={key} style={props}>
                        <Absolute> */}
                            <Main>
                                <Switch>
                                    <Loading when={data.isFetching} />
                                    <Layout when={data.isPage} />
                                    <div when={data.isArchive}>This is a list</div>
                                    <div when={data.isPost}>This is a post</div>
                                    <div when={data.is404}>Not found</div>
                                </Switch>
                            </Main>
                        <Footer/>
                        {/* </Absolute>
                    </animated.div>
                );
            })} */}
        </>
    )
};

export default connect(Root);

const Main = styled.main`
    ${tw`flex flex-wrap overflow-x-hidden flex-grow`};
`;

const Absolute = styled.div`
    position: absolute;
    width: 100%;
`;