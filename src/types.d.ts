declare interface Disposable {
    [Symbol.dispose](): void;
}

declare interface AsyncDisposable {
    [Symbol.asyncDispose](): Promise<void>;
}

declare interface SymbolConstructor {
    readonly dispose: unique symbol;
    readonly asyncDispose: unique symbol;
}