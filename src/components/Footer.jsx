import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col">
            <p>Connect w/ me on..</p>
            <ul className='text-primary'>
              <li><a className='text-primary' href="https://twitter.com/aryanata_andi/" target='_blank' rel="noreferrer">Twitter</a></li>
              <li><a className='text-primary' href="https://instagram.com/aryanata_andi/" target='_blank' rel="noreferrer">Instagram</a></li>
              <li><a className='text-primary' href="https://www.linkedin.com/in/aryanata-andipradana-43a02a181/" target='_blank' rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="my-4 d-flex justify-content-between">
          <p className='text-secondary'>Copyright &copy; Aryanata Andipradana 2022</p>
            <a href="https://github.com/aryanataandi/aryanataandi.github.io" className='text-secondary'>More about this website &rarr;</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
