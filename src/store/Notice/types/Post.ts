import dayjs, {Dayjs} from 'dayjs';

export interface WordpressQueries {
    pageNumber: number;
    categoryId: number;
}

export interface FeaturedMedia {
    readonly media_details: {
        readonly sizes: {
            readonly full: {
                readonly source_url: string,
            },
            readonly thumbnail: {
                readonly source_url: string,
            },
            readonly medium: {
                readonly source_url: string,
            },
            readonly medium_large: {
                readonly source_url: string,
            },
            readonly 'post-thumbnail': {
                readonly source_url: string,
            },
        },
    };
}

export interface SerializedPost {
    readonly id: number;
    readonly title: {
        readonly rendered: string,
    };
    readonly excerpt: {
        readonly rendered: string,
    };
    readonly date: string;
    readonly content: {
        readonly rendered: string,
    };
    // アイキャッチ画像
    readonly _embedded: {
        readonly 'wp:featuredmedia': FeaturedMedia[] | undefined,
    };
    readonly next_post: number;
    readonly previous_post: number;
}

export interface SourceURL {
    readonly full: string;
    readonly thumbnail: string;
    readonly medium: string;
    readonly medium_large: string;
}


export class Post {

    public static Deserialize(serializedPost: SerializedPost): Post {
        const id = serializedPost.id;
        const title = serializedPost.title.rendered;
        const excerpt = serializedPost.excerpt.rendered;
        const time = dayjs(serializedPost.date);
        const content = serializedPost.content.rendered || '';
        const nextPost = serializedPost.next_post;
        const prevPost = serializedPost.previous_post;

        if (serializedPost._embedded['wp:featuredmedia'] === undefined) {
            return new Post(id, title, excerpt, time, content, null, nextPost, prevPost);
        }
        const size = serializedPost._embedded['wp:featuredmedia'][0].media_details.sizes;
        const sourceURL: SourceURL = {
            full: size.full !== undefined ? size.full.source_url : '',
            thumbnail: size.thumbnail !== undefined ? size.thumbnail.source_url : '',
            medium: size.medium !== undefined ? size.medium.source_url : '',
            medium_large: size.medium_large !== undefined ? size.medium_large.source_url : '',
        };

        return new Post(id, title, excerpt, time, content, sourceURL, nextPost, prevPost);
    }

    private readonly id: number;
    private readonly title: string;
    private readonly excerpt: string;
    private readonly time: Dayjs;
    private readonly content: string;
    private readonly sourceURL: SourceURL | null;
    public readonly nextPost: number;
    public readonly prevPost: number;


    public constructor(id: number, title: string, excerpt: string, time: Dayjs, content: string = '',
                       sourceURL: SourceURL | null = null, nextPost: number, prevPost: number) {
        this.id = id;
        this.title = title;
        this.excerpt = excerpt;
        this.content = content;
        this.time = time;
        this.sourceURL = sourceURL;
        this.nextPost = nextPost;
        this.prevPost = prevPost;
    }

    public getId() {
        return this.id;
    }

    public getNextPost() {
        return this.nextPost;
    }

    public getPrevPost() {
        return this.prevPost;
    }

    public getTitle() {
        return this.title;
    }

    public getExcerpt() {
        return this.excerpt;
    }

    public getTime(): Dayjs {
        return this.time;
    }

    public getFormatTime(): string {
        return this.time.format('YYYY年M月D日 H時m分');
    }

    get getContent() {
        return this.content;
    }

    public hasPicture() {
        return this.sourceURL !== null;
    }

    public getSourceURL(size: keyof SourceURL): string {
        if (this.sourceURL === null) {
            return '';
        }
        return this.sourceURL[size];
    }

}
