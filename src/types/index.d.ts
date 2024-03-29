declare interface RequestParams {
    url: string;
    path: string;
    method: string;
    params?: string;
    body?: object;
}
declare interface ResponseObject {
    code: number;
    data: { [key: string]: unknown };
    type: string;
    error: null | { message: string };
}

declare interface RequestOptions {
    method: string;
    headers: { [key: string]: string };
    body?: unknown;
}

declare type ResponseParams = Partial<ResponseObject>;
