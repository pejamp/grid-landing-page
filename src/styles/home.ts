import { ReactElement } from "react";
import styled from "styled-components";

interface ImageProps {
  imageSource: string;
  sizeWidth: string;
  sizeHeight: string;
}

export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  overflow-x: hidden;
  width: 100vw;
`;

export const Header = styled.header`
  padding: 0 1.5rem;
  padding-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 64px;
`;

export const Logo = styled.div`
  background-color: var(--highlight-color);
  color: var(--white);
  width: 40px;
  height: 40px;
  font-weight: 700;
  padding: 4px;
`;

export const Main = styled.main`
  width: 100%;
  display: grid;
`;

export const Highlight = styled.section`
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  position: relative;
  margin-bottom: 64px;
`;

export const Title = styled.h1`
  grid-column: span 2;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 48px;
  color: var(--text-title);
`;

export const Text = styled.span`
  color: var(--text-body);
  place-self: center;

  &.release {
    text-transform: uppercase;
    font-weight: 600;
  }
`;

export const Paragraph = styled.p`
  grid-column: span 2;
  color: var(--text-body);
  line-height: 24px;
`;

export const Image = styled.div<ImageProps>`
 border-radius: 24px; 
 width: ${props => props.sizeWidth};
 height: ${props => props.sizeHeight};
 background-image: url(${props => props.imageSource});
 background-position: 26% 60%;
 background-repeat:no-repeat; 
 background-size: auto 120%;
 position: relative;
 right: -1.5rem;
`;