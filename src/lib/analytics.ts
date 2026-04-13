declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    [key: string]: unknown;
  }
}

let metrikaInited = false;

export function initYandexMetrika(counterId?: string) {
  if (!counterId || metrikaInited || typeof window === "undefined") return;

  const idNum = Number(counterId);
  if (!Number.isFinite(idNum) || idNum <= 0) return;

  metrikaInited = true;

  // Official asynchronous bootstrap with safe-guard against duplicate initialization.
  (function (m: Window, e: Document, t: string, r: string, i: string, k?: HTMLScriptElement, a?: HTMLScriptElement) {
    m[i] =
      m[i] ||
      function (...args: unknown[]) {
        const queue = (m[i + "a"] as unknown[] | undefined) ?? [];
        queue.push(args);
        m[i + "a"] = queue;
      };
    (m[i + "l"] as number) = 1 * new Date().getTime();
    for (let j = 0; j < e.scripts.length; j += 1) {
      if (e.scripts[j].src === r) return;
    }
    k = e.createElement(t) as HTMLScriptElement;
    a = e.getElementsByTagName(t)[0] as HTMLScriptElement;
    k.async = true;
    k.src = r;
    a.parentNode?.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  window.ym?.(idNum, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  });
}
