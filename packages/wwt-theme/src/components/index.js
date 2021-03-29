import React from "react";
import Header from './header/header';
import Footer from './footer/footer';
import globalStyle from './globalStyle';
import swiperStyle from '../assets/css/swiper';
import { connect, Global, styled } from "frontity";
// import { useTransition, animated } from "react-spring";
import Switch from "@frontity/components/switch";
import Layout from './layout/layout';
// import Loading from './UI/loading';
import tw from "twin.macro";

const Root = ({ state }) => {
    // const transitions = useTransition(state.router.link, link => link, {
    //     from: { opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0 }
    // });
    const data = state.source.get(state.router.link);
    return (
        <>
            <Global styles={globalStyle}/>
            {data.isHome && <Global styles={swiperStyle} />}
            <Header />
            <Main>
            {/* {transitions.map(({ item, props, key }) => {
                const data = state.source.get(item);
                return (
                    <animated.div key={key} style={props}>
                        <Absolute> */}
                            <Switch>
                                {/* <Loading when={data.isFetching} /> */}
                                <Layout when={data.isPage} />
                                <div when={data.isArchive}>This is a list</div>
                                <div when={data.isPost}>This is a post</div>
                                <div when={data.is404}>Not found</div>
                            </Switch>
                        {/* </Absolute>
                    </animated.div>
                );
            })} */}
            </Main>
            <Footer/>
        </>
    )
};

export default connect(Root);

const Main = styled.main`
    ${tw`flex flex-wrap overflow-x-hidden`};
`;

const Absolute = styled.div`
    position: absolute;
    width: 100%;
`;