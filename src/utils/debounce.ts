export const debounce = <T extends unknown[], U>(cb: (...args: T) => PromiseLike<U> | U, wait: number) => {
  let timer: NodeJS.Timeout;

  return (...args: T): Promise<U> => {
    clearTimeout(timer);
    return new Promise(resolve => {
      timer = setTimeout(() => resolve(cb(...args)), wait);
    });
  };
};
