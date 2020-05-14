import { css } from 'styled-components';

export default css`
	display: flex;
    flex-direction: column;
    align-items: center;
	margin-top: 2.4rem;

	@media screen and (min-width: 400px) {
		margin-top: 4rem;
	}

	.custom-list {
		margin: 2.4rem 0;
	}

	.filters {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: calc(100% - 2.8rem);
		margin: 0 1.6rem;

		@media screen and (min-width: 400px) {
			width: 50%;
		}
	}

	.arrow-btn {
		margin: 1.6rem;
	}

	.order-date-btn {
		svg {
			transition: transform .2s ease-in-out;
		}

		&.js-arrow-up svg {
			transform: rotate(180deg);
		}
	}

	.MuiPaginationItem-outlined {
		border-color: rgba(255, 255, 255, 0.4);
	}
`;
