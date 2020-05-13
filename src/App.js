import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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
					<h1>Dive into the submissions</h1>
				</header>
				<main>
					<SubmissionsList />
				</main>
			</div>
		</ThemeProvider>
	);
}

export default App;
