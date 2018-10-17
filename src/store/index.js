import Vue from 'vue';
import Vuex from 'vuex';
import Logger from 'vuex/dist/logger';

Vue.use(Vuex);

import app from './modules/app';
import img from './modules/img';

export default new Vuex.Store({
    modules: {
        app,
        img
    },
    plugin: [Logger()]
})