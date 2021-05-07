<template>
    <button :disabled="disabled" class="button">
        <slot/>
    </button>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class BaseButton extends Vue {
        @Prop({type: Boolean, default: false})
        private readonly disabled!: boolean;
    }
</script>

<style lang="scss" scoped>
    @import "~@/scss/global";

    .button {
        background-color: rgba(0, 0, 0, 0);
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 24px;
        margin: 4px 2px;
        cursor: pointer;
        border: none;

        &:active {
            border: none;
            color: green;
        }
        &:focus{
            outline: none;
        }
    }
</style>
