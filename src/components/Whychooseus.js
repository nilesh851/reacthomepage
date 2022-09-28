import React from 'react'

export default function Whychooseus(props) {
    return(
        <section id="whychooosus" className="whychooosus">
        <div className="container">
  
          <div className="section-header">
            <h2>{props.tittle}</h2>
            <p>{props.subtittle}</p>
  
          </div>
          <div className="row justify-content-center gy-4 my-2">
            <div className="col-lg-2 col-md-6 service-item d-flex aos-init aos-animate" data-aos="fade-up">
              <div>
              <div className="icon flex-shrink-0"> <img src="img/languages.png" className="img-fluid" alt="Multi lingual"/></div>
                <p className="description">Multi lingual Support</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 service-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div>
              <div className="icon flex-shrink-0"><img src="img/affordable.png" className="img-fluid" alt="Affordable Premium"/></div>
                <p className="description">Affordable Premium</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 service-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div>
              <div className="icon flex-shrink-0"><img src="img/customize.png" className="img-fluid" alt="Customized"/></div>
                <p className="description">Customized to the Specific Needs</p>
              </div>
            </div>
  
            <div className="col-lg-2 col-md-6 service-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div>
              <div className="icon flex-shrink-0"><img src="img/field.png" className="img-fluid" alt="Rural Focused"/></div>
                <p className="description">100% Rural Focused</p>
              </div>
            </div> 
            <div className="col-lg-2 col-md-6 service-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div>
              <div className="icon flex-shrink-0"><img src="img/certificate.png" className="img-fluid" alt="Rural Focused"/></div>
                <p className="description">licenced by IRDAI</p>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>

    )
}