import React from 'react';
import ReactDOM from 'react-dom';

class aboutSection extends React.Component{
	render(){
		return(
				<div>
					<section>
						<div className="container-fluid text-center pt-5">
							<h2 className="pb-3 text-capitalize">about</h2>
							<hr className="w-25 pb-5" />

							<div className="row mb-5 ml-4 mr-4">
								<div className="col-lg-6 col-md-6 col-xs-6">
									<img src="p7.jpg" alt="p7" className="image-fluid" height="230" width="100%" />
								</div>
						  		<div className="col-lg-6 col-md-6 col-xs-6" >
					  				<h3 className="text-center text-capitalize ">Who am I</h3>
					  				<hr className="w-100" />
					  				<p>In the Valley of Peace, a land in ancient China inhabited by anthropomorphic animals, Po Ping the giant panda is a kung fu fanatic who idolizes the Furious Five – Tigress, Monkey, Mantis, Viper, and Crane – a quintet of kung fu masters trained by Master Shifu, the red panda.</p>
					  				<button type="button" className="btn btn-primary text-center">Know more..</button>
					  			</div>
						  	</div>
						</div>
					</section>
	       		</div>
		);
	}
}
export default aboutSection;