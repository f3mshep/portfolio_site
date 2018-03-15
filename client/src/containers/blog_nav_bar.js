import React from "react";
import { Link } from "react-router-dom";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navClass: "navbar navbar-expand-lg navbar-dark bg-dark" };
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
    return (
      <div>
        <nav className={this.state.navClass} id="mainNav">
          <div className="container">
            <Link
              activeClass="not-active"
              className="navbar-brand nav-link"
              to="/"
            >
              alexandra wright
            </Link>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/posts">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
