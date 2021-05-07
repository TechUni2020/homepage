<template>
    <div class="prep">
        <h2>申し訳ございません。こちらのページはただ今準備中です。</h2>
        <img src="@/assets/prep.gif">
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })

    export default class WorksPageContent extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "@/scss/global";

    .prep {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 500px;
        background-color: white;

        h2 {
            color: theme(text);
        }

        @include respondTo(smallTablet) {
            padding: 30px;
        }

    }

</style>
