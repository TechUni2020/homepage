import 'intersection-observer';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {store} from "@/store/Store"; //Vuex Store for Wordpress posts
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBlog, faCalendarAlt, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import ScrollAnimation from '@/util/ScrollAnimation';


library.add(faChevronRight, faChevronLeft, faTwitter, faBlog, faCalendarAlt);
Vue.config.productionTip = false;
Vue.directive('scrollanimation', ScrollAnimation);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
