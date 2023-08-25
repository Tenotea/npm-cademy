import { type StudentClient } from "~/http-lib/student.client";
import { Database } from "../db";

export class StudentController {
  static async CreateNewStudent(dto: StudentClient.CreateNewStudentDTO) {
    try {
      const student = await Database.student.create({
        data: {
          dateOfBirth: new Date(dto.dateOfBirth),
          firstName: dto.firstName,
          lastName: dto.lastName,
          identificationNumber: dto.nin,
          studentNumber: "SNN " + dto.studentNumber,
        },
      });

      return student;
    } catch (error) {
      throw new Error(
        "An error occurred while creating your student profile. Please try again later."
      );
    }
  }

  static async GetStudents() {
    try {
      const students = await Database.student.findMany();
      return students;
    } catch (error) {
      throw new Error(
        "An error occurred while fetching students records. Please try again later."
      );
    }
  }
}
