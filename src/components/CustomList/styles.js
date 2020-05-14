import { css } from 'styled-components';

export default css`
	.MuiListItem-root {
		flex-wrap: wrap;
		opacity: 0.7;
		transition: opacity .2s ease-out;

		:hover {
			opacity: 1;
		}
	}

	.MuiListItemText-root {
		flex-basis: 0;
	}

	.bottomRow .MuiTypography-body1,
	.bottomRow .MuiTypography-body2 {
		font-weight: 700;
	}

	.row {
		display: inline-flex;
		flex: 1 1 100%;
	}

	.row-top__first-col .js-highlight {
		color: #292c34;
		background-color: #F4D35E;
	}

	.row-top__second-col {
		text-align: right;
	}

	.row-bottom__second-col {
		align-self: flex-end;
		text-align: right;
	}
`;
