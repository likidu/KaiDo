/// <reference types="svelte" />
/// <reference types="vite/client" />
/* eslint-disable @typescript-eslint/no-unused-vars */
declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    'ononyx:focus'?: () => void;
    'ononyx:blur'?: () => void;
    'ononyx:select'?: () => void;
    'ononyx:softleft'?: () => void;
    'ononyx:softright'?: () => void;
  }
}
