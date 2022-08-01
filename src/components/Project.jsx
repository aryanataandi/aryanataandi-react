import React from 'react';
import parse from 'html-react-parser';
import komodoImage from '../assets/project-komodo.png';

const Project = () => {
  const projects = [
    {
      id: 1,
      link: 'komodo-os.my.id',
      title: 'Komodo OS Website',
      img: komodoImage,
      desc: `
      This is a simple website to make it easier for users to know more about Komodo OS.
      Built with minimalist & clean design using various custom styling to make it responsive.
      It's also provides data for users to be able to download files provided by the Komodo OS team.
      `,
      tech: ['Sass', 'Vue', 'Bootstrap'],
    },
    {
      id: 2,
      link: 'simpus.salatiga.go.id',
      title: 'Management System',
      img: komodoImage,
      desc: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Et ut, asperiores ea quas eos consequuntur natus laudantium magni? Exercitationem dolor et adipisci harum. 
      Repellat fugit a nesciunt dicta adipisci veniam sint, qui sequi ducimus, accusamus culpa, doloribus aut nisi quos?
      `,
      tech: [],
    },
  ];

  return (
    <>
      {projects.map((project) => (
        <div className="row py-3 py-lg-5">
          <div className="col-6 d-none d-lg-flex">
            <img src={project.img} alt={project.title} className="my-auto rounded-3" style={{ width: '110%' }} />
          </div>
          <div className="col-12 col-lg-6 d-flex text-lg-end">
            <div className="projects my-auto">
              <a href={`https://${project.link}/`} className="text-decoration-none" target="_blank">
                {project.link} &rarr;
              </a>
              <h1 className="display-6">{project.title}</h1>
              <div className="card shadow rounded-3 bg-dark my-3">
                <div className="card-body">
                  <p className="fs-6 mb-0">{parse(project.desc)}</p>
                </div>
              </div>
              <div className="">
                {project.tech.map((item) => (
                  <span className="text-primary fw-bold ms-0 ms-lg-4 me-4 me-lg-0">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Project;
