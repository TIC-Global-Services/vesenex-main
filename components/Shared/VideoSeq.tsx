import React from "react";

interface VideoSeqProps {
  webVideo: string;
  mobileVideo: string;
}

const VideoSeq = ({ webVideo, mobileVideo }: VideoSeqProps) => {


  return (
    <div>
      <video
        className=" w-full h-screen object-cover lg:block hidden"
        autoPlay
        muted
        playsInline
      >
        <source src={webVideo} type="video/mp4" />
      </video>
      <video
        className=" w-full h-screen object-cover lg:hidden block"
        autoPlay
        muted
        playsInline
      >
        <source src={mobileVideo} type="video/mp4" />
      </video>


    </div>
  );
};

export default VideoSeq;
