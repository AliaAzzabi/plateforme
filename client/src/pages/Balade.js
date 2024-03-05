import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAll } from '../service/operationsEvenement';
import 'bootstrap/dist/css/bootstrap.min.css';

function Balade() {
  const [data, setData] = useState({ balades: [] });

  const getBalades = () => {
    getAll((res) => {
      const baladesData = res.data || [];
      setData({ balades: baladesData });
    });
  };

  useEffect(() => {
    getBalades();
  }, []);

  return (
    <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Balade</h1>
            <p className="lead text-body-secondary">
              Explore the off-road adventure with our quad, scooter, bike and scooter rides: unforgettable getaways in the heart of nature!</p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {data.balades && data.balades.length > 0 ? (
            data.balades.map((balade, index) => (
              <div key={index} className="col">
                <div className="card shadow-sm d-flex flex-column h-100">
                  {balade.image && (
                    <>
                      <img
                        src={`http://localhost:4000/${balade.image.filepath}`}
                        alt={balade.nom}
                        className="card-img-top img-fluid"
                      />
                    </>
                  )}

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{balade.nom}</h5>
                    <p className="card-text flex-fill">{balade.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <Link to={`/Reservationform?ActionName=${balade.nom}`}>
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            Réserver
                          </button>
                        </Link>

                      </div>
                      <small className="text-body-secondary">{balade.prix}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Aucune balade disponible pour le moment.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Balade;
