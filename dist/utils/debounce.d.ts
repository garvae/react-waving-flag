export declare const debounce: <T extends unknown[], U>(cb: (...args: T) => U | PromiseLike<U>, wait: number) => (...args: T) => Promise<U>;
