import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common'; // Import Delete
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getStudents(): Promise<Student[]> {
    return this.studentService.getStudents();
  }

  @Post()
  async createStudent(@Body() student: Partial<Student>): Promise<Student> {
    return this.studentService.createStudent(student);
  }

  @Put(':id')
  async updateStudent(
    @Param('id') id: number, 
    @Body() student: Partial<Student>,
  ): Promise<Student> {
    return this.studentService.updateStudent(id, student);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: number): Promise<void> {
    return this.studentService.deleteStudent(id);
  }
}