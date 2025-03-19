import React, { useEffect } from 'react';
import { Camera } from 'lucide-react';
import InstagramEmbed from '../components/Instagram/InstagramEmbed';
import hobbiesData from '../data/hobbies.json';

const Hobbies = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="content" className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="block-bolder white print-hide">
          <div className="anchor" id="some-of-my-hobbies"></div>
          <h2 className="text-3xl font-bold text-center text-white mb-8">Some of my hobbies</h2>
          
          <div className="instagram-container">
            {hobbiesData.instagramPosts.map((post, index) => (
              <div key={index}>
                <InstagramEmbed url={post.url} />
              </div>
            ))}
          </div>

          <div className="instagram-follow-button">
            <a 
              href={`https://www.instagram.com/${hobbiesData.instagramUsername}/`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
            >
              <Camera size={20} className="mr-2" />
              Follow me on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;