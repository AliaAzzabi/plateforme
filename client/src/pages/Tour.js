import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllTours } from '../service/operationsEvenement';
import 'bootstrap/dist/css/bootstrap.min.css';

function Tour() {
  const [data, setData] = useState({ tours: [] });

  const getTours = () => {
    getAllTours((res) => {
      const toursData = res.data || [];
      setData({ tours: toursData });
    });
  };

  useEffect(() => {
    getTours();
  }, []);
  return (
    <div>
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Tours</h1>
          <p className="lead text-body-secondary">The beautifully presented tours invite you on an enchanting journey to
           through the picturesque landscapes of Djerba, revealing the very essence of adventure and discovery at the heart of
           this fascinating Tunisian island.</p>
        </div>
      </div>
    </section>

    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {data.tours && data.tours.length > 0 ? (
          data.tours.map((tours, index) => (
            <div key={index} className="col">
              <div className="card shadow-sm d-flex flex-column h-100">
                {tours.image && (
                  <>
                    <img
                      src={`http://localhost:4000/${tours.image.filepath}`}
                      alt={tours.nom}
                      className="card-img-top img-fluid" 
                    />
                  </>
                )}

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{tours.nom}</h5>
                  <p className="card-text flex-fill">{tours.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div className="btn-group">
                    <Link to={`/Reservationform?ActionName=${tours.nom}`}>
  <button type="button" className="btn btn-sm btn-outline-secondary">
    Réserver
  </button>
</Link>
                    </div>
                    <small className="text-body-secondary">{tours.prix}</small>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Aucune Tours disponible pour le moment.</p>
        )}
      </div>
    </div>
  </div>
  )
}

export default Tour
