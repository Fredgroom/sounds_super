import founderImage from "../assets/founder_photo.jpg";

const Team = () => {
  return (
    <>
      <h1>Team</h1>
      <p>
        We work with talented freelance writers, presenters, and producers to
        create high-quality audio content. We are committed to producing the
        best possible product, and we work with the best people in the business
        to make that happen.
      </p>
      <img src={founderImage}></img>
      <p>
        <span>Founder and Executive Producer</span>Jonathan O'Sullivan is the
        founder and director of Sounds Super. He is a podcast producer with over
        a decade of experience in the audio industry.
      </p>
      <p>
        Jonathan has worked on a wide range of projects, including The Strictly
        Come Dancing Podcast for BBC Studios, What the Fork? for Global and
        multiple documentaries for BBC Radio. In addition to his work in
        podcasting, Jonathan is also a commissioning producer for BBC Sounds.
        Jonathan is a creative and passionate audio professional with a deep
        understanding of the medium. He is always looking for new ways to tell
        stories and to engage audiences.
      </p>
      <p> Here are some of Jonathan's achievements:</p>
      <ul>
        <li>Won the Podcasting Award for Best Entertainment Podcast in 2021</li>
        <li>
          Nominated for the Podcasting Award for Best Music Podcast in 2020
        </li>
        <li>Featured in The New York Times, The Guardian, and Wired</li>
        <li>His work has been downloaded over 5 million times</li>
      </ul>
    </>
  );
};

export default Team;
