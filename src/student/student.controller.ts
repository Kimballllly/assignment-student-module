import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common'; // Cleaned up the imports
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students') // Define the base route for this controller
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()  // Handle GET requests to /students
  async getStudents(): Promise<Student[]> {
    return this.studentService.getStudents();  // Assuming this method is defined in the service
  }

  @Post()  // Handle POST requests to /students
  async createStudent(@Body() student: Partial<Student>): Promise<Student> {
    return this.studentService.createStudent(student);  // Assuming this method is defined in the service
  }

  @Put(':id')  // Handle PUT requests to /students/:id
  async updateStudent(
    @Param('id') id: number,  // Capture the 'id' parameter from the URL
    @Body() student: Partial<Student>,
  ): Promise<Student> {
    return this.studentService.updateStudent(id, student);  // Assuming this method is defined in the service
  }
}
