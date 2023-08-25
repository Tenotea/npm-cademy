import "react-toastify/dist/ReactToastify.min.css";
import { type AppType } from "next/dist/shared/lib/utils";
import { ToastContainer } from "react-toastify";
import { gilroy } from "~/assets/fonts";
import "~/assets/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${gilroy.variable}`}>
      <Component {...pageProps} />
      <ToastContainer />
    </div>
  );
};

export default MyApp;
