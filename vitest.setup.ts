import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";

import { afterEach } from 'vitest';
import { cleanup } from "@testing-library/react";

import '@testing-library/jest-dom';

export const user = userEvent.setup();

afterEach(() => {
  cleanup();
});

// Vitest (jsdom) には matchMedia が無いので自前でモックする
if (!window.matchMedia) {
  window.matchMedia = (query: string) => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},    // 古い API（Chakra UI が参照する可能性あり）
      removeListener: () => {}, // 古い API
      dispatchEvent: () => false,
    }
  }
}