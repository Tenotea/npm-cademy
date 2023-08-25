/* eslint-disable @next/next/no-img-element */
import React from "react";
import RecordsLayout from "~/ui/layouts/records-layout/RecordsLayout";
import useRecordsTeachersTemplate from "./useRecordsTeachersTemplate";
import { getAgeFromDate, getDateFromISOString } from "~/utils/utils.index";

export default function RecordsStudentsTemplate() {
  const { students } = useRecordsTeachersTemplate();
  return (
    <RecordsLayout
      title="Students"
      headers={[
        { id: "id", name: "S/N" },
        { id: "name", name: "Student Name" },
        { id: "nin", name: "Identification NUmber" },
        { id: "studentNumber", name: "Student Number" },
        { id: "createdAt", name: "Date Joined" },
      ]}
      data={students.map((t, i) => ({
        id: <span className="text-app-gray-accent-1"> {"#" + (i + 1)}</span>,
        name: (
          <div className="flex flex-grow-[2] items-start gap-3 border-app-gray-accent-5 ">
            <img
              src={`https://ui-avatars.com/api/?format=svg&rounded=true&background=random&name=${t.firstName}+${t.lastName}&font-size=0.3&bold=true`}
              alt="teacher's name"
              className="h-[35px]"
            />
            <div className="font-semibold">
              <p className="text-base font-semibold">
                {t.firstName} {t.lastName}
              </p>
              <span
                className="block text-xs font-light"
                suppressHydrationWarning
              >
                {getAgeFromDate(t.dateOfBirth as unknown as string)} Years Old
              </span>
            </div>
          </div>
        ),
        nin: t.identificationNumber,
        studentNumber: t.studentNumber,
        createdAt: (
          <div>
            {getDateFromISOString(t.createdAt as unknown as string).date}
            <br />
            <span className="block text-xs">
              {getDateFromISOString(t.createdAt as unknown as string).time}
            </span>
          </div>
        ),
      }))}
    />
  );
}
