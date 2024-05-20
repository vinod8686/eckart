import { Outlet } from "react-router-dom";
import Header from "../component/header/header";
import Footer from "../component/footer/footer";

function Layout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
export default Layout;
