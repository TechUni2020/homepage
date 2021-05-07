<template>
    <div class="container">
        <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf-THEKAIVvZjCCnJUY6tDm3FqpLoW_hOBKFBGlJbMltHqZ6g/viewform?embedded=true"
                width="640"
                height="1000"
                frameborder="0"
                marginheight="0"
                marginwidth="0">
            読み込んでいます…
        </iframe>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {}
    })
    export default class ContactPageContent extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "~@/scss/global";

    .container {
        padding-top: 30px;
        width: 100%;
        background: theme(primary);

        display: flex;
        align-items: center;
        justify-content: center;

        @include respondTo(smallTablet){
            height: 1200px;
        }
    }
</style>
