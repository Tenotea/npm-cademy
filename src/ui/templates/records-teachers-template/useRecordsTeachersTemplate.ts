/* eslint-disable @typescript-eslint/no-floating-promises */
import { type Teacher } from "@prisma/client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { teacherClient } from "~/http-lib/teacher.client";

export default function useRecordsTeachersTemplate() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  async function handleGetTeachers() {
    const { data, error } = await teacherClient.GetTeachers();
    console.log(data, error);

    if (error) {
      toast.error(error.message);
    }

    if (data) {
      toast(data.message);
      setTeachers(data.data);
    }
  }

  useEffect(() => {
    handleGetTeachers();
  }, []);

  return { teachers };
}
