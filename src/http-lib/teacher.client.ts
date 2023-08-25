import { type Teacher } from "@prisma/client";
import HttpClient from "./index";

class TeacherClient extends HttpClient {
  constructor() {
    super({
      baseURL: "/api/teachers",
    });
  }

  async CreateNewTeacher(dto: TeacherClient.CreateNewTeacherDTO) {
    return await this.SendRequest({
      method: "post",
      path: "/",
      body: dto,
    });
  }

  async GetTeachers() {
    return await this.SendRequest<Teacher[]>({
      method: "get",
      path: "/",
    });
  }
}

export const teacherClient = new TeacherClient();

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace TeacherClient {
  export type CreateNewTeacherDTO = {
    nin: string;
    firstName: string;
    lastName: string;
    title: string;
    dateOfBirth: string;
    teacherNumber: string;
    salary: string;
  };
}
