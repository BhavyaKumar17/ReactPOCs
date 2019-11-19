import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComp from './StylingComponents/headerComp.js';
import CarouselSlide from './StylingComponents/carouselSlide';
import AboutSection from './StylingComponents/aboutSection';
import ServiceSection from './StylingComponents/serviceSection';
import ContactSection from './StylingComponents/contactSection';
import GallerySection from './StylingComponents/gallerySection';
import JoinSection from './StylingComponents/joinSection';


const App = () => {
    return(
        <div>
        	<HeaderComp />
			<CarouselSlide />
			<AboutSection />
			<ServiceSection />
			<ContactSection />
			<GallerySection />
			<JoinSection />
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));
