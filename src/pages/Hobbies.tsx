import React, { useEffect } from "react";
import { Camera } from "lucide-react";
import InstagramEmbed from "../components/Instagram/InstagramEmbed";
import hobbiesData from "../data/hobbies.json";

const Hobbies = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="content">
      <div className="block-holder">
        <div className="anchor" id="hobbies"></div>
        <h1 className="text-3xl font-bold text-center text-white mb-8">Hobbies</h1>

        <div className="about-row">
          <h2 className="text-2xl font-semibold text-center text-white mb-8">Some of my hobbies</h2>
          <div className="h-1 w-full rounded-full bg-[#fbc02d] mb-12" />

          <div className="instagram-container">
            {hobbiesData.instagramPosts.map((post, index) => (
              <div key={index} className="mb-8">
                <InstagramEmbed url={post.url} />
              </div>
            ))}
          </div>

          <div className="instagram-follow-button mt-12">
            <a
              href={`https://www.instagram.com/${hobbiesData.instagramUsername}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
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
