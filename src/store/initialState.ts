import { Searcher } from "../components/modules/ContentSearch";

import fish from "./../img/fish.jpeg";
import nonePage from "./../img/nonePage.png";
import { syntaxHighlight } from "../components/modules/SyntaxHighlight";

export type action = {
  type: string;
  payload: any;
};

export interface Reducer {
  reduce(state: object, action: action): object;
}

const initialState: object = {
  root: {
    bodyScrollState: "UNLOCKED",
    mobileScreenWidth: 590,
    preloaderMode: "DISABLED",
    themes: [],

    currentPage: [],
    currentPageId: 1,
    nextPage: false,
    pageSearcherValue: "",
    texts: {},
    authors: {},

    location: {
      home: "dooboox/",
      content: "dooboox/content",
      authors: "dooboox/authors",
      about: "dooboox/about",
    },

    getUniqueKey(): number {
      return 1 + Math.round(Math.random() * 10000);
    },

    api: {
      getPageUrl(type: string, id?: number): string {
        if (id) {
          return `https://doopath.github.io/dooboox_api/pages/${type}/page-${id}/index.json`;
        } else {
          return `https://doopath.github.io/dooboox_api/pages/${type}/index.json`;
        }
      },
    },

    images: {
      fish,
      nonePage,
      preloader: "https://doopath.github.io/dooboox_api/images/preloader.gif",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },

    minimap: {
      mode: "minimap", // or "minimap minimap_active"
      buttonClassList: "minimapButton", // or minimapButton_active
    },

    syntaxHighlight: {
      highlight: (codeLine: string): string => {
        return new syntaxHighlight(codeLine).highlight();
      },
    },
  },
  search: {
    searcherMode: "COMPACT",
    searcherValue: "",
    searchItems: [
      ".tp-title",
      ".tp-text",
      ".tp-sublink",
      ".tp-themes-link",
      ".tp-themes-sublink",
      ".tp-author-role span",
      ".tp-author-work_text",
    ],

    search(expression: string, elements: Array<string>, fast: boolean = false) {
      return new Searcher(expression, elements).search(fast);
    },
  },
  menu: {
    compactMenuCurtain: "compact-menu_curtain",
    mobileScreenWidth: 590,

    getMenuMode(): string {
      return document.body.clientWidth <= this.mobileScreenWidth ? "COMPACT" : "FULLSIZE";
    },
  },
};

export const rootInitialState: object = initialState["root"];
export const searchInitialState: object = initialState["search"];
export const menuInitialState: object = initialState["menu"];
