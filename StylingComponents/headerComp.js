import React from 'react';
import ReactDOM from 'react-dom';

class headerComp extends React.Component{
	render(){
		return(
					<div>
					     <section>
							<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
							  <a className="navbar-brand" href="#">Panda</a>
							  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							    <span className="navbar-toggler-icon"></span>
							  </button>

							  <div className="collapse navbar-collapse" id="navbarSupportedContent">
							    <ul className="navbar-nav ml-auto ">
							      <li className="nav-item active">
							        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
							      </li>
							      <li className="nav-item">
							        <a className="nav-link" href="#">Link</a>
							      </li>
							      <li className="nav-item dropdown">
							        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							          Dropdown
							        </a>
							        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
							          <a className="dropdown-item" href="#">Action</a>
							          <a className="dropdown-item" href="#">Another action</a>
							          <div className="dropdown-divider"></div>
							          <a className="dropdown-item" href="#">Something else here</a>
							        </div>
							      </li>
							      <li className="nav-item">
							        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
							      </li>
							    </ul>
							    <form className="form-inline my-2 my-lg-0">
							      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
							      </input>
							      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
							    </form>
							  </div>
							</nav>
						</section>
		       		</div>
		);
	}
}
export default headerComp;