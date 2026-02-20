"use client";

interface VideoPlayerProps {
  videoId: string;
}

function VideoPlayer({ videoId }: VideoPlayerProps) {
  return (
    <div className="h-[50vh] w-[80vw]">
      <iframe
        src={`https://player.vimeo.com/video/${videoId}`}
        className="w-full h-full rounded-xl"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default VideoPlayer;
