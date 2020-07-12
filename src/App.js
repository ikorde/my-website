import React,{Component} from 'react';
import './fonts/DMMono-Regular.ttf';
import { FaGithub, FaEnvelope, FaLinkedin, FaSeedling, FaArrowDown,FaPlus } from 'react-icons/fa';
import './App.css';
import Sidebar from './components/sidebars';
import gpu from './files/gpu.jpg';
import graph_caltech from './files/graph_caltech.jpg';
import results_caltech from './files/results_caltech.jpg';
import results2_caltech from './files/results2_caltech.jpg';
import original_caltech from './files/original_caltech.jpg';
import resume from './files/Korde_Resume.pdf'

class App extends Component {
	componentDidMount() {
	    window.addEventListener("scroll", this.resizeHeaderOnScroll);
	}
	resizeHeaderOnScroll() {
		const distanceY = window.pageYOffset || document.documentElement.scrollTop,
		shrinkOn = 	20,
		headerEl = document.getElementById("App-header"),
		aboutEl = document.getElementById("about"),
		arrowEl = document.getElementById("bounce"),
		sidebarEl = document.getElementById("sidebar-bkgd");

		if (distanceY > shrinkOn) {
		  headerEl.classList.add("smaller");
		  aboutEl.classList.add("after");
		  arrowEl.classList.add("after");
		  sidebarEl.classList.add("after");
		} else {
		  headerEl.classList.remove("smaller");
		  aboutEl.classList.remove("after");
		  arrowEl.classList.remove("after");
		  sidebarEl.classList.remove("after");


		}
	}

