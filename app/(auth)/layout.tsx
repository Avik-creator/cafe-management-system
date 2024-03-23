import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="dark:bg-black">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
