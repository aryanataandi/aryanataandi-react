import React from 'react';
import Project from './Project';
import ReactTooltip from 'react-tooltip';
import './home.css';

function Home() {
  return (
    <>
      <section className="d-flex">
        <div className="my-auto">
          <h1 className="display-3">
            I'm A<span className="text-primary" data-tip data-for="nickname">ryan</span>ata Andipradana <br />A Web Developer
          </h1>

          <ReactTooltip id="nickname" place="top" effect="solid" backgroundColor="white" textColor="black">
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
            I do{' '}
            <strike className="text-danger" data-tip data-for="dead">
              gaming
            </strike>{' '}
            coding for a living. I build web applications and delivering the best experience so we could solve real business-problems with our clients. Occasionally, i also works on design projects such as motion design, web design, animation, video editing and more.</p>

          <ReactTooltip id="dead" place="top" effect="solid" backgroundColor="white" textColor="black">
            for fun. ☠️
          </ReactTooltip>
          <ReactTooltip id="job" place="top" effect="solid" backgroundColor="white" textColor="black">
            a.k.a. Fullstack Web Developer
          </ReactTooltip>

          <a href="/" className="btn btn-outline-primary px-3 py-2 mt-2">
            More About Me
          </a>
        </div>
      </section>
      <section className="d-flex px-sm-5 pt-5" id="works">
        <div className="py-5">
          <h1 className="display-5">My Work</h1>
          <Project/>
          <div className="my-2">
            <h3 className="text-center">
              Other Things I've Worked On
            </h3>
            <div className="d-flex">
              <a href="/" className="btn btn-outline-primary mx-auto px-3 py-2 mt-2">
                Projects Archive
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
