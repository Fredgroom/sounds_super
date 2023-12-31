import founderImage from "../assets/founder.jpg";

const Team = () => {
  return (
    <section
      id="team"
      className="px-10 min-h-screen flex flex-col justify-center items-center"
    >
      <div className="flex flex-col items-start">
        <h1 className="text-[#E11556] text-4xl font-extrabold underline decoration-[#32BCE7] decoration-500 decoration-4">
          Team
        </h1>
        <p className="mb-3">
          We work with talented freelance writers, presenters, and producers to
          create high-quality audio content. We are committed to producing the
          best possible product, and we work with the best people in the
          business to make that happen.
        </p>
        <p className="mb-3">
          <span className="">Jonathan O'Sullivan</span> is the founder and
          director of Sounds Super. He is a podcast producer with over a decade
          of experience in the audio industry.
        </p>
        <div className="flex flex-col items-center mb-5 w-full">
          <img
            className="w-10/12 rounded-full ring-8 ring-[#32BCE7] ring-offset-8 m-10 mb-5 self-center h-auto w-96 sm:w-96"
            src={founderImage}
          ></img>
          <p>Jonathan O'Sullivan</p>
        </div>
        <p className="mb-3">
          Jonathan has worked on a wide range of projects, including The Come
          Dancing Podcast for BBC Studios, What the Fork? for Global and
          multiple documentaries for BBC Radio. In addition to his work in
          podcasting, Jonathan is also a commissioning producer for BBC Sounds.
          Jonathan is a creative and passionate audio professional with a deep
          understanding of the medium. He is always looking for new ways to tell
          stories and to engage audiences.
        </p>
        <p className="mb-3">Here are some of Jonathan's achievements:</p>
        <ul role="list">
          <li className="mb-3">
            Won the Podcasting Award for Best Entertainment Podcast in 2021
          </li>
          <li className="mb-3">
            Nominated for the Podcasting Award for Best Music Podcast in 2020
          </li>
          <li className="mb-3">
            Featured in The New York Times, The Guardian, and Wired
          </li>
          <li className="mb-3">
            His work has been downloaded over 5 million times
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Team;
