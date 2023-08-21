import video from "../assets/sounds_super.mp4";

const Video = () => {
  return (
    <section
      id="video"
      className=" min-h-screen flex flex-col justify-center items-center"
    >
      <video
        muted
        preload="auto"
        autoPlay
        loop
        className="w-full aspect-video "
      >
        <source src={video} type="video/mp4" />
      </video>
      <h1>Copy/title here might be good</h1>
    </section>
  );
};

export default Video;
