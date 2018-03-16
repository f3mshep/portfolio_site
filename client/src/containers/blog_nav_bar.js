import React from "react";
import { Link } from "react-router-dom";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navClass: "navbar navbar-expand-lg navbar-shrink" };
  }

  // toggleNavbar() {
  //   this.setState({
  //     navClass:
  //       this.state.navClass === "navbar-dark bg-dark"
  //         ? "navbar navbar-expand-lg navbar-shrink fixed-top"
  //         : "navbar-dark bg-dark"
  //   });
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.isSticky !== nextProps.isSticky) {
  //     this.toggleNavbar();
  //   }
  // }

  render() {
    return <div>
        <nav className={this.state.navClass} id="mainNav">
          <div className="container">
            <Link className="navbar-brand nav-link" to="/">
              alexandra wright
            </Link>
            <div>
              <ul className="navbar-nav  ml-auto">
                <li className="nav-item">
                  <Link style={{ fontFamily: "Open Sans" }} className="nav-link" to="/posts">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{ fontFamily: "Open Sans" }} className="nav-link" to="/">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>;
  }
}

export default NavBar;
