<template>
    <div class="card">
        <div class="card__image" :style="{ 'background-image': 'url(' + imageURL + ')' }">.</div>
        <div class="card__content">
            <p class="card__time">
                <font-awesome-icon :icon="['fas', 'calendar-alt']"/>
                <span><span class="fa fa-calendar"></span> {{post.getTime()}}</span> <br>
            </p>
            <h3 class="card__title">{{post.getTitle()}}</h3>
            <p class="card__excerpt">{{excerpt}}</p>
            <my-button @click="$router.push(link)">Read More</my-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {Post} from '@/store/Notice/types/Post';
    import MyButton from "@/components/module/MyButton.vue";

    @Component({
        components: {MyButton}
    })
    export default class Card extends Vue {
        @Prop({type: Object, required: true})
        private readonly post!: Post;

        public get excerpt() {
            const rawExcerpt = this.post.getExcerpt();
            // 先頭の<p>(<P>)と末尾の</p>(</P>)を置換する
            const excerpt = rawExcerpt.replace(/^<(p|P)>/, '')
                .replace(new RegExp("</(p|P)>\n$"), '');

            if (excerpt.length <= 100) {
                // 100文字以下ならそのまま返す
                return excerpt;
            }
            // 100文字をこえたときは最初の100文字 + '...'を返す
            return excerpt.substring(0, 50) + '...';
        }

        public get link() {
            return `/blog/${this.post.getId()}`;
        }

        public get imageURL() {
            if (this.post.hasPicture()) {
                return this.post.getSourceURL('medium');
            } else {
                return require('@/assets/blog.jpg');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/scss/global";

    .card {
        position: relative;
        background: #333;
        max-width: 400px;
        height: 550px;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #aaa;
        box-shadow: 0 .25rem .25rem rgba(0, 0, 0, 0.2),
        0 0 1rem rgba(0, 0, 0, 0.2);
        overflow: hidden;

        @include respondTo(smallTablet) {
            transform: scale(0.9);
            &__image {
                height: 90% !important;
            }
        }

        &__line {
            opacity: 0;
            animation: LineFadeIn .8s .8s forwards ease-in;
        }

        &__svg {
            position: absolute;
            left: 0;
            top: 150px;
        }

        &__image {
            width: 100%;
            min-height: 50%;
            background-repeat: no-repeat;
            background-size: cover;
            opacity: 0;
            animation: ImageFadeIn 1s forwards;
        }

        &__title {
            color: white;
            margin-top: 0;
            font-weight: 800;
            letter-spacing: 0.01em;
        }

        &__content {
            padding: 20px;
            height: 50%;
            opacity: 0;
            animation: ContentFadeIn 1s forwards;

            & > * {
                margin-top: 5px;
            }
        }

        &__time {
            font-size: 12px;
        }

        &__excerpt {
            height: 6.5em;
        }


    }

    @keyframes LineFadeIn {
        0% {
            opacity: 0;
            d: path("M 0 300 Q 0 300 0 300 Q 0 300 0 300 C 0 300 0 300 0 300 Q 0 300 0 300 ");
            stroke: #fff;
        }
        50% {
            opacity: 1;
            stroke: #2fc0be;
        }
        100% {
            opacity: 1;
            d: path("M 0 300 Q 50 300 100 300 Q 250 300 350 300 C 350 300 500 300 650 300 Q 750 300 800 300");
            stroke: #13bf75;
        }
    }

    @keyframes ContentFadeIn {
        0% {
            transform: translateY(-1rem);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes ImageFadeIn {
        0% {
            transform: translate(-.5rem, -.5rem) scale(1.05);
            opacity: 0;
            filter: blur(2px);
        }
        50% {
            opacity: 1;
            filter: blur(2px);
        }
        100% {
            transform: translateY(0) scale(1.0);
            opacity: 1;
            filter: blur(0);
        }
    }

</style>
