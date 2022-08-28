import React from 'react';

function Contact() {
  return (
    <>
      <section className="d-flex contact">
        <div className="my-auto">
          <p className="fs-2 mb-0 text-primary">Let's talk about it</p>
          <div>
            <h1 className="my-3">Aryanata Andipradana</h1>
            <h2>
              <a
                className="text-decoration-none"
                href="https://wa.me/6285875351528"
                target="_blank"
                rel="noreferrer"
              >
                +62 8587 5351 528
              </a>
              <br />
              <a href="mailto:aryanata.andipra@gmail.com">
                aryanata.andipra@gmail.com
              </a>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
