import React, { useEffect } from "react";
import './styles_components/Main.css';

const TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        if (this.loopNum === this.toRotate.length - 1) {
            // Remove the cursor at the end of the animation
            this.el.classList.remove('typewrite-cursor');
            return;
        } else {
            delta = this.period;
            this.isDeleting = true;
        }
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(() => {
        this.tick();
    }, delta);
};

function Main() {
    useEffect(() => {
        const elements = document.getElementsByClassName('typewrite');
        for (let i = 0; i < elements.length; i++) {
            const toRotate = elements[i].getAttribute('data-type');
            const period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
                elements[i].classList.add('typewrite-cursor');
            }
        }
        // INJECT CSS
        const css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite-cursor > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);

        // Cleanup function
        return () => {
            document.body.removeChild(css);
        };
    }, []);

    return (
        <div id="main">
            <span id="Hello">Hello, je suis </span>
            <span id="presentation"><em><b>Clément Roland</b></em></span>

            <a id="metier" href="#" className="typewrite" data-period="2000" data-type='[ "Site Vitrine", "Application Web", "/*Développeur Web*/" ]'>
                <span className="wrap"></span>
            </a>
        </div>
    );
}

export default Main;
