// import Stepper from "@/components/Stepper";
import CheckoutMain from "../components/Common/CheckoutMain";

import Navbar3 from '../components/_App/Navbar3';
import MainBanner from '../components/HomeTwo/MainBanner';
import OurFeatures from '../components/HomeTwo/OurFeatures';
import AboutUs from '../components/HomeTwo/AboutUs';
import Services from '../components/HomeTwo/Services';
import OffersArea from '../components/Common/OffersArea';
import WhyChooseUs from '../components/HomeTwo/WhyChooseUs';
import TeamSlider from '../components/Common/TeamSlider';
import FunFactsStyleTwo from '../components/Common/FunFactsStyleTwo';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import ContactWithUs from '../components/HomeTwo/ContactWithUs';
import Footer from '../components/_App/Footer';
import RedirectIfNotSignedIn from "../components/Common/RedirectIfNotSignedIn"
import CaptureMarketingInfo from '../components/Common/CaptureMarketingInfo';


function Withdrawal() {
  //@ts-ignore
  const lng = "ru"


  
  return (
    <>
    <Navbar3 />

    <CheckoutMain lng={lng}/>
    <Footer />
    <CaptureMarketingInfo />
    <RedirectIfNotSignedIn/>

    </>
    
  );
}

export default Withdrawal;
