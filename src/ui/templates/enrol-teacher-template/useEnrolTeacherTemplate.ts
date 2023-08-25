import { useRouter } from "next/router";
import { teacherClient } from "~/http-lib/teacher.client";
import { useForm } from "~/utils/hooks/useForm";
import { CreateNewTeacherDTOSchema } from "~/utils/validators/create-teacher.validator";

export default function useEnrolTeacherTemplate() {
  const router = useRouter();
  const form = useForm({
    initialFormData: {
      nin: "",
      firstName: "",
      lastName: "",
      title: "",
      dateOfBirth: "",
      teacherNumber: "",
      salary: "",
    },

    validationSchema: CreateNewTeacherDTOSchema,

    async onSubmit(formData) {
      const { data, error } = await teacherClient.CreateNewTeacher(formData);
      if (data) {
        console.log(data);
        await router.push("/records/teachers");
      }

      if (error) {
        console.error(error);
      }
    },
  });

  return { ...form };
}
