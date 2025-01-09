import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common'; // Cleaned up the imports
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students') // Define the base route for this controller
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()  // Handle GET requests to /students
  async getStudents(): Promise<Student[]> {
    return this.studentService.getStudents();  // Fetch all students from the service
  }

  @Post()  // Handle POST requests to /students
  async createStudent(@Body() student: Partial<Student>): Promise<Student> {
    return this.studentService.createStudent(student);  // Create a new student using the service
  }

  @Put(':id')  // Handle PUT requests to /students/:id
  async updateStudent(
    @Param('id') id: number,  // Capture the 'id' parameter from the URL
    @Body() student: Partial<Student>,
  ): Promise<Student> {
    return this.studentService.updateStudent(id, student);  // Update the student by ID using the service
  }

  @Delete(':id')  // Handle DELETE requests to /students/:id
  async deleteStudent(@Param('id') id: number): Promise<void> {
    return this.studentService.deleteStudent(id);  // Delete the student by ID using the service
  }
}
