import questions from './Question.json';
import answers from './SubmissionAnswer.json';
import submissions from './Submission.json';

/**
 * Transforms an array into an Object,
 * with the value of the given key
 *
 * @param {Array} array
 * @param {String} key to make as keys of the object
 */
const convertArrayToObject = (array, key) => {
	const initialValue = {};

	return array.reduce((obj, item) => {
		return {
			...obj,
			[item[key]]: item,
		};
	}, initialValue);
};

const questionsObj = convertArrayToObject(questions, 'QuestionId');
const submissionsObj = convertArrayToObject(submissions, 'SubmissionId');

/**
 * Get question object for the given ID
 * @param {String} id ID of the question
 */
const getQuestion = (id) => {
	return questionsObj[id];
};

const getSubmissionInfo = (id) => {
	return submissionsObj[id];
};

const getAnswers = () => {
	return answers.map(({ SubissionAnswerId, SubmissionId, QuestionId, Text }) => {
		const { Text: question } = getQuestion(QuestionId);
		const { Date: date, Address: address } = getSubmissionInfo(SubmissionId);

		return {
			answerId: SubissionAnswerId,
			submissionId: SubmissionId,
			address,
			displayAddress: address,
			date,
			question,
			answer: Text,
		};
	});
};

export default getAnswers;
