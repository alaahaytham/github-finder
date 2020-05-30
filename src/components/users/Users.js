import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import propTypes from 'prop-types';

// Class-based component
// export class Users extends Component {
//   render() {
//     return (
//       <div style={userStyles}>
//         {this.props.users.map((user) => (
//           <UserItem key={user.id} user={user} />
//         ))}
//       </div>
//     );
//   }
// }

// Functional component since there is no state
const Users = (props) => {
  if (props.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyles}>
        {props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: propTypes.array.isRequired,
  loading: propTypes.bool.isRequired,
};

const userStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
