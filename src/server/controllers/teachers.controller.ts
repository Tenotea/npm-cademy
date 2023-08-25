import { Database } from "../db";
import { type TeacherClient } from "~/http-lib/teacher.client";
import { type SupportedTitle } from "@prisma/client";

export class TeachersController {
  static async CreateNewTeacher(dto: TeacherClient.CreateNewTeacherDTO) {
    try {
      const teacher = await Database.teacher.create({
        data: {
          dateOfBirth: new Date(dto.dateOfBirth),
          firstName: dto.firstName,
          lastName: dto.lastName,
          identificationNumber: dto.nin,
          teacherNumber: "TNN " + dto.teacherNumber,
          title: dto.title as SupportedTitle,
          salary: dto.salary ? "$ " + dto.salary : undefined,
        },
      });

      return teacher;
    } catch (error) {
      throw new Error(
        "An error occurred while creating your teacher profile. Please try again later."
      );
    }
  }

  static async GetTeachers() {
    try {
      const teachers = await Database.teacher.findMany();
      return teachers;
    } catch (error) {
      throw new Error(
        "An error occurred while fetching teachers records. Please try again later."
      );
    }
  }
}
