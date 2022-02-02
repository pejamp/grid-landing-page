import { ReactElement } from "react";
import styled from "styled-components";

interface ImageProps {
  imageSource: string;
}

export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  overflow-x: hidden;
  width: 100vw;

  main {
    width: 100%;

    .highlight {
      padding: 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      position: relative;

      .title {
        grid-column: span 2;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 48px;
        color: var(--text-title);
      }

      .release {
        color: var(--text-body);
        text-transform: uppercase;
        font-weight: 600;
        place-self: center;
      }
    }
  }
`;

export const Header = styled.header`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 56px;
`;

export const Logo = styled.div`
  background-color: var(--highlight-color);
  color: var(--white);
  width: 40px;
  height: 40px;
  font-weight: 700;
  padding: 4px;
`;

export const Text = styled.p`
  grid-column: span 2;
  color: var(--text-body);
  line-height: 24px;
`;

export const Image = styled.div<ImageProps>`
 border-radius: 24px; 
 width: 100vw;
 height: 340px;
 background-image: url(${props => props.imageSource});
 background-position: 25% 70%;
 background-repeat:no-repeat; 
 background-size: auto 120%;
 position: relative;
 left: 1rem;
`;