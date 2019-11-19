import React from 'react';
import ReactDOM from 'react-dom';

class carouselSlide extends React.Component{
	render(){
		return(
				<div>
					<section>
						<div id="demo" className="carousel slide" data-ride="carousel ">
						  <ul className="carousel-indicators">
						    <li data-target="#demo" data-slide-to="0" className="active"></li>
						    <li data-target="#demo" data-slide-to="1"></li>
						    <li data-target="#demo" data-slide-to="2"></li>
						  </ul>
						  <div className="carousel-inner">
						    <div className="carousel-item active">
						      <img src="p5.jpg" alt="p1" width="100%" height="500px" />
						      <div className="carousel-caption">
						        <h3>Hari</h3>
						        <p>We had such a great time in KC!</p>
						      </div>   
						    </div>
						    <div className="carousel-item">
						      <img src="p6.jpg" alt="p2" width="100%" height="500px" />
						      <div className="carousel-caption">
						        <h3>Pada</h3>
						        <p>Thank you, Pada!</p>
						      </div>   
						    </div>
						    <div className="carousel-item">
						      <img src="p5.jpg" alt="p3" width="100%" height="500px" />
						      <div className="carousel-caption">
						        <h3>KC</h3>
						        <p>We love KC!</p>
						      </div>   
						    </div>
						  </div>
						  <a className="carousel-control-prev" href="#demo" data-slide="prev">
						    <span className="carousel-control-prev-icon"></span>
						  </a>
						  <a className="carousel-control-next" href="#demo" data-slide="next">
						    <span className="carousel-control-next-icon"></span>
						  </a>
						</div>
					</section>
				</div>
		);
	}
}
export default carouselSlide;