import React, { Component } from 'react';

class Flipbook extends Component {
  componentDidMount() {
    this.loadStyles();
    this.loadScripts();
  }

  loadStyles() {
    // Load external CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/dflip/css/dflip.min.css';
    document.head.appendChild(link);
  }

  loadScripts() {
    const loadScript = (src, type) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.type = type;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    // Load script 1
    loadScript('/dflip/js/libs/jquery.min.js', 'text/javascript')
      .then(() => {
        // Script 1 has loaded successfully
        // Now load script 2
        return loadScript('/dflip/js/dflip.min.js', 'text/javascript');
      })
      .then(() => {
        // Script 2 has loaded successfully
        // Load and initialize script 3
        const script3 = document.createElement('script');
        script3.className = 'df-shortcode-script';
        script3.type = 'text/javascript';
        script3.innerHTML = `
          var option_flipbook = {
            source: '/download?fileId={pdfId}',
            "overwritePDFOutline": "true",
            autoEnableOutline: "false",
            forceFit: true,
            outline: [],
            color3DCover: "#fff",
            hard: "none",
            shadowOpacity: 0,
            allControls: "",
            pageMode: DFLIP.PAGE_MODE.DOUBLE ,
          };
        `;

        // Call initialization function once script 3 is loaded
        script3.onload = this.initializeFlipbook;
        document.head.appendChild(script3);
      })
      .catch((error) => {
        console.error('Script loading failed:', error);
      });
  }

  // initializeFlipbook() {
  //   // JavaScript code to initialize the flipbook can go here
  //   // Ensure the required libraries are properly loaded
  //   window.addEventListener('load', function () {
  //     const myFlipbook = new DFlip('._df_book', {
  //       source: 'location of pdf.pdf'
  //       // Additional configuration options here
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        <div className="_df_book" id="flipbook" pageMode='2' source="Print_DikshaUtkarsh.pdf"></div>
      </div>
    );
  }
}

export default Flipbook;
