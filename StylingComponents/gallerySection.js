import React from 'react';
import ReactDOM from 'react-dom';

class gallerySection extends React.Component{
	render(){
		return(
				<div>
						<section>
							<div className="container-fluid text-center ">
								<h2 className="pb-3">Gallery</h2>
								<hr className="w-25 pb-5" />

								<div className="container">
								  <div className="row mb-4">
								    <div className="col">
								      <button onClick=""><img className="card-img-top w-100 " height="200px" src="p7.jpg" /></button>
								    </div>
								    <div className="col">
								      <img className="card-img-top w-100 " height="200px" src="p7.jpg" />
								    </div>
								    <div className="col">
								      <img className="card-img-top w-100 " height="200px" src="p7.jpg" />
								    </div>
								  </div>
								  <div className="row mb-4">
								    <div className="col">
								      <img className="card-img-top w-100 " height="200px" src="p7.jpg" />
								    </div>
								    <div className="col">
								      <img className="card-img-top w-100 " height="200px" src="p7.jpg" />
								    </div>
								    <div className="col">
								      <img className="card-img-top w-100 " height="200px" src="p7.jpg" />
								    </div>
								  </div>
								  <div className="row mb-4">
								    <div className="col">
								      <img className="card-img-top w-100 " height="200px" src="p7.jpg" />
								    </div>
								    <div className="col">
								      <img className="card-img-top w-100 " height="200px" src="p7.jpg" />
								    </div>
								    <div className="col">
								      <img className="card-img-top w-100 " height="200px" src="p7.jpg" />
								    </div>
								  </div>
								</div>
							</div>
						</section>
				</div>
		);
	}
}
export default gallerySection;