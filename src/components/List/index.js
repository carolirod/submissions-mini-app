import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: 400,
		maxWidth: 300,
		backgroundColor: theme.palette.primary.main,
	},
}));

/**
 * I used the virtualized list from material-ui
 * since there's going to be filtering, the performance might be affected
 * so with this list I want to prevent that
 * https://material-ui.com/components/lists/#virtualized-list
*/
const List = ({ items, subheaderText, keyFirstCol, keySecondCol }) => {
	const classes = useStyles();
	const itemCount = items.length;

	return (
		<div className={classes.root}>
			<FixedSizeList
				height={400}
				width={600}
				itemSize={46}
				itemCount={itemCount}
			>
				{({ index, style }) => {
					return (
						<ListItem
							button
							style={style}
							key={index}
						>
							{keyFirstCol &&
								<ListItemText primary={items[index][keyFirstCol]} />
							}
							{keySecondCol &&
								<ListItemText secondary={items[index][keySecondCol]} />
							}
						</ListItem>
					);
				}}
			</FixedSizeList>
		</div>
	);
};

List.defaultProps = {
	subheaderText: '',
	keySecondCol: '',
};

List.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	subheaderText: PropTypes.string,
	keySecondCol: PropTypes.string,
};

export default List;
