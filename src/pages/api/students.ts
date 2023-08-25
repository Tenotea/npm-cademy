import { NextApiRequest, NextApiResponse } from "next";
import { StudentController } from "~/server/controllers/students.controller";
import { CreateNewStudentDTOSchema } from "~/utils/validators/create-student.validator";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      try {
        const dto = await CreateNewStudentDTOSchema.parseAsync(req.body);
        const student = await StudentController.CreateNewStudent(dto);
        res.status(200).json({
          statusCode: 200,
          message:
            "You have successfully been enrolled in to the NPMCademy student program",
          data: student,
        });
      } catch (error: any) {
        res.status(400).json({
          statusCode: 200,
          message: error.issues[0]?.message || error.message,
        });
      }
      break;
    case "GET":
      try {
        const students = await StudentController.GetStudents();
        res.status(200).json({
          statusCode: 200,
          message: "Successfully retrieved NPMCademy students records",
          data: students,
        });
      } catch (error: any) {
        res.status(400).json({
          statusCode: 200,
          message: error.message,
        });
      }
      break;
    default:
      res.status(405);
  }
}
