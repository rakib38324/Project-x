import Head from "next/head";
import { ReactNode, useState } from "react";
import NavBar from "../Common/NavBar";
import NavBody from "../Common/NavBody";

type TPropsType = {
  children: ReactNode;
  pageTitle: string;
};

const Layout = ({ children, pageTitle }: TPropsType) => {
  const [open, setOpen] = useState(false);
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

      <main>{children}</main>
    </>
  );
};

export default Layout;
