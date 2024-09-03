import React from "react";
import './styles_components/cv.css';
import Curriculum from'./CV-Clement.pdf';
function CV(){
    return(
        <div id="CV">

           <button type="button" id="glow-on-hover"><a href={Curriculum} download="CV-Clement.pdf" target="_blank" id="bouton-cv" > Télécharger mon Curriculum Vitae </a></button>
            
        </div>
    );
}
export default CV;
