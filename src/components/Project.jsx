import React from 'react';
import parse from 'html-react-parser';
import komodoImage from '../assets/project-komodo.png';
import skbImage from '../assets/project-skb.png';
import tgsImage from '../assets/project-tgs.png';

const Project = () => {
  const projects = [
    {
      id: 1,
      link: 'https://belanja.skb.salatiga.go.id',
      taglink: 'belanja.skb.salatiga.go.id',
      title: 'SKB Online Shop',
      img: skbImage,
      desc: `
      Web based B2C <i>e-commerce</i> built for Salatiga City's SMEs to support their business.
      This is my first application project that was built back in the day when I was doing an internship.
      `,
      tech: ['PHP', 'CodeIgniter', 'MySQL', 'jQuery'],
    },
    {
      id: 2,
      link: 'https://komodo-os.my.id',
      taglink: 'komodo-os.my.id',
      title: 'Komodo OS Website',
      img: komodoImage,
      desc: `
      A simple website about one of the most popular custom AOSP in Indonesia, Komodo OS.
      Provides information & latest releases of many devices by the Komodo OS team.
      `,
      tech: ['SCSS', 'Vue', 'Bootstrap'],
    },
    {
      id: 3,
      link: 'https://t.me/addstickers/AmpersandChannelDividerID',
      taglink: 'Ampersand Channel Divider',
      title: 'TG Animated Stickers',
      img: tgsImage,
      desc: `
      Animated sticker pack for channel posts divider on <a href="https://en.wikipedia.org/wiki/Telegram_(software)" class="text-decoration-none" target="_blank" rel="noreferrer">Telegram</a>.
      Having 120.000+ total usage for more than 50 channels.
      `,
      tech: ['Telegram', 'Bodymovin', 'Illustrator', 'After Effects'],
    },
  ];

  const LayoutOdd = (props) => {
    return (
      <>
        <div className="row py-3 py-lg-5">
          <div className="col-6 d-none d-lg-flex">
            <img src={props.img} alt={props.title} className="my-auto rounded-3" style={{ width: '110%' }} />
          </div>
          <div className="col-12 col-lg-6 d-flex text-lg-end">
            <div className="props my-auto">
              <a href={props.link} className="text-decoration-none" target="_blank" rel="noreferrer">
                {props.taglink} &rarr;
              </a>
              <h1 className="display-6">{props.title}</h1>
              <div className="card border-0 shadow rounded-3 bg-dark my-3">
                <div className="card-body">
                  <p className="fs-6 mb-0">{parse(props.desc)}</p>
                </div>
              </div>
              <div className="">
                {props.tech.map((item, index) => (
                  <span key={index} className="text-primary ms-0 ms-lg-4 me-4 me-lg-0">{item}</span>
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
        <div className="row py-3 py-lg-5">
          <div className="col-12 col-lg-6 d-flex">
            <div className="props my-auto">
              <a href={props.link} className="text-decoration-none" target="_blank" rel="noreferrer">
                {props.taglink} &rarr;
              </a>
              <h1 className="display-6">{props.title}</h1>
              <div className="card border-0 shadow rounded-3 bg-dark my-3">
                <div className="card-body">
                  <p className="fs-6 mb-0">{parse(props.desc)}</p>
                </div>
              </div>
              <div className="">
                {props.tech.map((item, index) => (
                  <span key={index} className="text-primary me-4">{item}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-6 d-none d-lg-inline">
            <img src={props.img} alt={props.title} className="my-auto rounded-3 float-end" style={{ width: '110%' }} />
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
            <LayoutOdd id={project.id} link={project.link} taglink={project.taglink} title={project.title} img={project.img} desc={project.desc} tech={project.tech} />
          ) : (
            <LayoutEven id={project.id} link={project.link} taglink={project.taglink} title={project.title} img={project.img} desc={project.desc} tech={project.tech} />
          )}
        </div>
      ))}
    </>
  );
};

export default Project;
