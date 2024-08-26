import "./Projects.css";
import TravelplannerPhoto from "../assets/Travel planner.png";
import LandingPagePhoto from "../assets/Landing-Page.png";
import WeatherAppImage from "../assets/weather-app.png";
import RecipeAppImage from "../assets/recipe-app.png";


function Projects() {
  const projectArray = [
    {
      title: "Travel planner",
      description:
        "This is a simple website for a travel planning service that allows users to create and manage itineraries, book accommodations and activities, and document their journeys in a travel journal. Users can also upload images related to their travels. The website is built using React for the frontend and Flask with Python for the backend, and it features a robust database for storing user data and travel information. Tailwind is used for styling and ensuring responsiveness.",
      image: TravelplannerPhoto,
      demo: "https://travel-agency-ten-pi.vercel.app/",
      link: "https://github.com/noahchirchir/Travel-Agency",
    },
   
  ];

  return (
    <div id="projects">
      <div className="text-center my-5">
        <h1 className="text-4xl">Projects 💻</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-8">
        {projectArray.map((project, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-4/5 rounded-lg"
            />
            <h4 className="mt-3">{project.title}</h4>
            <p>{project.description}</p>
            <div className="flex space-x-3 mt-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="py-2 px-4 rounded-full ease-in-out duration-200 project-button">
                  Source Code
                </button>
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <button className="py-2 px-4 rounded-full ease-in-out duration-200">
                  Demo
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
