import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import {Link} from 'react-router';


export const NavBar = () => {
  var handleLogout = () => {
    console.log('hangleLogout has been invoked.');
    $.ajax({
      type: 'POST',
      url: '/logout',
      success: function(data) {
        window.location = data.redirect;
        console.log('Post for logout completed successfully.')
      }
    });
    //removes the username from localstorage
    localStorage.removeItem('username');
    console.log('localStorage username', localStorage.username);
  }

  return (
    <Menu color='blue' inverted>
      <Link to="/">
        <Menu.Item name='home'> Home </Menu.Item>
      </Link>

      <Link to="/leaderboard">
        <Menu.Item name='leaderboard'> Leaderboard </Menu.Item>
      </Link>

      <Link to="/scramblegame">
        <Menu.Item name='games'> Games </Menu.Item>
      </Link>

      <Menu.Menu position='right'>
        <Link to="/login">
          <Menu.Item name='login'> Login </Menu.Item>
        </Link>

        <Link to="/" onClick={handleLogout}>
          <Menu.Item name='logout'> Logout </Menu.Item>
        </Link>
      </Menu.Menu>
    </Menu>
  )
}

// export const NavBar = () => {

//   var handleLogout = () => {
//     console.log('hangleLogout has been invoked.');
//     $.ajax({
//       type: 'POST',
//       url: '/logout',
//       success: function(data) {
//         window.location = data.redirect;
//         console.log('Post for logout completed successfully.')
//       }
//     });
//     //removes the username from localstorage
//     localStorage.removeItem('username');
//     console.log('localStorage username', localStorage.username);
//   }

//   return (
//     <nav className="navbar navbar-inverse">
//       <div className="container-fluid">
//         <div className="navbar-header">
//           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
//             <span className="sr-only">Toggle navigation</span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//           </button>
//           <Link className="navbar-brand" to="/">Home</Link>
//         </div>
//         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//           <ul className="nav navbar-nav">
//             <li><Link to="/leaderboard">Leaderboard</Link></li>
//             { localStorage.username && <li><Link to="/profile">Profile</Link></li> }
//             <li className="dropdown">
//               <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Games <span className="caret"></span></a>
//               <ul className="dropdown-menu">
//                 <li><Link to="/memorygame">Memory Game</Link></li>
//                 <li role="separator" className="divider"></li>
//                 <li><Link to="/scramblegame">Scramble Game</Link></li>
//               </ul>
//             </li>
//           </ul>
//           <ul className="nav navbar-nav navbar-right">
//             { !localStorage.username && <li><Link to="/login">Login</Link></li> }
//             { localStorage.username && <li><Link to="/" onClick={handleLogout}>Logout</Link></li> }
//             { !localStorage.username && <li><Link to="/signup">Signup</Link></li> }
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

