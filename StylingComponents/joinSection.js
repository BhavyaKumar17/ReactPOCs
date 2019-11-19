import React from 'react';
import ReactDOM from 'react-dom';

class joinSection extends React.Component{
	render(){
		return(
				<div>
					<section>
						<form >
						  <div className="container">
						 
							<h2 className="pb-3">Contact Us</h2>
							<hr className="w-25 pb-5" />
						 
							  <div className="form-group pb-3">
							    <label for="exampleInputName">Name</label>
							    <input type="text" className="form-control w-75" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter name" />
							  </div>
							  <div className="form-group pb-3">
							    <label for="exampleInputEmail1">Email address</label>
							    <input type="email" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
							  </div>
							  <div className="form-group pb-3">
							    <label for="exampleInputMobile">Mobile</label>
							    <input type="text" className="form-control w-75" id="exampleInputMobile" placeholder="Enter Mobile Number" />
							  </div>
							  <div className="form-check pb-3">
							    <input type="checkbox" classNameclassName="form-check-input" id="exampleCheck1" />
							    <label className="form-check-label" for="exampleCheck1">Check me out</label>
							  </div>
							  <button type="submit" className="btn btn-primary">Submit</button>
						  </div>
						</form>
					</section>
				</div>
		);
	}
}
export default joinSection;