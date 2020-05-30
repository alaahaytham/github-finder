import React from 'react';
import PropTypes from 'prop-types';

// Class-based apprach

// export class Navbar extends Component {
//   static defaultProps = {
//     title: 'Github Finder',
//     icon: 'fab fa-github',
//   };

//   PropTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired,
//   };

//   render() {
//     return (
//       <div>
//         <nav className="navbar bg-primary">
//           <h1>
//             <i className={this.props.icon}></i> {this.props.title}
//           </h1>
//         </nav>
//       </div>
//     );
//   }
// }

// Functional approach

const Navbar = ({ icon, title }) => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <h1>
          <i className={icon}></i> {title}
        </h1>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