	render() {
		return (
			    <div >
			    	<div class="homepage">
	      				<header id="App-header">
	      					<h2 id="name" >  ISHITA KORDE </h2>
	      					<h3 id="name" > <b> computer scienctist &  <br /> environmentalist </b> </h3>
	      					<h3 id="name" > <b>  </b> </h3>
	      					<h1 id="circle"> </h1>
	      					<div id="bounce"> <FaArrowDown size="1.7em" color="#8c8dcc" /> </div>
		        		</header>

		        		<div id="sidebar-bkgd">
		        			<div class="sidebar-line"> </div>
			       	 		<h3 class="sidebar"> <b> <a class="sidebar" href={resume} download> resume </a>  </b> </h3>
		       	 			<h3 class="sidebar"> <b> <a class="sidebar" href="https://github.com/ikorde"> <FaGithub size="1.4em"/> </a> </b> </h3>
			       	 		<h3 class="sidebar"> <b> <a class="sidebar" target="_blank" href="mailto:ikord001@ucr.edu"> <FaEnvelope size="1.3em"/> </a> </b> </h3>
			       	 		<h3 class="sidebar"> <b> <a class="sidebar" target="_blank" href="https://www.linkedin.com/in/ikorde/"> <FaLinkedin size="1.4em"/> </a> </b> </h3>
		       	 		</div>

		       	 		<p id= "about">
		       	 			<div id="HI"> <b> HI! </b> </div>
			       	 			<div class="list"> I'm a Computer Science graduate with an interest in developing technology to take care of planet earth. 
				       	 			<br /> <br />
				       	 			I work on projects that use software to advance science. This intersection, and 
				       	 			specifically, technology with an aim to reduce carbon emissions, is my cup of tea
			       	 			</div>
		       	 			<br />
		       	 			<br />
							<br />

		       	 			<div class="title"> <b> CURRENTLY </b> </div>
			       	 			<div class="list-currently"> <FaPlus size="0.7em" color="#8c8dcc" /> Computer Vision Nanodegree via Udacity</div>
			       	 			<div class="list-currently"> <FaPlus size="0.7em" color="#8c8dcc" /> Backyard gardening</div>
			       	 			<div class="list-currently"> <FaPlus size="0.7em" color="#8c8dcc" /> Working through a never ending reading list </div>
		       	 			<br />
							<br />
							<br />

		       	 			<div class="title"> <b> EXPERIENCE </b> </div>
			       	 			<div>
			       	 				<div class="experience-titles"> <a class="exp" target="_blank" href="https://github.com/ikorde/emission-absorption-lines" > <FaPlus size="0.7em" color="#8c8dcc" /> </a>
			       	 					<b> SOFTWARE DEVELOPER INTERN</b> @ <b style={{color:"orange"}}> <a target="_blank" href="https://www.ipac.caltech.edu/">Caltech IPAC</a> </b>  
			       	 				</div>
			       	 				<div class="project-desc">Automated methods for finding peaks in spectra. Successful classifications of three peaks shown below (top). Data
			       	 					extracted from running code over thousands of spectra show below (bottom). Such data from this code will aid in drawing conclusions about galaxy formation.  
									</div>
									<div class="images"> 
										<img src={results_caltech} alt="results graph" width="280px" height="210px" align="left"/>
										<img src={results2_caltech} alt="results graph" width="200px" height="210px" align="right" />
										<img src={graph_caltech} alt="results graph" width="270px" height="180px" />
										<br/>
									</div>
									<br />
								</div>
			       	 			<br />
			       	 			<br />
			       	 			<div>
				       	 			<div class="experience-titles">  <a class="exp" target="_blank" href="https://trs.jpl.nasa.gov/handle/2014/48612?show=full" ><FaPlus size="0.7em" color="#8c8dcc"/></a>

				       	 				<b> SOFTWARE OPTIMIZATION INTERN </b> @  <b> <a target="_blank" href="https://www.jpl.nasa.gov/missions/the-nancy-grace-roman-space-telescope/" >NASA JPL</a> </b> 
				       	 			</div>
				       	 			<div class="project-desc">
				       	 				Optimized "FALCO" code for the WFIRST (now Nancy Grace Roman) Telescope using a GPGPU. Multithreaded operations using dynamic parallelism as depicted below. 
				       	 				This code allows the WFIRST team at JPL run large test operations optimally.
				       	 			</div>
				       	 			<div class="images">
				       	 				<img src={gpu} alt="gpu table" width="400px" height="170px"  />
				       	 				<br />
				       	 				
				       	 			</div> 
				       	 		</div>
			       	 			<br/>
			       	 			<br />
			       	 			<div class="experience-titles">  <FaPlus size="0.7em" color="#8c8dcc"/> 
			       	 				<b> RESEARCHER </b> @ <b> <a target="_blank" href="http://rlair.cs.ucr.edu/"> Riverside Lab for AI Research </a></b></div>
			       	 				<div class="project-desc"> Researched and tested methods to better fit models for detecting DLAs in quasar spectra, developed visuals to compare results and prepared code to run tests on high performance clusters. 
			       	 				</div>
			       	 				<div class="project-desc" > Leah Fauber, Ming-Feng Ho, Simeon Bird, Christian R. Shelton1, Roman Garnett, Ishita Korde: <a target="_blank" href="https://arxiv.org/abs/2006.07343" > 
			       	 				  <i> Automated Measurement of Quasar Redshift with a Gaussian Process </i> </a> </div>
			       	 			<br/>
			       	 			<br />
			       	 			<div class="experience-titles">  <FaPlus size="0.7em" color="#8c8dcc"/>  
			       	 				<b> RESEARCHER </b> @ <b> UCR Handwriting Recognition Lab </b> </div>

			       	 				<div class="project-desc">
			       	 					Labeled and classified data to train recognition code. Developed visuals and tools using Visual Studio and Tensorflow. </div>
			       	 			<br />
			       	 			<br />
			       	 			<div class="experience-titles">  <FaPlus size="0.7em" color="#8c8dcc"/>  
			       	 				<b> TUTOR </b> @ <b> <a target="_blank" href="https://codeconnects.org/about.html">CodeConnects </a> </b> </div>

			       	 				<div class="project-desc">
			       	 					Taught python and coding concepts to middle school students. Created study material, personalized projects and hosted one-on-one study sessions.  
			       	 		</div> 
			       	 		<br />
							<br />
							<br />

							
			       	 		<div class="title"> <b> PROJECTS </b> </div>
			       	 			<div class="project-titles"> <a target="_blank" href="https://github.com/ikorde/ray-tracer"> <b> 3D Graphics Ray Tracer </b></a> </div>
			       	 			<div class="project-titles"> <a target="_blank" href="https://github.com/ikorde/rasterization"> <b> 3D Graphics Rasterization Pipeline</b></a> </div>
			       	 			<div class="project-titles">  <a target="_blank" href="https://github.com/ikorde/EmbeddedSystems/tree/master/final_project/final_project"><b> Quick Maths </b></a></div>
			       	 			<div class="project-titles"> <a target="_blank" href="https://github.com/ikorde/nutrition-tracker"> <b> Nutrition Reccomender </b></a></div>
			       	 		<br />
							<br />
							<br />

			       	 		<div class="title"> <b> MORE ABOUT ME... </b> </div>
			       	 			<div class="education"> <b> <i> For Fun Stuff... </i> </b> </div>
			       	 				
			       	 				<div class="project-desc">
			       	 					Indoor/outdoor rock climbing, yoga, collecting jigsaw puzzles, gardening
			       	 				</div>
								<div class="education"> <b> <i> Green Stuff... </i> </b></div>
			       	 				
			       	 				<div class="project-desc"> Check out <a target="_blank" href="https://www.notion.so/make-earth-cool-again-d337a266629e4a8fb57caa2b436b01ec"> this page</a> where I've shared tried and tested methods to reduce and reuse!
			       	 				</div>
			       	 		<br />
							<br />
							<br />
							<div class="connect">

								<a class="contact-info" href={resume} download>  <b> DOWNLOAD MY RESUME</b> </a>
								<br />
								<br />
								Get in touch...
								<a class="contact-info" target="_blank" href="mailto:ikord001@ucr.edu"><b>SHOOT ME AN EMAIL!</b> </a>
							</div>
		       	 		</p>

		       	 			

	       	 		</div>
	       	 		<div class="footer-text"> <i> <b> created by ishita korde </b></i>  </div>
      			</div>
			
		)
	}
}

export default App;
