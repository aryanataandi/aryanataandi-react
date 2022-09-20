import React from 'react';
import './archive.css';
import { archive } from '../data/data.js';

const Archive = () => {
  const projects = archive;

  const ExternalLink = (prop) => {
    return (
      <a href={prop.link} className="me-3" target="_blank" rel="noreferrer">
        <i
          className={` 
        ${
          prop.type === 'external'
            ? 'fa-solid fa-arrow-up-right-from-square'
            : ''
        }
        ${prop.type === 'github' ? 'fa-brands fa-github' : ''}
        ${
          prop.type === 'private'
            ? 'fa-solid fa-arrow-up-right-from-square'
            : ''
        }
         fa-lg`}
        ></i>
      </a>
    );
  };

  return (
    <section>
      <div data-aos="fade" data-aos-delay="500">
        <h1 className="display-5">Project Archive</h1>
        <p className="fs-4 text-primary">List of all things I've built</p>
      </div>
      <table className="text-info mt-5" data-aos="fade" data-aos-delay="600">
        <thead className="text-secondary">
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Title</th>
            <th scope="col" className="d-none d-md-table-cell">
              Made at
            </th>
            <th scope="col" className="d-none d-md-table-cell">
              Tech
            </th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="text-primary">{project.year}</td>
              <td>{project.title}</td>
              <td className="d-none d-md-table-cell">{project.made}</td>
              <td className="d-none d-md-table-cell text-secondary">
                {project.tech.join(' · ')}
              </td>
              <td className="d-flex">
                {project.link.map((x, index) =>
                  x.type === 'external' ? (
                    <ExternalLink link={x.link} type={x.type} />
                  ) : x.type === 'github' ? (
                    <ExternalLink link={x.link} type={x.type} />
                  ) : x.type === 'private' ? (
                    <ExternalLink link={x.link} type={x.type} />
                  ) : (
                    '-'
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Archive;
