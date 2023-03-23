import { SelectHTMLAttributes } from 'react';
import { TranspilationType } from '../../types/Transpilations';

export type SelectTranspilationProps = SelectHTMLAttributes<HTMLSelectElement>;

export interface TranspilationOption {
  value: TranspilationType;
  label: string;
}
