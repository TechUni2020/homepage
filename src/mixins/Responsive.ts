import {Mixin} from 'vue-mixin-decorator';
import {Vue} from 'vue-property-decorator';

@Mixin
export class Responsive extends Vue {
    public static readonly xs = 600;
    public static readonly sm = 960;
    public static readonly md = 1264;
    public static readonly lg = 1904;

    private width = 0;

    public created() {
        this.width = window.innerWidth;
        window.addEventListener('resize', this.onResize);
    }

    public beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    }

    public lessThanSm() {
        return this.width <= Responsive.sm;
    }

    public moreThanMd() {
        return this.width >= Responsive.md;
    }

    private onResize() {
        this.width = window.innerWidth;
    }
}
