import Head from "next/head";
import React from "react";
import EnrolTeacherTemplate from "~/ui/templates/enrol-teacher-template/EnrolTeacherTemplate";

export default function EnrolTeacherPage() {
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
      <EnrolTeacherTemplate />
    </>
  );
}
