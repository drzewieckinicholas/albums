import React from 'react';
import PropTypes from 'prop-types';
import {GoTrashcan} from 'react-icons/go';
import {useThunk} from '../hooks/useThunk';
import {deleteUser} from '../features/users/usersThunks';
import Button from './Button';

function UsersListItem({user}) {
	const [doDeleteUser, isDeletingUser, deletingUserError] = useThunk(deleteUser);

	const handleDeleteUser = () => {
		doDeleteUser(user);
	};

	return (
		<div>
			<Button loading={isDeletingUser} onClick={handleDeleteUser}>
				<GoTrashcan />
			</Button>
			{deletingUserError && <div>Error deleting user</div>}
			<div>{user.name}</div>
		</div>
	);
}

UsersListItem.propTypes = {
	user: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
	}).isRequired,
};

export default UsersListItem;
