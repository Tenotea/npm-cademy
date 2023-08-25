import { useRouter } from "next/router";
import { StudentClient, studentClient } from "~/http-lib/student.client";
import { useForm } from "~/utils/hooks/useForm";
import { CreateNewStudentDTOSchema } from "~/utils/validators/create-student.validator";

export default function useEnrolStudentTemplate() {
  const router = useRouter();
  const form = useForm<StudentClient.CreateNewStudentDTO>({
    initialFormData: {
      firstName: "",
      lastName: "",
      nin: "",
      dateOfBirth: "",
      studentNumber: "",
    },

    validationSchema: CreateNewStudentDTOSchema,

    async onSubmit(formData) {
      const { data, error } = await studentClient.CreateNewStudent(formData);
      if (data) {
        await router.push("/records/students");
      }

      if (error) {
        console.log(error);
      }
    },
  });

  return { ...form };
}
