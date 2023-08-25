/* eslint-disable @typescript-eslint/no-floating-promises */
import { type Student } from "@prisma/client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { studentClient } from "~/http-lib/student.client";

export default function useRecordsTeachersTemplate() {
  const [students, setStudents] = useState<Student[]>([]);

  async function handleGetStudents() {
    const { data, error } = await studentClient.GetStudents();

    if (error) {
      toast.error(error.message);
    }

    if (data) {
      toast(data.message);
      setStudents(data.data);
    }
  }

  useEffect(() => {
    handleGetStudents();
  }, []);

  return { students };
}
