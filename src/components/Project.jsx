import React from 'react';
import komodoImage from '../assets/project-komodo.png';

const Project = () => {
  const projects = [
    {
      id: 1,
      link: 'komodo-os.my.id',
      title: 'Komodo OS Official Website',
      desc: `
      This is a simple website to make it easier for users to know more about <span>Tesat<span/>Komodo OS.
      Built with minimalist & clean design. Using various custom styling to make it responsive. 
      It's also provides data for users to be able to download files provided by the Komodo OS team.
      `,
      img: komodoImage,
    },
    {
      id: 2,
      link: 'simpus.salatiga.go.id',
      title: 'Management System',
      desc: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Et ut, asperiores ea quas eos consequuntur natus laudantium magni? Exercitationem dolor et adipisci harum. 
      Repellat fugit a nesciunt dicta adipisci veniam sint, qui sequi ducimus, accusamus culpa, doloribus aut nisi quos?
      `,
      img: komodoImage,
    },
  ];

  return (
    <>
      {projects.map((project) => (
        <div className="row py-3 py-lg-5">
          <div className="col-6 d-none d-lg-flex">
            <img src={project.img} alt={project.title} className="my-auto rounded-3" style={{width: '110%'}}/>
          </div>
          <div className="col-12 col-lg-6 d-flex text-lg-end">
            <div className="projects my-auto">
              <a href={`https://${project.link}/`} className="text-decoration-none" target="_blank">
                {project.link} &rarr;
              </a>
              <h2>{project.title}</h2>
              <div className="card shadow-lg rounded-3 bg-dark">
                <div className="card-body">
                  <p className="fs-6">{project.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Project;
