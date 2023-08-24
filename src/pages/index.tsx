import Head from "next/head";
import IndexTemplate from "~/ui/templates/index-template/IndexTemplate";

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
      <IndexTemplate />
    </>
  );
}
