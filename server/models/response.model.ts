export class Page<T> {
    rows: T;
    count: number;
    page: number;
    size: number;
}

export class Response<T> {
    data: T;
    status: boolean;
    messages: Array<string>;

    constructor() {
        this.data = null;
        this.status = true;
        this.messages = [];
    }
}