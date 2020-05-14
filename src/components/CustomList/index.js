import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

import { filterArrayBy, orderArrayByDate } from './utils';
import styles from './styles';

const listWidth = 600;

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: listWidth,
		maxHeight: 300,
		backgroundColor: theme.palette.primary.main,
		position: 'relative',
		overflow: 'auto',
		[theme.breakpoints.up('sm')]: {
			maxHeight: 550,
		},
	},
}));

const CustomList = ({ className,
	items,
	keyTopFirstCol,
	keyTopSecondCol,
	keyBottomFirstCol,
	keyBottomSecondCol,
	filterTopFirstColBy,
	orderDescendingTopSecondCol,
}) => {
	const classes = useStyles();
	const [displayedItems, setDisplayedItems] = useState(items);

	useEffect(() => {
		setDisplayedItems(items);
	}, [items]);

	useEffect(() => {
		/** on Search by address, update items list */
		const filtered = filterArrayBy(items, filterTopFirstColBy);

		if (filtered.length) setDisplayedItems(filtered);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filterTopFirstColBy, items]);

	useEffect(() => {
		/** order items by date */
		const ordered = orderArrayByDate(displayedItems, orderDescendingTopSecondCol, 'date');

		if (ordered.length) setDisplayedItems(ordered);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orderDescendingTopSecondCol, displayedItems]);

	return (
		<div className={` ${className}`} css={styles}>
			<List
				className={classes.root}
				width={listWidth}
			>
				{displayedItems.map((item, index) => (
					<Fragment key={index}>
						<ListItem>
							<div className="row topRow">
								{keyTopFirstCol &&
									<ListItemText
										className="row-top__first-col"
										primary={item[keyTopFirstCol]}
									/>
								}
								{keyTopSecondCol &&
									<ListItemText
										className="row-top__second-col"
										secondary={item[keyTopSecondCol]} />
								}
							</div>
							<div className="row bottomRow">
								{keyBottomFirstCol &&
									<ListItemText
										className="row-bottom__first-col"
										primary={item[keyBottomFirstCol]}
									/>
								}
								{keyBottomSecondCol &&
									<ListItemText
										className="row-bottom__second-col"
										secondary={item[keyBottomSecondCol]}
									/>
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
	items: PropTypes.arrayOf(PropTypes.shape({
		address: PropTypes.string,
		answer: PropTypes.string,
		answerId: PropTypes.number,
		date: PropTypes.string,
		question: PropTypes.string,
		submissionId: PropTypes.number,
	})).isRequired,
	keyTopFirstCol: PropTypes.string,
	keyTopSecondCol: PropTypes.string,
	keyBottomFirstCol: PropTypes.string,
	keyBottomSecondCol: PropTypes.string,
};

export default CustomList;
