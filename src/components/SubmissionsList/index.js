import React, { useState } from 'react';
import 'styled-components/macro';
import Pagination from '@material-ui/lab/Pagination';
import TextField from '@material-ui/core/TextField';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';

import CustomList from '../CustomList';
import getAnswers from '../../data/utils';
import styles from './styles';

const SubmissionsList = () => {
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

	/** Filter by address */
	const [addressFilter, setAddressFilter] = useState('');
	const handleAddressChange = (e) => {
		setAddressFilter(e.target.value);
	};

	/** Order by date */
	const [dateOrderDescending, setDateOrderDescending] = useState(true);
	const handleOrderByDate = () => {
		setDateOrderDescending(!dateOrderDescending);
	};

	return (
		<div css={styles}>
			<div className="filters">
				<TextField
					id="standard-basic"
					variant="filled"
					label="Search by address"
					onChange={handleAddressChange}
				/>

				<Button
					variant="contained"
					color="primary"
					endIcon={<ArrowDownwardIcon fontSize="inherit">arrow down</ArrowDownwardIcon>}
					onClick={handleOrderByDate}
					className={`order-date-btn ${!dateOrderDescending && 'js-arrow-up'}`}
				>
					Order by date
				</Button>
			</div>

			<CustomList
				className="custom-list"
				items={currentItems}
				keyTopFirstCol="address"
				filterTopFirstColBy={addressFilter}
				keyTopSecondCol="date"
				orderDescendingTopSecondCol={dateOrderDescending}
				keyBottomFirstCol="question"
				keyBottomSecondCol="answer"
			/>

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
	);
};

export default SubmissionsList;
