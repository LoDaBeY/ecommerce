import Footer from "../../Components/Footer/Footer";
import Cart from "../../Pages/Cart/Cart";
import HeroSection from "../../Pages/HeroSection/HeroSection";
import IconsSeaction from "../../Pages/Icons/IconsSeaction";

function Dashboard() {
  return (
    <div>
      <HeroSection/>
      <IconsSeaction/>
      <Cart/>
      <Footer/>
    </div>
  );
}

export default Dashboard;
