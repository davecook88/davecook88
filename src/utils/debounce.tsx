// Debounce utility (leading edge: run immediately, then wait)
export function leadingDebounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
) {
  let timeout: number | undefined;
  let canRun = true;
  return (...args: Parameters<T>) => {
    if (canRun) {
      fn(...args);
      canRun = false;
      timeout = window.setTimeout(() => {
        canRun = true;
      }, delay);
    }
  };
}

export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
) {
  let timeout: number | undefined;
  return (...args: Parameters<T>) => {
    if (timeout) {
      window.clearTimeout(timeout);
    }
    timeout = window.setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
