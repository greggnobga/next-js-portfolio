'use client';

/** Vendor. */
import { Provider } from 'react-redux';

/** Store. */
import store from './store';

/** Store provider. */
export default function ({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
