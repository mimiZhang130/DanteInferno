import React, { useEffect, useRef, useState } from "react";

const Music = ({ music_file }) => {
  const audioRef = useRef(null);
  console.log(music_file);
  useEffect(() => {
    if (music_file && audioRef.current) {
      console.log("music_file received:", music_file);

      audioRef.current.play().catch((err) => {
        console.warn("Autoplay prevented or file not found:", err);
      });
    }
  }, [music_file]);

  if (!music_file) {
    return <p>Loading music...</p>; // Show loading message while waiting
  }

  return (
    <div style={{textAlignLast: "center", margin: "1rem"}}>
      <audio ref={audioRef} src={music_file} loop controls />
    </div>
  );
};

export default Music;
