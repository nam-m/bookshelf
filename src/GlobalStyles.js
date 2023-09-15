import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
	/* Apply border-box to all elements and pseudo-elements ::before, ::after */
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	/* Remove default margin */
	* {
		margin: 0;
	}

	/* Use percentage-based heights*/
	html, body, #root {
		height: 100%;
	}

	body {
		/* Set default line height */
		line-height: 1.5;
		/* Font smoothing on MacOS browser */
		-webkit-font-smoothing: antialiased;
		/* Set default font*/
		font-family: 'Raleway', sans-serif;
	}

	/* Inherit fonts for form control*/
	input, button, textarea, select {
		font: inherit;
	}
`;

export default GlobalStyles;