import React from 'react'

const Faqs = () => {
  return (
    <>
    <div className="container mt-5">
        <div className="row pt-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
                {/* =============================FAQS1======================== */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqs1">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <h5>How often should I water my plants?</h5>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="faqs1" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Most indoor plants need water once a week. Always check the soil first — if it’s dry, water; if it’s moist, wait a few days.</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                {/* =============================FAQS2======================== */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqs2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <h5>Do I need to fertilize my plants?</h5>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="faqs2" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Yes. Use a balanced fertilizer once a month during the growing season (spring and summer)</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div className="row pt-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
                {/* =============================FAQS3======================== */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqs3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <h5>How much sunlight do plants need?</h5>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="faqs3" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Indoor plants usually prefer bright indirect light. Some plants like Snake Plant and ZZ Plant can tolerate low light.</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                {/* =============================FAQS4======================== */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqs4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <h5>How do I know if my plant is healthy</h5>
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="faqs4" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Healthy leaves are green and firm. Yellowing leaves, drooping, or brown edges may indicate overwatering, pests, or insufficient light.</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div className="row pt-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
                {/* =============================FAQS5======================== */} 
          <div className="accordion-item">
              <h2 className="accordion-header" id="faqs5">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  <h5>How do I prevent pests on indoor plants?</h5>
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="faqs5" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>Keep leaves clean, avoid overwatering, and use natural pesticides like neem oil if needed.</p>
                </div>
              </div>
            </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                {/* =============================FAQS6======================== */}
          <div className="accordion-item">
              <h2 className="accordion-header" id="faqs6">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  <h5>How do I protect outdoor plants from extreme weather?</h5>
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="faqs6" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>Use shade nets for hot climates and cover plants during frost or heavy rain.</p>
                </div>
              </div>
            </div>
            </div>
        </div>
        <div className="row pt-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
                {/* =============================FAQS7======================== */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="faqs7">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        <h5>Can I reuse soil from old plants?</h5>
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="faqs7" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>It’s better to refresh soil with new compost or potting mix to provide nutrients and avoid pests.</p>
                      </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
               {/* =============================FAQS8======================== */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="faqs8">
                      <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        <h5>What type of soil is best for indoor plants?</h5>
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="faqs8" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Well-draining soil mixed with compost or perlite works best.</p>
                      </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    </>
  )
}

export default Faqs