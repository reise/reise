export class Page<T> {
    rows: Array<T>;
    count: number;
    page: number;
    size: number;
}

export class Response<T> {
    data: T;
    status: boolean;
    messages: Array<string>;
    sessionId: string;
    public constructor() {
        this.data = null;
        this.status = true;
        this.messages = [];
    }
}