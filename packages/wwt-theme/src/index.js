import Root from "./components";
import acfOptionsHandler from './components/handlers/acfOptionsHandler';
import menuHandler from './components/handlers/menuHandler';
import image from "@frontity/html2react/processors/image";

const wwt = {
  name: "wwt-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      headerMenu: "header-menu",
      connectMenu: "connect-menu",
      socialMenu: "social-menu",
      autoPrefetch: "hover",
      colours: {
        white: "#FFFFFF",
        black: "#000000",
        blue: "#133C55",
        green: "#2EC4B6"
      },
      gallerySwiper: null,
      contentSwiper: null
    }
  },
  actions: {
    theme: {
      beforeSSR: async ({ state, actions }) => {
        await Promise.all([
          await actions.source.fetch("theme-wwt-settings"),
          await actions.source.fetch(`/menu/${state.theme.headerMenu}/`),
          await actions.source.fetch(`/menu/${state.theme.connectMenu}/`),
          await actions.source.fetch(`/menu/${state.theme.socialMenu}/`),
          await actions.source.fetch(`/case_studies/`)
        ]);
      }
    }
  },
  libraries: {
    html2react: {
      processors: [image]
    },
    source: {
      handlers: [acfOptionsHandler, menuHandler]
    }
  }
}

export default wwt;
