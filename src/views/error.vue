<template>
    <div>
        <page-template :background="require('@/assets/error.jpg')"
                       :title-height="height">
            <template v-slot:title>
                <headline title="404" description="ページが見つかりませんでした"></headline>
            </template>
            <template v-slot:content>
                <div class="error-content">
                    <p>
                        お探しのページは一時的にアクセスできない状況にあるか、<br>
                        移動、もしくは削除された可能性があります。
                    </p>
                </div>
            </template>
        </page-template>
    </div>
</template>

<script lang="ts">
    import {Component} from 'vue-property-decorator';
    import PageTemplate from "@/template/PageTemplate.vue";
    import Headline from "@/components/module/Headline.vue";
    import {Responsive} from '@/mixins/Responsive';
    import {Mixins} from 'vue-mixin-decorator';

    @Component({
        components: {Headline, PageTemplate}
    })
    export default class error extends Mixins<Responsive>(Responsive) {

        public get height() {
            return this.lessThanSm() ? '600px' : '780px';
        }
    }
</script>

<style lang="scss" scoped>
    .error-content {
        height: 300px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
