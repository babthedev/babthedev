import React, { useEffect } from 'react';

const CustomSubstackEmbed = () => {
  useEffect(() => {
    // Define CustomSubstackWidget object
    window.CustomSubstackWidget = {
      substackUrl: "babthedev.substack.com",
      placeholder: "example@gmail.com",
      buttonText: "Start Reading",
      theme: "custom",
      colors: {
        primary: "#000000",
        input: "#ffffff",
        email: "#000000",
        text: "#ffffff",
      },
      // Go to substackapi.com to unlock custom redirect
    };

    // Load Substack widget script
    const script = document.createElement('script');
    script.src = 'https://substackapi.com/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up function
    return () => {
      document.body.removeChild(script);
      delete window.CustomSubstackWidget;
    };
  }, []);

  return (
    <div id="custom-substack-embed" className='mt-4'></div>
  );
};

export default CustomSubstackEmbed;
