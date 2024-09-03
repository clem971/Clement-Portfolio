import React from "react";
import  './styles_components/services.css';

function Services(){
    return(
                <div id="Service">
                    <div id="titre-service">
                        <h2>Services</h2>
                    </div>
                    <div id="rectangle-services">
                        <div className="service">
                            <div id="cercle-desktop"></div>
                            <p className="text-service">Réaliser un site vitrine ainsi que les application web responsive.</p>
                        </div>
                        <div className="service">
                        <div id="cercle-mobile"></div>
                        <p className="text-service">Réaliser, modifier une application mobile natif et multiplatform.</p>
                        </div>
                    </div>
                        
                </div>
    );
}
export default Services;