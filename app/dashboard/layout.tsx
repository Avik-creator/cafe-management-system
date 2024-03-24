import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/sideBar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Sidebar className="hidden lg:flex" />
      <Navbar />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0 mt-11">
        <div className="max-w-[1056px] mx-auto pt-6 h-full">{children}</div>
      </main>
    </>
  );
};

export default Layout;
