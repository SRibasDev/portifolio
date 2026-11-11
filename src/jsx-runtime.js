// Keep recovered React Bits effects and the app on the same React runtime.
import { Y } from "./preserved-runtime.js";
export const jsx = Y.jsx;
export const jsxs = Y.jsxs;
export const Fragment = Y.Fragment;
export function jsxDEV(type, props, key) {
  return Y.jsx(type, props, key);
}
