export const timeout = <T = null>(ms: number): Promise<T> => new Promise<T>((resolve) => {
    window.setTimeout(resolve, ms);
});
