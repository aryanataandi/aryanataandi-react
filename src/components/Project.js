import React from 'react';
import parse from 'html-react-parser';
import data from '../data/data.js';

const Project = () => {
  const projects = data;

  const LayoutOdd = (props) => {
    return (
      <>
        <div className="row py-4 py-lg-5">
          <div className="col-6 d-none d-lg-flex">
            <img
              src={props.img}
              alt={props.title}
              className="my-auto rounded-3"
              style={{ width: '110%' }}
            />
          </div>
          <div className="col-12 col-lg-6 d-flex text-lg-end">
            <div className="props my-auto">
              <a
                href={props.link}
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                {props.taglink} &rarr;
              </a>
              <h1 className="display-6 mt-2">{props.title}</h1>
              <div className="card border-0 shadow rounded-3 bg-dark my-3">
                <div className="card-body">
                  <p className="fs-6 mb-0">{parse(props.desc)}</p>
                </div>
              </div>
              <div className="">
                {props.tech.map((item, index) => (
                  <span
                    key={index}
                    className="text-primary ms-0 ms-lg-4 me-4 me-lg-0"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const LayoutEven = (props) => {
    return (
      <>
        <div className="row py-4 py-lg-5">
          <div className="col-12 col-lg-6 d-flex">
            <div className="props my-auto">
              <a
                href={props.link}
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                {props.taglink} &rarr;
              </a>
              <h1 className="display-6 mt-2">{props.title}</h1>
              <div className="card border-0 shadow rounded-3 bg-dark my-3">
                <div className="card-body">
                  <p className="fs-6 mb-0">{parse(props.desc)}</p>
                </div>
              </div>
              <div className="">
                {props.tech.map((item, index) => (
                  <span key={index} className="text-primary me-4">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-6 d-none d-lg-inline">
            <img
              src={props.img}
              alt={props.title}
              className="my-auto rounded-3 float-end"
              style={{ width: '110%' }}
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {projects.map((project, index) => (
        <div key={index}>
          {project.id % 2 !== 0 ? (
            <LayoutOdd
              id={project.id}
              link={project.link}
              taglink={project.taglink}
              title={project.title}
              img={project.img}
              desc={project.desc}
              tech={project.tech}
            />
          ) : (
            <LayoutEven
              id={project.id}
              link={project.link}
              taglink={project.taglink}
              title={project.title}
              img={project.img}
              desc={project.desc}
              tech={project.tech}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default Project;
