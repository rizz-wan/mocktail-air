import { ITheme } from '@fluentui/react';
import { defaultTheme } from 'src/utils';

export type RootStateKey = keyof IRootState;

// Tip: Declare your reducers here
export interface IRootState {
  theme: ITheme;
  // Tip:
  // component: IComponentState;
}

export const initialRootState: IRootState = {
  theme: defaultTheme,
  // Tip:
  // component: initialComponentState;
};
