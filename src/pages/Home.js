import React from 'react';
import Project from '../components/Project';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <>
      <section className="d-flex">
        <div className="my-auto">
          <h1 className="display-5">
            I'm A
            <span className="text-primary" data-tip data-for="nickname">
              ryan
            </span>
            ata Andipradana. <br />I write code for the web.
          </h1>

          <ReactTooltip
            id="nickname"
            place="top"
            effect="solid"
            backgroundColor="white"
            textColor="black"
          >
            This is how my friends call my name. 👋
          </ReactTooltip>
        </div>
      </section>
      <section className="d-flex px-sm-5 pt-5" id="about">
        <div className="py-5">
          <h1 className="display-5">
            What do i do for a living<span className="text-primary">?</span>
          </h1>
          <br />
          <p className="fs-4">
            I build web applications and provide the best experience in solving
            real business problems. Sometimes, i work on design projects such
            as web design, animation, video editing and more.
          </p>

          <a href="/" className="btn btn-outline-primary btn-lg px-3 py-2 mt-2">
            More About Me
          </a>
        </div>
      </section>
      <section className="d-flex px-sm-5 pt-5" id="works">
        <div className="py-5">
          <h1 className="display-5">My Work</h1>
          <Project />
          <div className="my-4">
            <h1 className="display-6 text-center">
              Other Things I've Been Worked On
            </h1>
            <div className="d-flex">
              <Link
                to="/archive"
                className="btn btn-outline-primary btn-lg mx-auto px-3 py-2 mt-2"
              >
                Projects Archive
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
