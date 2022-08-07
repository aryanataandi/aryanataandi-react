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
        external: 'http://simpus.skb.salatiga.go.id/simpus',
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
        github: 'https://t.me/addstickers/AmpersandChannelDividerID',
      },
    },
    {
      year: 2020,
      title: 'Komodo OS Website',
      made: '-',
      tech: ['SCSS', 'Vue', 'Bootstrap'],
      link: {
        github: 'https://github.com/aryanataandi/inventori-pos',
      },
    },
  ];

  const Link = (props) => {
    let result;

    for (const key in props) {
      if (props.hasOwnProperty('external')) {
        result = (
          <a href={props['external']}>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        );
      } else if (props.hasOwnProperty('github')) {
        result = (
          <a href={props.github}>
            <i class="fa-brands fa-github"></i>
          </a>
        );
      } else if (props.hasOwnProperty('private')) {
        result = (
          <a href={props.private}>
            <i class="fa-solid fa-lock"></i>
          </a>
        );
      }
    }

    return result;
  };

  return (
    <section className="mt-5 pt-3">
      <div className="py-5">
        <h1 className="display-5">Project Archive</h1>
        <p className="fs-4 text-primary">List of all things that i've made</p>
      </div>
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
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="text-primary">{project.year}</td>
              <td>{project.title}</td>
              <td className="d-none d-md-table-cell">{project.made}</td>
              <td className="d-none d-md-table-cell text-secondary">{project.tech.join(' · ')}</td>
              <td>
                <Link link={project.link}></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Archive;
