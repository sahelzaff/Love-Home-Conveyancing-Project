import React, { useRef, useEffect } from 'react';
import { assets } from '../../assets/assets';
import '../../Homepage.css';
import '../../Responsive.css';

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Play assets.Bondi.mp4 first
    const bondiVideo = videoRef.current;

    bondiVideo.src = assets.Bondi;
    bondiVideo.play();

    // After assets.Bondi.mp4 finishes, play assets.video
    bondiVideo.addEventListener('ended', () => {
      bondiVideo.src = assets.video;
      bondiVideo.play();
    });

    return () => {
      bondiVideo.removeEventListener('ended', () => {
        bondiVideo.src = assets.video;
        bondiVideo.play();
      });
    };
  }, []);

  return (
    <div className="relative h-screen w-full">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      />

      <div
        className="absolute inset-0 flex items-center justify-start w-4/5 mb-10 Homepage1"
        id="videoTextDiv"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <h1 className="text-white text-5xl font-meduim font-outfit" id="videoText1">
          Experience seamless property transactions with{' '}
          <span className="text-[#f0532d] text-9xl font-extrabold font-outfit" id='videoText2'>
            <br />
            Peace Of Mind,
          </span>
          <br />
          every step of the way.
        </h1>
      </div>
    </div>
  );
};

export default VideoBackground;
