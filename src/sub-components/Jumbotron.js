import React from 'react'
import CountDown from './CountDown';
import backgroundImage from '../images/BG-Img.jpeg'


const Jumbotron=({title,desc,date})=>{
    return (<><nav className="fh5co-nav" role="navigation">
		<div className="container">
			<div className="row">
				<div className="col-xs-2">
					<div id="fh5co-logo"><a href="index.html">Wedding<strong>.</strong></a></div>
				</div>
				<div className="col-xs-10 text-right menu-1">
					<ul>
						
					</ul>
				</div>
			</div>
			
		</div>
	</nav>

	<header id="fh5co-header" className="fh5co-cover" role="banner" style={{backgroundImage:`url(${backgroundImage})`,backgroundAttachment: 'fixed',backgroundPosition: 'top center'}}>
		<div className="overlay"></div>
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2 text-center">
					<div className="display-t">
						<div className="display-tc animate-box" data-animate-effect="fadeIn">
							<h1>{title}</h1>
							<h2>{desc}</h2>
							<CountDown date={date}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header></>);
}

export default Jumbotron;