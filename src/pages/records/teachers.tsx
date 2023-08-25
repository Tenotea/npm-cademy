import Head from "next/head";
import React from "react";
import RecordsTeachersTemplate from "~/ui/templates/records-teachers-template/RecordsTeachersTemplate";

export default function TeachersRecordPage() {
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
      <RecordsTeachersTemplate />
    </>
  );
}
