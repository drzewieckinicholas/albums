import React from 'react';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Title from './components/Title';
import UsersList from './components/UsersList';

function App() {
	return (
		<div className='app'>
			<Header>
				<Title text='Albums' />
			</Header>
			<Main>
				<UsersList />
			</Main>
		</div>
	);
}

export default App;
