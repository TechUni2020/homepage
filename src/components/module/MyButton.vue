<template>
    <button @click.stop.prevent="onClick">
        <slot></slot>
        <span>
      <font-awesome-icon icon="chevron-right"/>
    </span>
    </button>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from "vue-property-decorator";
    import {RawLocation} from "vue-router";

    @Component
    export default class MyButton extends Vue {
        @Prop({type: [String, Object], default: null})
        public to!: RawLocation | null;
        @Prop({type: [String, Object], default: null})
        public ext!: string | null;

        @Emit("click")
        public onClick(event: MouseEvent): MouseEvent {
            this.push();
            return event;
        }

        public push() {
            if (this.ext != null) {
                location.replace(this.ext);
                return;
            }
            if (this.to === null) {
                return;
            }

            this.$router.push(`/${this.to}`).then();
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/scss/global";

    button {
        outline: 0;
        padding: 15px 30px;
        color: theme(primary);
        font-weight: 700;
        font-size: 16px;
        text-indent: 23px;

        background: linear-gradient(to left, #2fc0be 0%, #13bf75 100%);

        cursor: pointer;
        border: none;
        border-radius: 50px;

        span {
            display: inline-block;
            transition: 0.3s;
        }

        &:hover {
            span {
                transform: translateX(5px);
            }
        }
    }
</style>
