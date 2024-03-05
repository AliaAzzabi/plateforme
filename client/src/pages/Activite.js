import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllActivites } from '../service/operationsEvenement';
import 'bootstrap/dist/css/bootstrap.min.css';

function Activite() {
  const [data, setData] = useState({ activites: [] });

  const getActivites = () => {
    getAllActivites((res) => {
      const activitesData = res.data || [];
      setData({ activites: activitesData });
    });
  };

  useEffect(() => {
    getActivites();
  }, []);
  return (
    <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Activities</h1>
            <p className="lead text-body-secondary">Between horseback rides, camel excursions, adventures in
              kayaking, parachute flights and sailing on pirate ships, Djerba offers a range of activities
              captivating, seamlessly merging the island's natural beauty with memorable experiences, all in
              a captivating atmosphere of discovery and adventure.</p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {data.activites && data.activites.length > 0 ? (
            data.activites.map((activites, index) => (
              <div key={index} className="col">
                <div className="card shadow-sm d-flex flex-column h-100">
                  {activites.image && (
                    <>
                      <img
                        src={`http://localhost:4000/${activites.image.filepath}`}
                        alt={activites.nom}
                        className="card-img-top img-fluid"
                      />
                    </>
                  )}

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{activites.nom}</h5>
                    <p className="card-text flex-fill">{activites.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <Link to={`/Reservationform?ActionName=${activites.nom}`}>
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            Réserver
                          </button>
                        </Link>
                      </div>
                      <small className="text-body-secondary">{activites.prix}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Aucune Activite disponible pour le moment.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Activite
