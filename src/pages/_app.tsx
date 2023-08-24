import { type AppType } from "next/dist/shared/lib/utils";
import { gilroy } from "~/assets/fonts";
import "~/assets/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${gilroy.variable}`}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
