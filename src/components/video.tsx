// import video from "../assets/sounds_super.mp4";
import gif from "../assets/sounds_super.gif";

const Video = () => {
  return (
    <section
      id="video"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      {/* <video
        muted
        preload="auto"
        autoPlay
        loop
        className="w-full aspect-video "
      >
        <source
          src="https://lh3.googleusercontent.com/86KYU3DAPqrlj7weZ8PdUEKpXwZQb7aptCuYAF6G1Sk6aQeRt1SyZ_ttsnjMNKYMFcsBi1Mh9C9a3awlencEorybw_K0yzIpadGa34rnRHGh1fUvAXqL-mk19nZWVl5t3A=w1280"
          type="video/mp4"
        />
      </video> */}
      <img src={gif} />
    </section>
  );
};

export default Video;
