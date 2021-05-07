import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {Post, SerializedPost, WordpressQueries} from "@/store/Notice/types/Post";
import {Category, SerializedCategory} from "@/store/Notice/types/Category";

Vue.use(Vuex);

const client = axios.create({
    baseURL: process.env.VUE_APP_WORD_PRESS_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout:10000,
});

export const store = new Vuex.Store({
    state: {
        posts: [],
        categories: [],
        totalPages: 0,
        currentPost: Post,
    },
    mutations: {
        setMessage(state, payload) {
            state.posts = payload;
        },
        setTotalPage(state, payload) {
            state.totalPages = payload;
        },
        setCategories(state, payload) {
            state.categories = payload;
        },
        setCurrentPost(state, payload) {
            state.currentPost = payload;
        }
    },
    actions: {
        //Get posts
        async initPosts({commit}, wordpressQueries: WordpressQueries) {

            let url = 'posts?';

            const builder = new URLSearchParams();
            builder.append('page', wordpressQueries.pageNumber.toString());
            if (wordpressQueries.categoryId !== 0) {
                builder.append('categories', wordpressQueries.categoryId.toString());
            }
            builder.append('_embed', 'true');
            url += builder.toString();
            const postResponse = await client.get<SerializedPost[]>(url);
            const serializedPosts = postResponse.data;
            const posts = serializedPosts.map((s) => Post.Deserialize(s));

            const totalPages = Number.parseInt(postResponse.headers['x-wp-totalpages'], 10);

            //Store up the posts and total page number
            commit('setMessage', posts);
            commit('setTotalPage', totalPages);
        },
        //Get all category list
        async initCategory({state, commit}) {
            if (state.categories.length == 0) {
                const categoryResponse = await client.get<SerializedCategory[]>('categories');

                const serializedCategories = categoryResponse.data;
                const categories = serializedCategories.map((r) => Category.Deserialize(r));

                //Store up the categories
                commit('setCategories', categories);
            }
        },
        //Get one post
        async getOne({commit}, payload) {
            const postResponse = await client.get<SerializedPost>(`/posts/${payload.id}?_embed`);
            commit('setCurrentPost', Post.Deserialize(postResponse.data));
        },
    }
})
