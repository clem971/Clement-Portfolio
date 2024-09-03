import React from "react";
import'./styles_components/aboutMe.css';

function AboutMe(){

    return(
        <div id="about">
            <div id="photo-cadre">
                <div id="PhotoProfile"></div>
                <div id="cadre"></div>

            </div>
            <div id="text-presentation">
                <h2>À propos de moi 👨🏾‍💻</h2>
                <p>Je me présente, Clément Roland, âgé de 25 ans. Depuis mon entrée au collège, je nourris une passion profonde pour le domaine de l’informatique. Après avoir obtenu un BAC STI2D, suivi d’un BAC+2 en Systèmes Numériques, Informatique & Réseaux (SNIR), j’ai choisi de me spécialiser dans le développement web et web mobile, guidé par mon esprit créatif.<br/><br/>
Au fil de mon parcours, j'ai acquis et perfectionné une maîtrise avancée de divers langages et technologies <em>full stack</em>, tels que HTML, CSS, JavaScript, React, React Native, et PHP. Ces compétences me permettent de concevoir et de réaliser des solutions innovantes et performantes, répondant aux besoins spécifiques de mes clients.
</p>
                
            </div>
        </div>
    );
}
export default AboutMe;