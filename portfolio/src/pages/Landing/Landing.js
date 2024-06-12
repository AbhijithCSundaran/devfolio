import React, { useEffect, useRef, useState } from 'react'
import './Landing.css'
import Services from '../Services/Services';
import About from '../About/About';
import Navbar from '../../layouts/Navbar/Navbar';
import Works from '../Works/Works';

function Landing() {
    const sentences = [
        'Welcome to my website!',
        'Frontend Developer',
        'Roblox developer(Game)'
    ];
    let [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const flags = useRef({ isTyping: false, isClearing: false })

    useEffect(() => {
        const currentSentence = sentences[currentSentenceIndex];
        const TextTyping = async () => {
            if (!flags.current.isTyping) {
                flags.current.isTyping = true;
                var i = 0;
                // Typing animation
                while (i < currentSentence.length) {
                    await new Promise(resolve => setTimeout(() => {
                        
                        // setCurrentText(prevText => prevText + currentSentence.charAt(i));
                        setCurrentText((prevText) => {
                            const nextChar = currentSentence.charAt(prevText.length);
                            return prevText + nextChar;
                        });
                        resolve();
                        
                    }, 150)); // Adjust the typing speed (milliseconds)
                    i++;
                }
                // console.log(i)
            }
            flags.current.isTyping = false;
        };

        // Start the typing and clearing animation
        if (!flags.current.isTyping && !flags.current.isClearing)
            TextTyping();
    }, [currentSentenceIndex]);

    useEffect(() => {
        const currentSentence = sentences[currentSentenceIndex];

        const TextClearing = async () => {
            flags.current.isClearing = true;
            await new Promise(resolve => setTimeout(resolve, 3000));
            // Clearing animation
            let i = currentSentence.length;
            while (i > 0) {
                await new Promise(resolve => setTimeout(() => {
                    setCurrentText((prevText) => {
                        i = prevText.length - 1;
                        return prevText.slice(0, -1);
                    });
                    resolve();
                }, 50)); // Adjust the clearing speed (milliseconds)
            }
            flags.current.isClearing = false;
            setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        }

        // Start the typing and clearing animation
        if (currentText == currentSentence && !flags.current.isClearing)
            TextClearing();
    }, [currentText]);
    return (
        <div className='d-flex flex-column'>
            <Navbar></Navbar>
            <section id="hero" className='hero bg-image'>
                <div className='overlay'>
                    <div className="hero-content">
                        <h1 className="hero-title mb-4">Hi! I am Abhijith CS</h1>
                        <p className={"hero-subtitle" + ((!flags.current.isTyping && !flags.current.isClearing) ? " blink" : "")}>{currentText}</p>
                    </div>
                </div>
            </section>
            <section id="about" className="about container">
                <About></About>
            </section>
            <section id="services" className='services container'>
                <Services></Services>
            </section>
            <section id="works" className='works container'>
                <Works></Works>
            </section>
        </div>
    )
}

export default Landing
