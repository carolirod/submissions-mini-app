import { css } from 'styled-components';

export default css`
	display: flex;
    flex-direction: column;
    align-items: center;
	padding: 1.6rem;

	.custom-list {
		margin: 2.4rem 0;
	}

	.filters {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.arrow-btn {
		margin: 1.6rem;
	}

	.MuiInputBase-root {
		color: #fff;
	}

	.MuiInput-underline:before {
		border-bottom-color: #fff;
	}

	.MuiInput-underline:hover:not(.Mui-disabled):before {
		border-bottom-color: #91e1ff;
	}

	.order-date-btn {
		svg {
			transition: transform .2s ease-in-out;
		}

		&.js-arrow-up svg {
			transform: rotate(180deg);
		}
	}
`;
