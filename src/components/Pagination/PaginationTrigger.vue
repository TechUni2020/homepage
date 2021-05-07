<template>
    <span class="base-pagination-trigger"
          :class="clazz"
          @click="onClick">
    {{ pageNumber }}
    </span>
</template>

<script lang="ts">
    import {Component, Prop} from 'vue-property-decorator';
    import {Mixins} from "vue-mixin-decorator";
    import {Responsive} from "@/mixins/Responsive";

    @Component
    export default class PaginationTrigger extends Mixins<Responsive>(Responsive) {
        @Prop({type: Number, default: 1})
        private readonly pageNumber!: number;

        @Prop({type: Boolean, default: false})
        private readonly isCurrentPage!: boolean;

        public get clazz() {
            return this.isCurrentPage ? 'current__page' : '';
        }

        public onClick() {
            let temp: number = this.lessThanSm() ? 600 : 780;
            window.scroll({
                top: temp,
                behavior: 'smooth'
            });
            this.$emit('load-page', this.pageNumber);
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/scss/global";

    .base-pagination-trigger {
        cursor: pointer;
        transition: all 300ms ease;
        font-size: 24px;
        margin-left: 8px;
        margin-right: 8px;

        &:hover {
            color: #2fc0be;
        }

        &.current__page {
            color: #2fc0be;
            font-weight: bolder;
        }
    }
</style>
