import React from 'react';
import { useParallax ,Parallax} from 'react-scroll-parallax';

const ParallaxVideo = () => {

  return (
    <>
      <Parallax
        className="relative"
        style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}
        scale={[0.75, 1]}
        >
        <iframe
          src="https://www.youtube.com/embed/ymJA4Ak61oc?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fwww.twosqft.com&widgetid=1"
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          title="YouTube Video 1"
        ></iframe>
      </Parallax>
    </>
  );
};

export default ParallaxVideo;
