import React, { useState, useEffect } from 'react';
import 'styled-components/macro';
import Pagination from '@material-ui/lab/Pagination';
import TextField from '@material-ui/core/TextField';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import CustomList from '../CustomList';
import getAnswers from '../../data/utils';
import styles from './styles';

const SubmissionsList = () => {
	const answerItems = getAnswers();

	/** Load data */
	const [loaded, setLoaded] = useState(false);
	const [loading, setLoading] = useState(false);

	const startLoading = () => {
		setLoading(true);

		setTimeout(() => {
			setLoaded(true);
		}, 600);
	};

	useEffect(() => {
		if (loaded) setLoading(false);
	}, [loaded]);

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
			{
				(!loaded && !loading) && (
					<Button
						variant="contained"
						onClick={startLoading}
					>
						Load the Submissions
					</Button>
				)
			}

			{
				loading && (
					<CircularProgress color="secondary" />
				)
			}

			{
				loaded && (
					<>
						<div className="filters">
							<TextField
								id="standard-basic"
								variant="filled"
								color="secondary"
								size="small"
								label="Search by address"
								onChange={handleAddressChange}
							/>

							<Button
								variant="contained"
								color="secondary"
								endIcon={<ArrowDownwardIcon fontSize="inherit">arrow down</ArrowDownwardIcon>}
								size="large"
								onClick={handleOrderByDate}
								className={`order-date-btn ${!dateOrderDescending && 'js-arrow-up'}`}
							>
								By date
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
					</>
				)
			}
		</div>
	);
};

export default SubmissionsList;
