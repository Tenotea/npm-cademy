import Head from "next/head";
import React from "react";
import EnrolStudentTemplate from "~/ui/templates/enrol-student-template/EnrolStudentTemplate";

export default function EnrolStudentPage() {
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
      <EnrolStudentTemplate />
    </>
  );
}
