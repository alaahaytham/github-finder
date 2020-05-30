import React from 'react';
import PropTypes from 'prop-types';
// Class-based apprach

// export class UserItem extends Component {
//   render() {
//     const { login, avatar_url, html_url } = this.props.user;
//     return (
//       <div className="card text-center">
//         <img
//           src={avatar_url}
//           className="round-img"
//           style={{ backgroundColor: 'red', width: '60px' }}
//         />
//         <h3>{login}</h3>
//         <div>
//           <a href={html_url} className="btn btn-dark btn-sm my-1">
//             More
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

// functional component appraoch
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        alt={login}
        src={avatar_url}
        className="round-img"
        style={{ backgroundColor: 'red', width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
