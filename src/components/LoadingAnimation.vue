<template>
    <div class="wrap">
        <div class="loading">
            <div class="bounceball"></div>
            <div class="text">NOW LOADING</div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class LoadingAnimation extends Vue {
    }
</script>

<style lang="scss" scoped>
    // ボールのサイズ
    $width: 15px;
    $height: 15px;

    // バウンドの距離
    $bounce_height: 30px;

    .text {
        color: #063743;
        display: inline-block;
        margin-left: 5px;
    }

    .bounceball {
        position: relative;
        display: inline-block;
        height: 37px;
        width: $width;
        &:before {
            position: absolute;
            content: '';
            display: block;
            top: 0;
            width: $width;
            height: $height;
            border-radius: 50%;
            background-color: #063743;
            transform-origin: 50%;
            animation: bounce 500ms alternate infinite ease;
        }
    }

    @keyframes bounce {
        0% {
            top: $bounce_height;
            height: 5px;
            border-radius: 60px 60px 20px 20px;
            transform: scaleX(2);
        }
        35% {
            height: $height;
            border-radius: 50%;
            transform: scaleX(1);
        }
        100% {
            top: 0;
        }
    }
</style>
