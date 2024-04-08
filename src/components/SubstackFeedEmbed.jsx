import React, { useEffect } from 'react';

const SubstackFeedEmbed = () => {
  useEffect(() => {
    // Define SubstackFeedWidget object
    window.SubstackFeedWidget = {
      substackUrl: "babthedev.substack.com",
      posts: 1,
      layout: "right",
      colors: {
        primary: "#000000",
        secondary: "#413F3F",
        background: "#FFFFFF",
      }
    };

    // Load Substack feed script
    const script = document.createElement('script');
    script.src = 'https://substackapi.com/embeds/feed.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up function
    return () => {
      document.body.removeChild(script);
      delete window.SubstackFeedWidget;
    };
  }, []);

  return (
    <div id="substack-feed-embed" className='md:mt-4 hidden md:block'></div>
  );
};

export default SubstackFeedEmbed;
