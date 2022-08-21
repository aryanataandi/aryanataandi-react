import React from 'react';
import './archive.css';

const Archive = () => {
  const projects = [
    {
      year: 2022,
      title: 'SIMPUS',
      made: 'Mitra Solusi',
      tech: ['PHP', 'CodeIgniter', 'Firebird'],
      link: {
        external: 'http://simpus.salatiga.go.id/simpus',
      },
    },
    {
      year: 2022,
      title: 'SIMAngkel',
      made: '-',
      tech: ['PHP', 'CodeIgniter', 'MySQL'],
      link: {
        private: '#',
      },
    },
    {
      year: 2021,
      title: 'SKB Online Shop',
      made: 'UPTD SPNF SKB Salatiga',
      tech: ['PHP', 'CodeIgniter', 'MySQL', 'jQuery'],
      link: {
        external: 'https://belanja.skb.salatiga.go.id',
        github: 'https://github.com/aryanataandi/skb-olshop',
      },
    },
    {
      year: 2021,
      title: 'Inventory POS',
      made: '-',
      tech: ['PHP', 'CodeIgniter', 'MySQL', 'jQuery'],
      link: {
        github: 'https://github.com/aryanataandi/inventori-pos',
      },
    },
    {
      year: 2020,
      title: 'TG Animated Stickers',
      made: '-',
      tech: ['Telegram', 'Bodymovin', 'Illustrator', 'After Effects'],
      link: {
        external: 'https://t.me/addstickers/AmpersandChannelDividerID',
      },
    },
    {
      year: 2020,
      title: 'Komodo OS Website',
      made: '-',
      tech: ['SCSS', 'Vue', 'Bootstrap'],
      link: {
        external: 'https://komodo-os.my.id/',
        github: 'https://github.com/Komodo-OS-Devices/Komodo-OS-Devices.github.io',
      },
    },
  ];

  const ExternalLink = (prop) => {
    return (
      <a href={prop.link} className="me-2" target="_blank" rel="noreferer">
        <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
      </a>
    );
  };

  const GithubLink = (prop) => {
    return (
      <a href={prop.link} className="me-2" target="_blank" rel="noreferer">
        <i className="fa-brands fa-github fa-lg"></i>
      </a>
    );
  };

  const PrivateLink = (prop) => {
    return (
      <a href={prop.link} className="me-2" target="_blank" rel="noreferer">
        <i className="fa-solid fa-lock fa-lg"></i>
      </a>
    );
  };

  const Link = (props) => {
    {/* <a href={props[key]['external']} target="_blank" rel="noreferer">
      <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
    </a>;

    <a href={props[key]['github']} target="_blank" rel="noreferer">
      <i className="fa-brands fa-github fa-lg"></i>
    </a>;

    <a href={props[key]['private']} target="_blank" rel="noreferer">
      <i className="fa-solid fa-lock fa-lg"></i>
    </a>; */}
  };

  return (
    <section>
      <h1 className="display-5">Project Archive</h1>
      <p className="fs-4 text-primary">List of all things that i've made</p>
      <table className="text-info">
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
            {/* <th scope="col">Link</th> */}
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="text-primary">{project.year}</td>
              <td>{project.title}</td>
              <td className="d-none d-md-table-cell">{project.made}</td>
              <td className="d-none d-md-table-cell text-secondary">{project.tech.join(' · ')}</td>
              {/* <td>
                <Link link={project.link}></Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Archive;
