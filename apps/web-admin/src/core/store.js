/**
 * OpenClaw Ops — Reactive Store (Proxy-based State Machine)
 */
const initialState = {
  workspace: 'trading',
  tabs: {
    trading: 'desk',
    leads: 'radar',
    content: 'strategy'
  }
};

const listeners = new Set();

const handler = {
  get(target, prop) {
    if (prop === 'tabs') return new Proxy(target.tabs, tabHandler);
    return target[prop];
  },
  set(target, prop, value) {
    target[prop] = value;
    listeners.forEach(fn => fn(prop, value));
    return true;
  }
};

const tabHandler = {
  set(target, prop, value) {
    target[prop] = value;
    listeners.forEach(fn => fn('tab', { workspace: prop, tab: value }));
    return true;
  }
};

export const appStore = {
  state: new Proxy({ ...initialState, tabs: { ...initialState.tabs } }, handler),
  subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  }
};
