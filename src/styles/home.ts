import styled from "styled-components";

interface ImageProps {
  imageSource: string;
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
  grid-template-columns: auto 1fr;
	row-gap: 1.5rem;
`;

export const SectionDefault = styled.section`
  grid-column: span 2;
  display: grid;
  gap: 32px;
  padding: 0 1.5rem;
  position: relative;
	margin: calc(64px - 1.5rem) 0;

	&.highlight {
		grid-template-columns: 1fr 1fr;
		margin-bottom: calc(64px - 1.5rem);
		margin-top: 0;
	}
`;

export const Title = styled.span`
  grid-column: span 2;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 48px;
  color: var(--text-title);

	&.title-h2 {
		font-size: 40px;
		text-align: center;
	}

	&.title-h3 {
		font-size: 32px;
		text-align: center;
	}
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

	&.center {
		text-align: center;
	}
`;

export const Image = styled.div<ImageProps>`
  grid-column: span 2;
	border-radius: 24px; 
	width: 100vw;
	height: 340px;
	background-image: url(${({ imageSource }) => imageSource});
	background-position: 26% 60%;
	background-repeat:no-repeat; 
	background-size: auto 120%;
	position: relative;
	right: -1.5rem;

	&.small {
		grid-column: span 1;
		width: 35vw;
		height: 200px;
		left: -1.5rem;
		position: relative;
		overflow: hidden;


		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: var(--highlight-color);
			opacity: 0.8;
			filter: saturate(180%);
		}
	}

	&.medium {
		grid-row: 3;
		grid-column: 2;
		width: calc(100% - 1.5rem);
		height: 200px;
		right: 0;
		justify-self: stretch;
	}
`;