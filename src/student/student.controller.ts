import { Controller, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Body() student: Partial<Student>): Promise<Student> {
    return this.studentService.createStudent(student);
  }
}
