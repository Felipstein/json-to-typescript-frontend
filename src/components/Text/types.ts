import { HTMLAttributes, ReactNode } from 'react';

export type TextSize = 'md' | 'sm' | 'xsm';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  size?: TextSize;
  children: ReactNode;
}
