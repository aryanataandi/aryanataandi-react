import React, { Component } from 'react';
import Twitter from './icons/Twitter';
import Instagram from './icons/Instagram';
import Github from './icons/Github';

export class Footer extends Component {
  render() {
    return (
      <footer className='py-4'>
        <div className="row">
          <div className="col">
            <ul className='text-primary d-flex justify-content-center justify-content-md-start mb-0'>
              <li className='px-3 px-md-0 pe-md-4'><a className='icon' href="https://twitter.com/aryanata_andi/" target='_blank' rel="noreferrer"><Twitter/></a></li>
              <li className='px-3 px-md-0 pe-md-4'><a className='icon' href="https://instagram.com/aryanata_andi/" target='_blank' rel="noreferrer"><Instagram/></a></li>
              <li className='px-3 px-md-0 pe-md-4'><a className='icon' href="https://github.com/aryanataandi/" target='_blank' rel="noreferrer"><Github/></a></li>
            </ul>
          </div>
        </div>
        <div className="my-4 row">
          <div className="col-12 col-md-6 text-center text-md-start">
            <p className='text-secondary m-0'>Designed {"&"} Built by Aryanata Andipradana</p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <a href="https://github.com/aryanataandi/aryanataandi.github.io" className='text-secondary'>About this website &rarr;</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
