import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className=" max-w-[1024px]  my-0 mx-auto">
        {children}
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Layout;
