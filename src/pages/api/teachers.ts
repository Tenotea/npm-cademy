import { NextApiRequest, NextApiResponse } from "next";
import { TeachersController } from "~/server/controllers/teachers.controller";
import { CreateNewTeacherDTOSchema } from "~/utils/validators/create-teacher.validator";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      try {
        const dto = await CreateNewTeacherDTOSchema.parseAsync(req.body);
        const teacher = await TeachersController.CreateNewTeacher(dto);
        res.status(200).json({
          statusCode: 200,
          message:
            "You have successfully been enrolled in to the NPMCademy teachers program",
          data: teacher,
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
        const teachers = await TeachersController.GetTeachers();
        res.status(200).json({
          statusCode: 200,
          message: "Successfully retrieved NPMCademy teachers records",
          data: teachers,
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
