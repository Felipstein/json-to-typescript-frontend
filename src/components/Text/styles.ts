import styled from 'styled-components';
import { TextSize } from './types';

export const SpanStyled = styled.span<{ size: TextSize }>`
  font-size: ${({ theme, size }) => theme.typography.sizes[size] || theme.typography.sizes.md};
`;
