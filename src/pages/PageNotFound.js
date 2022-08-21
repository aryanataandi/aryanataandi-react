import React from 'react';

function PageNotFound() {
  return (
    <section className="d-flex">
      <div className="m-auto text-center">
        <h1 className="m-0 lh-1" style={{ fontSize: '12em' }}>
          404
        </h1>
        <h1 className="text-primary display-6 mb-5">Page Not Found!</h1>
        <a href="/" className="btn btn-lg btn-outline-primary px-3 py-2 mt-2">
          Go Home
        </a>
      </div>
    </section>
  );
}

export default PageNotFound;
