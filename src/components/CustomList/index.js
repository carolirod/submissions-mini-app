import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import 'styled-components/macro';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

const listWidth = 600;

const styles = css`
	.MuiListItem-root {
		flex-wrap: wrap;
	}

	.row {
		display: inline-flex;
		flex: 1 1 100%;
	}

	.bottomRow .MuiTypography-body1,
	.bottomRow .MuiTypography-body2 {
		font-weight: 700;
	}

	.MuiListItemText-root {
		flex-basis: 0;
	}
`;

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: listWidth,
		backgroundColor: theme.palette.primary.main,
	},
}));

const CustomList = ({ items, keyTopFirstCol, keyTopSecondCol, keyBottomFirstCol, keyBottomSecondCol }) => {
	const classes = useStyles();

	return (
		<div className={classes.root} css={styles}>
			<List
				width={listWidth}
			>
				{items.map((item, index) => (
					<Fragment key={index}>
						<ListItem
							button
						>
							<div className="row topRow">
								{keyTopFirstCol &&
									<ListItemText primary={item[keyTopFirstCol]} />
								}
								{keyTopSecondCol &&
									<ListItemText secondary={item[keyTopSecondCol]} />
								}
							</div>
							<div className="row bottomRow">
								{keyBottomFirstCol &&
									<ListItemText primary={item[keyBottomFirstCol]} />
								}
								{keyBottomSecondCol &&
									<ListItemText secondary={item[keyBottomSecondCol]} />
								}
							</div>
						</ListItem>
						<Divider variant="middle" />
					</Fragment>
				))}
			</List>
		</div>
	);
};

CustomList.defaultProps = {
	keyTopFirstCol: '',
	keyTopSecondCol: '',
	keyBottomFirstCol: '',
	keyBottomSecondCol: '',
};

CustomList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	keyTopFirstCol: PropTypes.string,
	keyTopSecondCol: PropTypes.string,
	keyBottomFirstCol: PropTypes.string,
	keyBottomSecondCol: PropTypes.string,
};

export default CustomList;
