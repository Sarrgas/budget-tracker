import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        budget: 0
    },
    getters: {
        getBudget(state){
            return state.budget;
        }
    },
    mutations: {
        add(state, amount){
            state.budget += amount;
        },
        subtract(state, amount){
            state.budget -= amount;
        }
    }
});