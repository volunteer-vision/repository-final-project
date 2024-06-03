import { Toaster } from "react-hot-toast";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
    return (
      <>
         <Toaster position="top-right"/>
        <Header />
        <main>{ children }</main>
        <Footer />
      </>
    );
  }