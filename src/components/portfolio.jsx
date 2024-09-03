import React from "react";
import './styles_components/portfolio.css';
function Portfolio(){
return(
    <div id="PartiePortfolio">
            <h2 id="TitlePortfolio">Portfolio</h2>
                <br/> <br/> <br/> <br/> <br/>
            <div className="ContenuePortfolio">
                <div className="rectangle-gauche">
                    <div id="imgPampa"></div>  
                </div>
                <div id="Projet1">
                    <h2>Projet1: Maison Pampa</h2>
                    <p>Maison Pampa est un site web fictif que j'ai créé en début de formation.<br/>
                        Développé avec : HTML et CSS.<br/>
                        Catégorie : Site Vitrine Responsive.
                    </p>
                    </div>
            </div>

            <div className="ContenuePortfolio">
                <div id="Projet2">
                    <h2>Projet2: CHI FOU MI</h2>
                    <p> CHI FOU MI est un site web que j'ai créé durant ma formation.<br/>
                    Développé avec : JavaScript<br/>
                    Catégorie : Application Web.
                    </p>
                </div>
                <div className="rectangle-droite">
                    <div id="imgCHI"></div>  
                </div>
            </div>

            <div className="ContenuePortfolio">
            <div className="rectangle-gauche">
                    <div id="img-projet"></div>  
                </div>
                <div id="Projet3">
                <h2>Projet3: M-Player</h2>
                    <p> M-player est un site web que j'ai créé pour mon projet de fin d'étude.<br/>
                    Développé avec : HTML, CSS, Botstrap, JavaScript, PHP<br/>
                    Catégorie : Application Web responsive.
                    </p>
                </div>
            </div>

            <div className="ContenuePortfolio">
            <div id="Projet4">
                <h2>Projet4: Portfolio</h2>
                    <p> Le portfolio est un site web que j'ai créé afin de débuter ma carrière professionnelle.<br/>
                    Développé avec : React JS<br/>
                    Catégorie : Site vitrine responsive.
                    </p>
                </div>
                <div className="rectangle-droite">
                    <div id="imgPortfolio"></div>  
                </div>
            </div>
            
    </div>
);
}
export default Portfolio;