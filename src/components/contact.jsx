import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles_components/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5fwzb4a', // Remplacez par votre service ID
      'template_v4wct8f', // Remplacez par votre template ID
      e.target, // Passer l'élément formulaire ici
      '2Oiac8AsBdVckGuJ_' // Remplacez par votre user ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message envoyé avec succès!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Une erreur est survenue, veuillez réessayer.');
      });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div id="formulaire-contact">
      <div id="titre-contact">
        <h2>Contactez-Moi</h2>
      </div>
      <div id="formulaire-infos">
        <div id="formulaire">
          <form onSubmit={handleSubmit}>
            <div className="lesinput">
              <label></label>
              <input
                type="text"
                name="name"
                placeholder="Nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="lesinput">
              <label></label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="lesinput">
              <label></label>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
        </div>
       
        <button className="send-button" id="submit" type="submit" value="SEND">
        <div className="alt-send-button">
        <i className="bi bi-send-fill"></i><span className="send-text">ENVOYER</span>
        </div>
      
      </button>

      </form>
    </div>
    <div id="infos">
    <ul className="contact-list">
          <li className="list-item"><i className="bi bi-geo-alt-fill"><span className="contact-text place" id="localisation">Sainte-Rose, Guadeloupe</span></i></li>
          
          <li className="list-item"><i className="bi bi-telephone-fill"><span className="contact-text phone"><a href="tel:0690967763" title="Give me a call">(+590) 690-967-763</a></span></i></li>
          
          <li className="list-item"><i className="bi bi-envelope"><span className="contact-text gmail"><a href="mailto:clementroland52@gmail.com" title="Send me an email">clementroland52@gmail.com</a></span></i></li>
          
        </ul>

        <hr/>
        <ul className="social-media-list">
  <li>
    <a href="https://github.com/clem971" target="_blank" className="contact-icon">
      <i className="bi bi-github"></i>
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/roland-971" target="_blank" className="contact-icon">
      <i className="bi bi-linkedin"></i>
    </a>
  </li>
  <li>
    <div>
        <a href="https://www.instagram.com/cl.rld" target="_blank" className="contact-icon">
      <i className="bi bi-instagram"> </i>
    </a>
    </div>
    
  </li>       
</ul>



        <hr/>

        <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      
     </div>
    
    </div>
    </div>
  
  );
}

export default Contact;


