import styled from 'styled-components';

export const SelectStyled = styled.select`
  padding: 0.8rem 1.2rem;

  border-radius: 8px;

  font-family: ${({ theme }) => theme.typography.fontFamily};

  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

export const OptionStyled = styled.option``;
