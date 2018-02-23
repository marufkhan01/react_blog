import React from 'react';

function Navbar(props){
  return(
      <div>
        <nav className="navbar navbar-inverse bg-inverse">
          <a className="navbar-brand" href="#">Navbar</a>
            { !props.user && <button className="btn btn-outline-info" onClick={props.signIn}> Login </button>
                }
            { props.user && <button className="btn btn-outline-info" onClick={props.signOut}> Sign out </button>
                }
        </nav>
      </div>
    )
}
export default Navbar;