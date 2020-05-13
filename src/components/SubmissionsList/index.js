import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import 'styled-components/macro';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import List from '../List';
import submissions from '../../data/Submission.json';

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
	const pageSize = 10;
	const [currentItems, setCurrentItems] = useState(submissions.slice(0, pageSize));
	const [page, setPage] = useState(1);
	const totalPages = submissions.length / 10;

	const handlePageChange = (event, value) => {
		/** Update page in pagination component */
		setPage(value);
		/** Update items showing in list */
		setCurrentItems(submissions.slice(
			(value - 1) * pageSize, value * pageSize
		));
	};

	return (
		<div css={styles}>
			<List
				items={currentItems}
				keyFirstCol="Address"
				keySecondCol="Date"
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
