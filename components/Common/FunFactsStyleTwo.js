import React from 'react';

const FunFactsStyleTwo = () => {
    return (
        <div className="counter-area-two pt-100 pb-70 jarallax">
			<div className="container">
				<div className="row">
					{/* <div className="col-lg-3 col-md-6 col-sm-6">
						<div className="single-counter">
							<h2>
                                950 <span className="target">+</span>
							</h2>
							<p>Completed Project</p>
						</div>
					</div> */}

					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="single-counter">
							<h2>
                                100+ <span className="target">+</span>
							</h2>
							<p>{t("Countries")}</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="single-counter">
							<h2>
                                40,000+ <span className="traget">+</span>
							</h2>
							<p>{t("Customers")}</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="single-counter">
							<h2>
                                3 <span className="target">+</span>
							</h2>
							<p>{t("Celebrating our 3rd year in business")}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default FunFactsStyleTwo;