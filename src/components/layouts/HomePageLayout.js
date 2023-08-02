import Menu from "../UI/Menu";
import Footer from "../UI/Footer";
import HeroSection from "../UI/HeroSection";

function HomePageLayout({ children }) {
  return (
    <div>
      <Menu />
      <HeroSection />
      <main className="my-20 md:my-32 mx-12 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}

export default HomePageLayout;
