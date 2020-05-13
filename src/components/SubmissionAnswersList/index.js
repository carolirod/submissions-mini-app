import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import 'styled-components/macro';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import get from 'lodash.get';

import questions from '../../data/Question.json';
import answers from '../../data/SubmissionAnswer.json';
import submissions from '../../data/Submission.json';

const styles = css`
	.MuiListItem-root {
		flex-wrap: wrap;
	}

	.answer {
		width: 100%;
	}
`;

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 500,
		backgroundColor: theme.palette.primary.main,
		position: 'relative',
		overflow: 'auto',
		maxHeight: 500,
	},
	listSection: {
		backgroundColor: 'inherit',
	},
	ul: {
		backgroundColor: 'inherit',
		padding: 0,
	},
}));

const SubmissionAnswersList = props => {
	const classes = useStyles();

	return (
		<List css={styles} className={classes.root} subheader={<li />}>
			{questions.map(({ QuestionId, Text }) => {
				// Loop answers to find the ones mathcing the questions
				const answersOfQuestion = answers
					.filter(({ QuestionId: answerQuestionId }) => (QuestionId === answerQuestionId));

				return (
					<li key={`section-${QuestionId}`} className={classes.listSection}>
						<ul className={classes.ul}>
							<ListSubheader>{Text}</ListSubheader>

							{answersOfQuestion.map(({ SubissionAnswerId, Text, SubmissionId }) => {
								const submissionInfo = submissions.filter(({ SubmissionId: submissionid }) => SubmissionId === submissionid);

								return (
									<ListItem key={`item-${QuestionId}-${SubissionAnswerId}`}>
										{submissionInfo && (
											<>
												<ListItemText primary={get(submissionInfo, '0.Address', '')} />
												<ListItemText secondary={get(submissionInfo, '0.Date', '')} />
											</>
										)}

										<Typography className="answer" variant="caption" display="block" gutterBottom>
											{Text}
										</Typography>
									</ListItem>
								);
							})}
						</ul>
					</li>
				);
			})}
		</List>
	);
};

SubmissionAnswersList.propTypes = {

};

export default SubmissionAnswersList;
