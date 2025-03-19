import React from "react";

interface InstagramEmbedProps {
  url: string;
}

const InstagramEmbed = ({ url }: InstagramEmbedProps) => {
  const embedUrl = `${url}?utm_source=ig_embed&utm_campaign=loading`;
  
  return (
    <blockquote 
      className="instagram-media" 
      data-instgrm-captioned 
      data-instgrm-permalink={embedUrl}
      data-instgrm-version="14"
    >
      <div style={{ padding: '16px' }}>
        <a 
          href={embedUrl}
          style={{ 
            background: '#FFFFFF',
            lineHeight: '0',
            padding: '0 0',
            textAlign: 'center',
            textDecoration: 'none',
            width: '100%'
          }} 
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '40px', marginRight: '14px', width: '40px' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', height: '14px', marginBottom: '6px', width: '100px' }}></div>
              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', height: '14px', width: '60px' }}></div>
            </div>
          </div>
          <div style={{ padding: '19% 0' }}></div>
        </a>
      </div>
    </blockquote>
  );
};

export default InstagramEmbed;