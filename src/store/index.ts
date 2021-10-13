import { createStore } from "vuex";

// @ts-ignore
import global from "./global.ts";

export default createStore({
    modules: {
        global,
    }
});