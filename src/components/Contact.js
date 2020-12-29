import React from "react";
import Header from "./Header";
import '../css/home.css';
function Home() {
  return (

    <div>
        <div className="body">
            <div  className="image">
            <img src="test.png" alt="my picture" width="500" height="300" />
            </div>
            <div class="box">
                <div className="text">
                    <p>
                    <h3>EMAIL: sanjayvarma112000@gmail.com</h3>

                    </p>
                    <p>
                    <h3>LinkedIn: <a href="https://www.linkedin.com/in/gadiraju-sanjay-varma-91ab48199/">sanjayvarma</a></h3>
                       
                    </p>
                    <p>
                    <h3>Github: <a href="https://github.com/GadirajuSanjayvarma">sanjayvarma</a></h3>
                       
                    </p>
                </div>
            </div>
       </div>
    </div>
    
  );
}

function Contact() {
  return (

    <div>
       <Header/>
       <Home />

    </div>
    
  );
}
export default Contact;