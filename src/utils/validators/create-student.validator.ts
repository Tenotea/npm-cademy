import { z } from "zod";
import { ZRawShapeOf } from "../hooks/useForm";
import { StudentClient } from "~/http-lib/student.client";

export const CreateNewStudentDTOSchema = z.object<
  ZRawShapeOf<StudentClient.CreateNewStudentDTO>
>({
  nin: z
    .string({ required_error: "This field is required" })
    .nonempty({ message: "This field is required" })
    .length(11, {
      message: "Invalid identification number, must be 11 digits",
    })
    .refine((nin) => !isNaN(Number(nin)), {
      message: "Identification number must contain only numbers",
    }),
  dateOfBirth: z.string().refine(
    (dob) => {
      const yearOfBirth = new Date(dob).getFullYear();
      const currentYear = new Date().getFullYear();
      return currentYear - yearOfBirth >= 21;
    },
    { message: "You must be 21 yrs or older" }
  ),
  firstName: z
    .string({ required_error: "This field is required" })
    .nonempty({ message: "This field is required" })
    .min(2, "Enter a valid name"),
  lastName: z
    .string({ required_error: "This field is required" })
    .nonempty({ message: "This field is required" })
    .min(2, "Enter a valid name"),

  studentNumber: z
    .string({ required_error: "This field is required" })
    .nonempty({ message: "This field is required" })
    .length(7, { message: "Invalid number provided, must 7 digits" })
    .refine((nin) => !isNaN(Number(nin)), {
      message: "Teacher No. must contain only numbers",
    }),
});
