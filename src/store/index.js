import Vue from 'vue';
import Vuex from 'vuex';
import {setBudget, getBudget} from '../dbaccess'

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
        },
        set(state, currentBudget){
            state.budget = currentBudget;
        }
    },
    actions: {
        init({commit}){
            getBudget().then(function(snapshot) {
                commit('set', parseInt(snapshot.val()));
            });
        },
        add({commit, state}, amount){
            commit('add', amount);
            setBudget(state.budget);
        },
        subtract({commit, state}, amount){
            commit('subtract', amount);
            setBudget(state.budget);
        }
    }
});