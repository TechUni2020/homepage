<template>
    <div id="page">
        <app-header></app-header>
        <div id="content">
            <router-view></router-view>
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import AppFooter from "@/components/module/AppFooter.vue";
    import AppHeader from "@/components/menubar/AppHeader.vue";

    @Component({
        components: {
            AppHeader,
            AppFooter,
        }
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    @import "@/scss/base/reset";
    @import "@/scss/base/base";

</style>

<style lang="scss" scoped>
    @import "@/scss/global";

    #page {
        width: 100%;
    }

    #content {
        width: 100%;
        min-height: calc(100vh - 75px - 60px);
    }
</style>
