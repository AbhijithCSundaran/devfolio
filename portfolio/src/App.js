import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const sentences = [
    'Welcome to my website!',
    'Frontend Developer',
    'Roblox developer(Game)'
  ];
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const flags = useRef({ isTyping: false, isClearing: false })

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];
    const TextTyping = async () => {
      if (!flags.current.isTyping) {
        flags.current.isTyping = true;
        let i = 0;
        // Typing animation
        while (i < currentSentence.length) {
          await new Promise(resolve => setTimeout(() => {
            // setCurrentText(prevText => prevText + currentSentence.charAt(i));
            setCurrentText((prevText) => {
              const nextChar = currentSentence.charAt(prevText.length);
              return prevText + nextChar;
            });
            resolve();
            i++;

          }, 150)); // Adjust the typing speed (milliseconds)
        }
        console.log(i)
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
    <div className="App">
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">

          <h1 className="logo"><a href="index.html">Developer</a></h1>
          {/* Uncomment below if you prefer to use an image logo  */}
          {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              <li><a className="nav-link scrollto " href="#work">Work</a></li>
              <li><a className="nav-link scrollto " href="#blog">Blog</a></li>
              {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li>  */}
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>
      <section className='hero bg-image'>
        <div className='overlay'>
          <div className="hero-content">
            <h1 className="hero-title mb-4">Hi! I am Abhijith CS</h1>
            <p className={"hero-subtitle"+((!flags.current.isTyping && !flags.current.isClearing)?" blink":"")}>{currentText}</p>
          </div>
        </div>
      </section>
      <section className='services'>
      </section>
    </div>
  );
}

export default App;
