import styled from 'styled-components';

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
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  padding: 3.4rem;

  .block-footer {
    width: 30rem;

    &.by {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
