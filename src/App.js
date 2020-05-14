import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

import SubmissionsList from './components/SubmissionsList';
import logo from './logo.svg';
import './App.css';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#19647E',
		},
		secondary: {
			main: '#46B1C9',
		},
		text: {
			primary: '#fff',
			secondary: '#46B1C9',
		},
		// extra color just in case
		// '#F4D35E'
	},
	typography: {
		htmlFontSize: 18,
	},
	shape: {
		borderRadius: 0,
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<header className="App-header">
					<h1>
						Dive into the submissions
					</h1>
					<img src={logo} className="App-logo" alt="logo" width="80" />
				</header>
				<main>
					<SubmissionsList />
				</main>
			</div>
		</ThemeProvider>
	);
}

export default App;
