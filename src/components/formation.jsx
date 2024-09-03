import React from "react";
import'./styles_components/formation.css';
function Formation(){
return(
    <div id="partie-formation">
    <h2>FORMATION</h2>
  <br/><br/><br/>
    <div className="mes-formation">
        <div className="text-formation">
            <h3>2023-2024</h3>
      <h4>Diplome Développeur Web & Web Mobile</h4>
      <span>Formation en continue</span>
        </div>
    </div>

   <div className="trait"></div>

    <div className="mes-formation">
        <div className="text-formation">
            <h3>2019</h3>
      <h4>Licence Informatique</h4>
      <span>3eme année de licence en informatique</span>
        </div>
    </div>

    <div className="trait"></div>

    <div className="mes-formation">
        <div className="text-formation">
            <h3>2017-2019</h3>
      <h4>BAC+2</h4>
      <span>BTS SNIR Système Numérique Informatique et Réseaux</span>
        </div>
    </div>

    <div className="trait"></div>
    <div className="mes-formation">
        <div className="text-formation">
            <h3>2017</h3>
      <h4>BAC</h4>
      <span>BAC STI2D avec mention</span>
        </div>
    </div>

        <div id="experience">
            <h2>COMPETENCES</h2>
            <div id="bloc-experience">
                    <div className="bloc" id="bloc1"></div>
                    <div className="bloc" id="bloc2"></div>
                    <div className="bloc" id="bloc3"></div>
                    <div className="bloc" id="bloc4"></div>
                    <div className="bloc" id="bloc5"></div>
                    <div className="bloc" id="bloc6"></div>
                    <div className="bloc" id="bloc7"></div>
                    <div className="bloc" id="bloc8"></div>
                    <div className="bloc" id="bloc9"></div>
            </div>
        </div>
    </div>


);
}
export default Formation;