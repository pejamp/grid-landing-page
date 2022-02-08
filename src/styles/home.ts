import styled from "styled-components";

interface ImageProps {
  imageSource: string;
}

export const GridLayout = styled.div`
	display: grid;
	grid-template-columns: 30% 70%;

	&.itemBox {
		padding: 1.5rem;
		grid-template-columns: auto;
		row-gap: 1.5rem;
	}

	@media screen and (min-width: 768px) {
		grid-column: 1 / span 2;
		gap: 1.5rem;
		padding: 0 2rem;

		&.col-2 {
			padding: 0;
			grid-template-columns: 1fr 1fr;
			padding: 2rem;
			gap: 4rem;
			
			.itemBox {
				padding: 0;
				gap: 0;
				row-gap: 1.5rem;	
				grid-template-columns: 1fr;

				&.column-1 {
					grid-column: 1 / span 1;
				}
				&.column-2 {
					grid-column: 2 / span 2;
				}
				&.column-3 {
					grid-column: 1 / span 1;
				}
				&.column-4 {
					grid-column: 2 / span 2;
				}
			}
		}

	}
`;

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  overflow-x: hidden;
  display: grid;
`;

export const Header = styled.header`
  padding: 0 1.5rem;
  padding-top: 1.5rem;
	padding-bottom: 64px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

	@media screen and (min-width: 768px) {
		padding: 0 2rem;
  	padding-top: 2rem;
		padding-bottom: 64px;
		grid-template-columns: 1fr auto;
	}
`;

export const Main = styled.main`
  width: 100%;
  display: grid;
	row-gap: 1.5rem;

	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		row-gap: 2rem;
	}
`;

export const SectionDefault = styled.section`
  display: grid;
  row-gap: 32px;
  padding: 0 1.5rem;
  position: relative;
	margin: calc(64px - 1.5rem) 0;

	&.highlight {
		grid-template-columns: 1fr 1fr;
		margin-top: 0;
	}

	@media screen and (min-width: 768px) {
		padding: 0 2rem;
		grid-template-columns: 1fr 2fr;
		column-gap: 4rem;
		grid-column: 1 / span 2;

		&.highlight {
			grid-column: span 1;
			width: 55vw;
			margin: 0;
			align-self: center;
			column-gap: 8px;
		}
	}
`;

export const Title = styled.h1`
  grid-column: span 2;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 48px;
  color: var(--text-title);

	&.title-h2 {
		font-size: 40px;
		text-align: center;

		@media screen and (min-width: 768px) {
			grid-column: 1;
			text-align: left;
			font-size: 32px;
		}
	}

	&.title-h3 {
		font-size: 32px;
		text-align: center;

		@media screen and (min-width: 768px) {
			text-align: start;
			font-size: 24px;
			padding-right: 4rem;
		}
	}
`;

export const Text = styled.span`
  color: var(--text-body);
  place-self: center;

  &.release {
    text-transform: uppercase;
    font-weight: 600;
  }

	&.brand-name {
		font-weight: 600;
	}

	&.capitalize {
		text-transform: capitalize;
	}
`;

export const Paragraph = styled.p`
  grid-column: span 2;
  color: var(--text-body);
  line-height: 24px;

	&.center {
		text-align: center;
	}

	@media screen and (min-width: 768px) {
		&.center {
			grid-column: 2;
			text-align: left;
		}
	}
`;

export const Image = styled.div<ImageProps>`
	border-radius: 24px; 
	width: 100%;
	height: 340px;
	background-image: url(${({ imageSource }) => imageSource});
	background-position: 26% 60%;
	background-repeat:no-repeat; 
	background-size: auto 120%;
	position: relative;
	right: -1.5rem;
	
	&.small {
		grid-column: 1;
		left: -1.5rem;
		height: 200px;
		position: relative;
		overflow: hidden;
		place-self: center;
		
		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #D55A14;
			opacity: 0.8;
			filter: saturate(150%);
		}
		
		@media screen and (min-width: 768px) {
			left: 0;
			height: 300px;
			background-size: auto 150%;
		}
		
	}
	
	&.medium {
		grid-column: 2;
		width: calc(100% - 1.5rem);
		height: 200px;
		right: 0;
		justify-self: stretch;
		
		@media screen and (min-width: 768px) {
			justify-self: stretch;
			height: 300px;
		}
	}

	@media screen and (min-width: 768px) {
		grid-column: 2 / span 1;
		width: 100%;
		height: 400px;
		background-size: auto 130%;
		background-position: 20% 75%;
	}
`;

export const Footer = styled.footer`
	width: 100%;
	padding: 48px 2rem;
	display: grid;
	grid-template-columns: repeat(3, auto);	

	@media screen and (min-width: 768px) {
		justify-content: center;
		column-gap: 8px;		
	}
`;