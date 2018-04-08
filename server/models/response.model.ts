export class Page<T> {
    public rows: Array<T>;
    public count: number;
    public page: number;
    public size: number;
}

export class Response<T> {
    public data: T;
    public status: boolean;
    public messages: Array<string>;
    public sessionId: string;
    
    public constructor() {
        this.data = null;
        this.status = true;
        this.messages = [];
    }
}