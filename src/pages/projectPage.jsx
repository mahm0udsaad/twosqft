import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageFooter } from '../components/footer';
const ProjectDetails = () => {
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

  const { id } = useParams();
  const projectId = parseInt(id);

  const [project, setProject] = useState(null);

  useEffect(() => {
    if (projectId >= 0 && projectId < projects.length) {
      setProject(projects[projectId]);
    } else {
      setProject(null);
    }
}, []);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <section className='project-section h-screen md:h-[70vh] absolute w-full top-0'>
        <div className="title pt-40 w-11/12 sm:w-3/5 flex flex-col justify-around h-full mx-auto sm:mx-10">
        <h2 className='sm:text-9xl text-7xl lg:font-semibold w-40'>{project.title}</h2>
        <div className="info">
        <p className='text-xl'>{project.description}</p>
        <ul className='flex grid grid-cols-3 mt-10'>
            {project.info.map((item, index) => (
            <li 
            key={index}>
                <p className='text-gray-400'>{Object.keys(item)[0]}</p> {Object.values(item)[0]}
            </li>
            ))}
        </ul>
        </div>
        </div>
        <div style={{backgroundImage:`url(${project.img})`}} className="project-panner h-[40vh]"></div>
        <div className="sm:w-3/5 w-11/12 text-center  mx-auto my-10 border-b-2">
            <h1 className="text-5xl font-semibold">Hear from our clients</h1>
            <p className="text-xl my-10">Hub unleashed our business potential by maximising the innovation. Hub allows your business and technology computers to store and analyze. Thanks Hub!</p>
            <h4 className="text-xl pb-5">Alex Porad</h4>
        </div>
        <PageFooter />
    </section>
  );
};

export default ProjectDetails;
