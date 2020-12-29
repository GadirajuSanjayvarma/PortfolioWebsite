import React from "react";
import Header from "./Header";
import Home from './Home';
import '../css/certificates.css';





function RenderCertificates()
{
    return(
        <div  className="certificatebody">
          <a className="certificate"  target="_blank" href="https://www.coursera.org/account/accomplishments/specialization/certificate/L494W8234RCK">
          <img src="certificate1.png" alt="my picture" width="400px" height="300" />
          <h3>Coursera Web development Specialization</h3>
          </a>
          <a className="certificate"  target="_blank" href="https://www.coursera.org/account/accomplishments/specialization/certificate/HQ3X4P5GZ25Q">
          <img src="deepLearning.png" alt="my picture" width="400px" height="300" />
          <h3>Coursera Deep Learning Specialization</h3>
          </a>
          <a className="certificate"  target="_blank" href="https://www.coursera.org/account/accomplishments/verify/6SXM6FM54RN2">
          <img src="dataStructures.jpeg" alt="my picture" width="400px" height="300" />
          <h3>Coursera Data Structures Course</h3>
          </a>
          <a className="certificate"  target="_blank" href="https://www.coursera.org/account/accomplishments/verify/PWN3MTERMQ8P">
          <img src="Algorithms.jpeg" alt="my picture" width="400px" height="300" />
          <h3>Coursera Algorithms Course</h3>
          </a>
          <a className="certificate"  target="_blank" href="https://drive.google.com/file/d/1RUqG3Pgpvc73l90lHHVw0ihRQHEbApT2/view">
          <img src="eva.png" alt="my picture" width="400px" height="300" />
          <h3>The School of AI Certified Extensive Vision AI program   </h3>
          </a>
         
        
        </div>
    );



}




function Certificates() {
  return (

    <div>
       <Header/>
       <RenderCertificates />

    </div>
    
  );
}
export default Certificates;