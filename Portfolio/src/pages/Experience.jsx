function Experience() {
    return (
      <div id="experience" className="mb-40 mt-32 px-4 md:px-0">
        <h1 className="text-4xl text-center my-5">Experience 💻</h1>
        <div className="flex flex-col md:flex-row items-center md:justify-between mt-10 md:mx-28">
          <h2 className="text-center md:text-left md:w-1/4 mb-6 md:mb-0">
            Front-end development
          </h2>
          <div className="md:ml-10 md:mr-10 mt-0">
            <h4>Euphoria-Luxury</h4>
            <p>
              I have experience in front-end development using HTML, CSS,
              JavaScript and React framework. Where i got to collaborate with diffrent web developers and also put my skills
              into practice.
            </p>
            <a href="https://github.com/coleins/Euphoria-Luxury-Project/tree/Alex.Karanja">
              <button className="rounded-full mt-4 md:mt-0">View Projects</button>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-between mt-10 md:mx-28">
          <h2 className="text-center md:text-left md:w-1/4 mb-6 md:mb-0">
            Backend Development
          </h2>
          <div className="md:ml-10 md:mr-10 mt-0">
            <h4>Travel Agency</h4>
            <p>
            During the development of the Travel Agency project, I concentrated on backend development,
            building robust systems to manage user data, travel itineraries, bookings, and more.
            I implemented a RESTful API using Flask with Python, which handled user authentication, data storage,
            and retrieval processes. The backend was designed to be secure, scalable, and efficient, ensuring smooth interactions between the frontend and the server. Additionally, I integrated a database to manage and store user information, travel plans, and uploaded images, optimizing the application for performance and reliability. This project deepened my understanding of backend technologies and reinforced my skills in creating seamless, data-driven applications
            </p>
            <a href="https://github.com/noahchirchir/Travel-Agency">
              <button className="rounded-full mt-4 md:mt-0">View Projects</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Experience;
  