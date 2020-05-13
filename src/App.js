import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import logo from './logo.svg';
import './App.css';
import SubmissionsList from './components/SubmissionsList';
import SubmissionAnswersList from './components/SubmissionAnswersList';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#19647E',
		},
		secondary: {
			main: '#46B1C9',
		},
		text: {
			secondary: '#fff',
		}
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>Results of submissions</h1>
				</header>
				<main>
					<h2>Answers</h2>
					<SubmissionAnswersList />

					<h2>Submissions</h2>
					<SubmissionsList />
				</main>
			</div>
		</ThemeProvider>
	);
}

export default App;
