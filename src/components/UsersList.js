import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useThunk} from '../hooks/useThunk';
import {createUser, fetchUsers} from '../features/users/usersThunks';
import Button from './Button';
import Skeleton from './Skeleton';
import UsersListItem from './UsersListItem';

function UsersList() {
	const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
	const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(createUser);
	const {data} = useSelector(state => state.users);

	useEffect(() => {
		doFetchUsers();
	}, [doFetchUsers]);

	const handleCreateUser = () => {
		doCreateUser();
	};

	let content;

	if (isLoadingUsers) {
		content = <Skeleton times={1} />;
	} else if (loadingUsersError) {
		content = <div>Error</div>;
	} else {
		content = data.map(user => (
			<UsersListItem key={user.id} user={user} />
		));
	}

	return (
		<div>
			<div>
				<Button className='button' loading={isCreatingUser} onClick={handleCreateUser}>
					{isCreatingUser ? 'Creating user...' : 'Create user'}
				</Button>
			</div>
			<div>
				{creatingUserError && (
					<div>Error creating user: {creatingUserError}</div>
				)}
			</div>
			{content}
		</div>
	);
}

export default UsersList;
