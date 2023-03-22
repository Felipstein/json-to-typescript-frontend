import styled from 'styled-components';
import { Text } from '../Text';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

export const MainContainer = styled.main`
  width: 90vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 4.8rem auto;

  flex: 1;

  #sub-title {
    margin-top: 3.2rem;
  }

  #btn-run {
    margin-top: 1.6rem;
  }

  .codes-block {
    margin-top: 0.8rem;

    display: flex;
    gap: 0.8rem;

    width: 90vw;
    max-width: 136rem;

    & > * {
      flex: 1;
    }
  }
`;

export const ErrorFeedback = styled(Text)`
  margin: 1.6rem 0 0.4rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.red[400]};
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  padding: 3.4rem;

  .block-footer {
    width: 30rem;

    display: flex;
    align-items: flex-end;

    gap: 0.8rem;

    &.by {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 0.4rem;
    }
  }
`;
