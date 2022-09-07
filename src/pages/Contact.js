import React from 'react';
import TypeIt from 'typeit-react';

function Contact() {
  return (
    <>
      <section className="d-flex contact">
        <div className="my-auto">
          <p className="fs-2 mb-0 text-primary" data-aos="fade-up">
            Let's talk about it
          </p>
          <div>
            <h1
              className="my-1 display-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Aryanata Andipradana
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="200">
              <TypeIt
                options={{ loop: true }}
                getBeforeInit={(instance) => {
                  instance
                    .type('aryanata_andi')
                    .pause(1500)
                    .move(-13, { speed: 500 })
                    .pause(200)
                    .type('twitter.com/')
                    .pause(1500)
                    .move(-5, { speed: 500 })
                    .pause(200)
                    .delete(17, { instant: false })
                    .type('instagram')
                    .pause(1500)
                    .move(4, { speed: 500 })
                    .pause(200)
                    .delete(13, { instant: false })
                    .type('t.me')
                    .move(14, { instant: true })
                    .pause(1500)
                    .go();

                  // Remember to return it!
                  return instance;
                }}
              />
              <br/>
              <a
                className="btn btn-outline-primary btn-lg mx-auto px-3 py-2 mt-3"
                href="mailto:aryanata.andipra@gmail.com"
              >
                Email Me
              </a>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
