/* eslint-disable @typescript-eslint/no-namespace */
import { Student } from "@prisma/client";
import HttpClient from "./index";

class StudentClient extends HttpClient {
  constructor() {
    super({
      baseURL: "/api/students",
    });
  }

  async CreateNewStudent(dto: StudentClient.CreateNewStudentDTO) {
    return await this.SendRequest({
      method: "post",
      path: "/",
      body: dto,
    });
  }

  async GetStudents() {
    return await this.SendRequest<Student[]>({
      method: "get",
      path: "/",
    });
  }
}

export const studentClient = new StudentClient();

export namespace StudentClient {
  export type CreateNewStudentDTO = {
    nin: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    studentNumber: string;
  };
}
