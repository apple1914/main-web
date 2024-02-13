import Leveler from "./Leveler"


export default function PaymentStatusComponent({ isSuccess }) {
  //@ts-ignore
  return (
    <div className="content py-4">
      <div className="container">
        <div></div>
        <div></div>
        <div></div>

        <div className="row">
          <div className="col-md-9 col-lg-7 col-xl-6 mx-auto w-auto">
            <div className="bg-white text-center shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
              {isSuccess ? (
                <>
                  <div className="my-4">
                    <p className="lead">{"Payment Success! Your money will be delivered soon"}</p>
                  </div>
                 
                </>
              ) : (
                <>
                  <div className="my-4">
                    <p className="lead">{"Failed"}</p>
                  </div>
                  <p className="text-3 mb-4">{"Try one more time"}</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="pt-5 mb-5">
          <Leveler 
           level={3}/>
        </div>
      </div>
    </div>
  );
}
