<template>
    <transition appear name="modal">
        <div @click.self="$emit('close')"
             class="modal modal_overlay">
            <div class="modal_window">
                <header class="modal_header">
                    <h3>{{title}}</h3>
                </header>

                <div class="modal_content">
                    <slot></slot>
                </div>
                <footer class="modal_footer">
                        <my-button @click="$emit('close')">
                            閉じる
                        </my-button>
                </footer>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import MyButton from "@/components/module/MyButton.vue";

    @Component({
        components: {
            MyButton,
        },
    })

    export default class ModalWindow extends Vue {
        @Prop({type: String, default: ''})
        public readonly title!: string;
    }
</script>

<style lang="scss" scoped>
    @import "@/scss/global";

    .modal {

        &.modal_overlay {
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            // ロゴよりも上
            z-index: 100;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: theme(background, 0.5);
        }

        &_window {
            width: 60vw;
            background: theme(primary);
            border-radius: 5px;
            @include respondTo(smallTablet){
                width: 80vw;
            }

        }

        &_header {
            padding-left: 2px;
            padding-top: 2px;
            padding-bottom: 2px;
            line-height: 2.25rem;
            text-align: left;
            background: #bbbbbb;
            display: flex;
            flex-direction: row;
            border-radius: 5px 5px 0 0 / 5px 5px 0 0;

            h3 {
                margin: 0;
                width: 100%;
                text-align: center;
                text-indent: -30px;
            }
        }

        &_content {
            color: theme(secondary);
            padding: 20px 20px 0 20px;
            line-height: 1.5;
        }

        &_footer {
            padding: 20px;
            display: flex;
            justify-content: center;

            div {
                min-width: 70%;
            }
        }
    }

    // オーバーレイのトランジション
    .modal-enter-active, .modal-leave-active {
        transition: opacity 0.4s;

        // オーバーレイに包含されているモーダルウィンドウのトランジション
        .modal-window {
            transition: opacity 0.4s, transform 0.4s;
        }
    }

    // ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
    .modal-leave-active {
        transition: opacity 0.6s ease 0.4s;
    }

    .modal-enter, .modal-leave-to {
        opacity: 0;

        .modal-window {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
</style>
