import "./About.css";
// import ProfilePhoto from "../assets/MY-PHOTO.JPG";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <div id="about">
      <main className="hero-section flex flex-col md:flex-row justify-evenly ml-4 md:ml-28 mr-4 md:mr-10 mt-10 md:mt-32">
        {/* <img
          src={ProfilePhoto}
          alt="My Photo"
          className="w-96 h-90 object-cover rounded-md mb-6 md:mb-0"
        /> */}
        <div className="typewriter py-3 w-full md:w-1/2">
          <div className="text-4xl text-green-800 font-semibold mb-10">
            <Typewriter
              options={{
                strings: "> Hi again!",
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p>
          "Thanks for stopping by! I'm a junior full-stack developer from Nairobi, Kenya, passionate about creating eye-catching websites and exploring innovative ideas. My journey started with a Diploma in ICT from Kabete National Polytechnic, and I've recently completed my software engineering training as a full-stack developer at Moringa School. I discovered my true passion for programming (and occasionally UI/UX) and now enjoy solving real-world problems with code while connecting with fellow tech enthusiasts.

Beyond coding, I love watching TV shows, traveling, taking nature walks, and diving into a good book 🤓. I'm always on the lookout for new reads, so feel free to share any recommendations! ✨"
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;
