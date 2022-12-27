const Nav = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">React | JS </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">Services</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
              </ul>
          </div>
      </div>
  </nav>
    )
};
export default Nav;

