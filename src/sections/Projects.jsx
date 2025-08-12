import React from 'react'
import Dither from '../components/Dither'
import TiltedCard from '../components/TiltedCard';

const Projects = () => {
  return (
    <section style={{ position: "relative" }}>
      {/* Dither background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0, // behind everything
          pointerEvents: "none" // so it doesn’t block interaction
        }}
      >
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.03}
        />
      </div>

      {/* Foreground content */}
      <div style={{ position: "relative", zIndex: 1, padding: "4rem 0" }}>
        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Kendrick Lamar - GNX"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
          }
        />
      </div>
    </section>
  );
}

export default Projects;
