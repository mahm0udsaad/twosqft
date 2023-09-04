import { useEffect } from "react";
import { ProjectCard } from "../components/typography";
import { Link } from "react-router-dom";
import { PageFooter } from "../components/footer";

const Works =()=>{
    const projects = [
        {
          title: 'Matrya Cafeteria',
          img: 'https://www.twosqft.com/wp-content/uploads/2023/08/Enscape_2021-09-09-13-15-18-1024x576.png',
          description: 'This is a rooftop cafe designed in Hotel Matrya, Patna. The design follows a bohemian vibe and attracts a young crowd.',
          info: [
            { 'Client ': 'Liquid Themes' },
            { 'Work ': 'Architecture' },
            { 'Date ': '2022' }
          ]
        },
        {
          title: 'Event Barn',
          img: 'https://www.twosqft.com/wp-content/uploads/2023/08/3-5-1-1024x576.jpg',
          description: 'This landscape and commercial project for a landscape contractor is one where the client wants to display his landscaping skills along with minting money out of organizing events. The banquet landscape has a formal French aesthetic.',
          info: [
            { 'Client ': 'Liquid Themes' },
            { 'Work ': 'Architecture' },
            { 'Date ': '2022' }
          ]
        },
        {
          title: 'Patna Golf Club',
          img: 'https://www.twosqft.com/wp-content/uploads/2023/08/Dallas-National-Golf-Clubhouse-Richard-Drummond-Davis-Architect-1-720x480.jpeg',
          description: 'The gazebo designed for the Patna golf club is a brilliant palette of industrial and earthy.',
          info: [
            { 'Client ': 'Liquid Themes' },
            { 'Work ': 'Architecture' },
            { 'Date ': '2022' }
          ]
        },
        {
          title: "Kay's Art Cafe",
          img: 'https://www.twosqft.com/wp-content/uploads/2023/08/Enscape_2021-10-22-13-50-33_Enscape-scene-16-1024x576.jpg',
          description: "This rooftop cafeteria was designed as a proposal for the twin tower with expansive views of the Gandhi Maidan, River Ganga, and Patna's most prominent buildings like the Biscomaun and the convention centre.",
          info: [
            { 'Client ': 'Liquid Themes' },
            { 'Work ': 'Architecture' },
            { 'Date ': '2022' }
          ]
        },
        {
          title: 'Trauma Center',
          img: 'https://www.twosqft.com/wp-content/uploads/2023/08/3-4-1-1024x576.jpg',
          description: 'This trauma centre in Hajipur was an adaptive reuse of an abandoned mall structure. It was replanned as a hospital and its interiors were given a sleek, crisp look.',
          info: [
            { 'Client ': 'Liquid Themes' },
            { 'Work ': 'Architecture' },
            { 'Date ': '2022' }
          ]
        },
        {
          title: 'Rambhawan Project',
          img: 'https://www.twosqft.com/wp-content/uploads/2023/08/2-3-1-1024x853.jpg',
          description: "The project calls for renovating the chieftaincy's private wing in the family palace. It tries to marry Indian and French royalty to materialize the space, customised to their specific needs.",
          info: [
            { 'Client ': 'Liquid Themes' },
            { 'Work ': 'Architecture' },
            { 'Date ': '2022' }
          ]
        }
      ];
    return (
      <>
        <section className="pt-36">
            <div className="flex flex-col justify-between h-[40vh] title w-11/12 mx-auto mb-10 border-b-[1px] border-black">
           <div className="top">
           <span className="rounded-full p-1 text-sm px-3 bg-black text-white font-semibold">OUR VISION</span>
            <br />
            <i className="text-6xl sm:text-8xl font-semibold">Recent</i>
            <h1 className="font-semibold text-6xl sm:text-8xl">Works</h1>
           </div>
        </div>
        <div className="grid sm:grid-cols-3">
        {projects.map((project, index) => (
            <Link key={index} to={`/works/${index}`}>
                <ProjectCard img={project.img} title={project.title} />
            </Link>
        ))}
        </div>
        </section>
        <PageFooter />
      </>
    )
    }
    export default Works ;