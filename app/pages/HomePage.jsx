import AllSeller from "../components/all-products/AllProducts";
import BestSeller from "../components/best-seller/BestSeller";
import Categories from "../components/Categories";
import FeatureCards from "../components/FeatureCards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";

export default function HomePage() {
  return (
    <>
      <Header />
      <Menu />
      <Categories />
      <BestSeller />
      <AllSeller />
      <FeatureCards />
      <Footer />
    </>
  );
}
