import Preloader from "./Preloader";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Preloader />
      <Header />
      <SideMenu />

      <main>{children}</main>

      <Footer />
    </>
  );
}
