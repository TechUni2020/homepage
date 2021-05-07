export interface SerializedCategory {
    readonly id: number;
    readonly name: string;
}

export class Category {

    public static Deserialize(serializedCategory: SerializedCategory): Category {
        const id = serializedCategory.id;
        const name = serializedCategory.name;

        return new Category(id, name);
    }
    private readonly id: number;
    private readonly name: string;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    get Id () {
        return this.id;
    }

    get Name() {
        return this.name;
    }

}
