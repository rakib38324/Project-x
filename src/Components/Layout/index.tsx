import Head from "next/head";
import { ReactNode, useEffect, useState } from "react";
import NavBar from "../Common/NavBar";
import NavBody from "../Common/NavBody";
import Footer from "../Common/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

type TPropsType = {
  children: ReactNode;
  pageTitle: string;
};

const Layout = ({ children, pageTitle }: TPropsType) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  },[])

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        
      </Head>

      <NavBar setOpen={setOpen} open={open} />

      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {open && <NavBody />}
      </div>

      <main className={`${open ? "hidden" : "block"}`}>{children}</main>

      {!open && <Footer />}
    </>
  );
};

export default Layout;
