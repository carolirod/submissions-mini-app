import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import 'styled-components/macro';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import CustomList from '../CustomList';
import getAnswers from '../../data/utils';

const styles = css`
	padding: 1rem;
	background-color: #fff;
`;

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			marginTop: theme.spacing(2),
		},
	},
}));

const SubmissionsList = () => {
	const classes = useStyles();
	const answerItems = getAnswers();

	/** Pagination */
	const pageSize = 10;
	let totalPages = Math.floor(answerItems.length / pageSize);
	const remainder = answerItems.length % pageSize;
	if (remainder) totalPages += 1;
	const [page, setPage] = useState(1);
	const [currentItems, setCurrentItems] = useState(answerItems.slice(0, pageSize));

	const handlePageChange = (event, value) => {
		/** Update page in pagination component */
		setPage(value);
		/** Update items showing in list */
		setCurrentItems(answerItems.slice(
			(value - 1) * pageSize, value * pageSize
		));
	};

	return (
		<div css={styles}>
			<CustomList
				items={currentItems}
				keyTopFirstCol="address"
				keyTopSecondCol="date"
				keyBottomFirstCol="question"
				keyBottomSecondCol="answer"
			/>
			<div className={classes.root}>
				<Pagination
					count={totalPages}
					variant="outlined"
					color="secondary"
					showFirstButton
					showLastButton
					page={page}
					size="small"
					onChange={handlePageChange}
				/>
			</div>
		</div>
	);
};

SubmissionsList.propTypes = {

};

export default SubmissionsList;
