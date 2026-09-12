import { Context } from './Context';
declare class EsiDocumentationError extends Error {
    isEsiDocumentationError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { EsiDocumentationError };
