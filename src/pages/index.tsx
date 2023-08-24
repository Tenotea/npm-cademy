import Head from "next/head";
import { IM_SiteLogo } from "~/assets/images";
import RoleListItemView from "~/ui/components/list-item/views/RoleListItemView";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>NPM Cademy - Pseudo Learning Platform</title>
        <meta
          name="description"
          content="Designed and Implemented by Tenotea"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  );
}
