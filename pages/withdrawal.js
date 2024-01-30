// import Stepper from "@/components/Stepper";
import WithdrawalLevels from "../components/Common/WithdrawalLevels";

function Withdrawal() {
  //@ts-ignore
  const lng = "ru"


  
  return (
    <div id="content" className="py-4 bg-white">
      <div className="container">
        <div className="mx-auto text-center pt-5">Withdrawal</div>
        <div className="row pt-5">
          <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
            <WithdrawalLevels lng={lng}/>
          </div>
        </div>
        {/* <div className="pt-5">
          <Stepper lng={lng} level={level}/>
        </div> */}
      </div>
    </div>
  );
}

export default Withdrawal;
