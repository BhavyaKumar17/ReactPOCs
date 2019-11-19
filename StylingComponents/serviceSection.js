import React from 'react';
import ReactDOM from 'react-dom';

class serviceSection extends React.Component{
	render(){
		return(
				<div>
						<section>
									<div className="container-fluid text-center ">
										<h2 className="pb-3">Services</h2>
										<hr className="w-25 pb-5" />

												<div className="row ml-4 mr-4 mb-5">
														<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
															<div className="card w-100 ">
															  <img className="card-img-top w-100 " height="300px" src="p5.jpg" alt="Card image cap" />
															  <div className="card-body">
															    <h5 className="card-title">Panda1</h5>
															    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
															    <a href="#" className="btn btn-primary">Know more..</a>
															  </div>
															</div>
														</div>


														<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
															<div className="card w-100">
															  <img className="card-img-top w-100 " height="300px" src="p6.jpg" alt="Card image cap" />
															  <div className="card-body">
															    <h5 className="card-title">Panda2</h5>
															    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
															    <a href="#" className="btn btn-primary">Know more..</a>
															  </div>
															</div>
														</div>


														<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
															<div className="card w-100" >
															  <img className="card-img-top w-100 " height="300px" src="p7.jpg" alt="Card image cap" />
															  <div className="card-body">
															    <h5 className="card-title">Panda3</h5>
															    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
															    <a href="#" className="btn btn-primary">Know more..</a>
															  </div>
															</div>
														</div>
												</div>
									</div>
						</section>

				</div>
		);
	}
}
export default serviceSection;