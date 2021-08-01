<template>
    <div class="hamburger-button" @click="toggle">
        <div class="hamburger-button__slider" :class="{ 'is-active': isActive }">
      <span class="hamburger-button__box">
        <span class="hamburger-button__inner hamburger-button__inner--white hamburger-button__inner--animatable"></span>
      </span>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class HamburgerButton extends Vue {
        @Prop({type: Boolean, default: false})
        private readonly isActive!: boolean;

        public toggle() {
            this.$emit('toggle');
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/scss/global";

    .hamburger-button {
        position: relative;
        outline: none;

        &__box {
            width: 40px;
            height: 24px;
            display: inline-block;
            position: relative;

            cursor: pointer;
        }

        %base-hamburger-button {
            display: block;
            position: absolute;

            width: 40px;
            height: 4px;
        }

        //The inner 3 lines
        &__inner {
            @extend %base-hamburger-button;
            margin-top: -2px;
            border-radius: 5px;

            &::before {
                border-radius: 5px;
                @extend %base-hamburger-button;
                top: 10px;
                content: "";
            }

            &::after {
                border-radius: 5px;
                @extend %base-hamburger-button;
                top: 20px;
                content: "";
            }
        }

        &__inner--white {
            background-color: theme(primary);

            &::before, &::after {
                background-color: theme(primary);
            }
        }

        &__inner--animatable {
            transition: transform 0.15s ease;

            &::before, &::after {
                transition: transform 0.15s ease;
            }
        }

        //To change to X shape
        &__slider.is-active {
            .hamburger-button__inner {
                transform: translate3d(0, 10px, 0) rotate(45deg);

                &::before {
                    transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
                    opacity: 0;
                }

                &::after {
                    transform: translate3d(0, -20px, 0) rotate(-90deg);
                }
            }
        }
    }
</style>
