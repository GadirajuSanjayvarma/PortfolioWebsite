import React,{useState} from "react";
import Header from "./Header";
import Home from './Home';
import '../css/projects.css';

import '../css/certificates.css';

function RenderWeb()
{
 
    return(
        <div  className="certificatebody">
          <a className="certificate"  target="_blank" href="https://github.com/GadirajuSanjayvarma/MovieReview">
          <img src="./websites/website.png" alt="my picture" width="400px" height="300" />
          <p>A Movie Review Website that is Built on using React,redux,html and css.It lets you search for movies and serach for good movies which are in IDMB marketplace.
            I made it look good on mobile Phones too which is an added advantage.
            The website is Live at:
            <br />
            <a className="external" target="_blank" href="http://moviereview000.herokuapp.com/">http://moviereview000.herokuapp.com/</a>
          </p>
          </a>
        
         
        
        </div>
    );



}




function RenderMl()
{
  return(
  
      <div  className="certificatebody">
        <a className="certificate"  target="_blank" href="https://github.com/GadirajuSanjayvarma/PytorchDistributed">
        <img src="./DeepLearning/pytorch.png" alt="my picture" width="400px" height="300" />
        <p>Developed a Library in sockets which enables to use Distributed Parallel Computation on Multiple GPUS and CPUs at same time with my friend.
        Entire Weights and Progress is Synchronized across all clients using multiple Socket Communications .
        </p>
        </a>

        <a className="certificate"  target="_blank" href="https://github.com/GadirajuSanjayvarma/LIcensePlateDetection">
        <img src="./DeepLearning/license.jpg" alt="my picture" width="400px" height="300" />
        <p>
        Used an Pre-Trained MobileNet Model from TensorFlowHub and extracts License Plate Detection Results 
        and applying Tesseract OCR on the image to get License Plate Number in Text format as part of Smart
        India Hackathon with my team

        </p>
        </a>

        
        <a className="certificate"  target="_blank" href="https://github.com/GadirajuSanjayvarma/GarbageDetection">
        <img src="./DeepLearning/GarbageDetection.png" alt="my picture" width="400px" height="300" />
        <p>
        Developed an Deep Learning Model that detects whether an item is Garbage or not as part of smart India Hackathon.
        It uses an Deep Neural Network approach and Acheived IOU mapping Accuracy of 59%.
        </p>
        </a>
        

            
        <a className="certificate"  target="_blank" href="https://github.com/GadirajuSanjayvarma/DenseDepth-and-Mask-Prediction">
        <img src="./DeepLearning/mask.jpg" alt="my picture" width="400px" height="300" />
        <img src="./DeepLearning/depth.jpg" alt="my picture" width="400px" height="300" />
        <p>
         Developed an Dense Depth and Mask Prediction System for cows in Deep Learning which obtained Mask and depth 
         of foreground objects given it's images.It finally gave a loss of 0.01 and Pixel Wise Accuracy of 
         40%. 
        </p>
        </a>

        
        <a className="certificate"  target="_blank" href="https://github.com/GadirajuSanjayvarma/TinyImageNetClassification">
        <img src="./DeepLearning/imageClassification1.jpg" alt="my picture" width="400px" height="200" />
        <p>
        Developed an Image Classification System using Pytorch on TinyImageNet.I used Resnet18 Architecture for good results.
        TinyImageNet has 200 classes and It is best standard for Classification systems.We Obtained an Train Accuracy of 
        60% and test accuracy of 45% during Developing.
       </p>
        </a>




               
        <a className="certificate"  target="_blank" href="https://github.com/GadirajuSanjayvarma/ImageCaptioning">
        <img src="./DeepLearning/caption.png" alt="my picture" width="400px" height="300" />
        <p>
        Developed an Image Captioning System on Flickr Dataset using Long Short Term Neural Networks(LSTM)
        in pytorch.Giving an Image it will tell you what that image contains.It Acheived good performance and
        Performed better Generality on all images.
        </p>
        </a>


        <a className="certificate"  target="_blank" href="https://github.com/GadirajuSanjayvarma/Movie-Sentiment-Classification">
        <img src="./DeepLearning/review.png" alt="my picture" width="400px" height="200" />
        <p>
        Developed an Text Sentiment Classification System on MovieReview Dataset using Long Short Term Neural Networks(LSTM)
        in pytorch.Giving an Text it will tell you whether the text is positive or negative.It Acheived good performance and Obtained loss around 
        0.007.
        </p>
        </a>


        
        <a className="certificate"  target="_blank" href="https://github.com/GadirajuSanjayvarma/Text-Generation">
        <img src="./DeepLearning/textGeneration.png" alt="my picture" width="400px" height="200" />
        <p>
        Developed an Text generation System using Pytorch Long Short Term Neural Networks(LSTM) on ShakeSpear Dataset.We have used 
        deep learning approach so it can find some complex relationship between ShakeSpear writings and display it.it performed good.
        </p>
        </a>



        
      
      </div>
  );

}

function RenderGames()
{
  return(
  
      <div  className="certificatebody">
      None at the time
       
      
      </div>
  );
 
}





function RenderProjects()
{
  const [content,setContent]=useState('web');
  return(
    <div className="body">
      <div  className="buttons">
      <a  onClick={()=>{setContent("web")}}>Web Development Projects</a>
      <a onClick={()=>{setContent("ml")}}>Deep Learning Projects</a>
      <a onClick={()=>{setContent("games")}}>Game Projects</a>
      </div>
      <div className="content">
      {(() => {
        switch (content) {
          case "web":   return <RenderWeb />;
          case "ml": return <RenderMl />;
          case "games":  return <RenderGames />;
        }
      })()}
      </div>
      
      </div>
  );




}




function Projects() {
  return (

    <div>
       <Header/>
       <RenderProjects />

    </div>
    
  );
}
export default Projects;