"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function Theme() {
    const [isLightTheme, setIsLightTheme] = useState(false);

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);

        const body = document.body;
        const textElements = document.querySelectorAll('.text-color') as NodeListOf<HTMLElement>;
        const iconElements = document.querySelectorAll('.content-icons') as NodeListOf<HTMLElement>;
        const iconFooter = document.querySelectorAll('.icon') as NodeListOf<HTMLElement>;

        if (isLightTheme) {
            body.classList.remove('light-theme');
            body.classList.add('dardk-theme');
            textElements.forEach(element => {
                element.style.background = '-webkit-linear-gradient(white, #38495a)';
                element.style.webkitBackgroundClip = 'text';
                element.style.webkitTextFillColor = 'transparent';
                element.style.backgroundClip = 'text';
                element.style.color = 'transparent';
            });

            iconElements.forEach(element => {
                element.style.color = 'white';
                element.style.textAlign = 'center';
                element.style.margin = '20px';
                element.style.padding = '20px';
            });

            iconFooter.forEach(element => {
                element.style.color = 'white';
                element.style.marginRight = '10px';
                element.style.width = '25px'
            })

        } else {
            body.classList.remove('dardk-theme')
            body.classList.add('light-theme');
            textElements.forEach(element => {
                element.style.background = '-webkit-linear-gradient(#000000, #000000)';
                element.style.webkitBackgroundClip = 'text';
                element.style.webkitTextFillColor = 'transparent';
                element.style.backgroundClip = 'text';
                element.style.color = 'transparent';
            });

            iconElements.forEach(element => {
                element.style.color = 'black';
                element.style.textAlign = 'center';
                element.style.margin = '20px';
                element.style.padding = '20px';
            });

            iconFooter.forEach(element => {
                element.style.color = 'black';
                element.style.marginRight = '10px';
                element.style.width = '25px'
            })

        }
    };

    const buttonLabel = isLightTheme ? 'OFF' : 'ON';

    return (
        <div>
            <button className={`Button-Theme ${isLightTheme ? 'Button-Off' : 'Button-On'}`} onClick={toggleTheme}>
                <div ><FontAwesomeIcon icon={faMoon} className='icon iconMoom' /></div>
                {buttonLabel}

            </button>
        </div>
    );
}

export default Theme;