import React from 'react';
import ReactDOM from 'react-dom';

class contactSection extends React.Component{
	render(){
		return(
				<div>
					<section>
						<div className="jumbotron bg-primary text-white text-uppercase text-center w-100 h-25">
							<h2>+91 9412828789</h2>
							<button className="btn-warning">Contact us</button>
						</div>
					</section>
				</div>
		);
	}
}
export default contactSection;