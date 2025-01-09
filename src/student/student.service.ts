import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  // Get all students
  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();  // Fetch all students
  }

  // Create a new student
  async createStudent(student: Partial<Student>): Promise<Student> {
    const newStudent = this.studentRepository.create(student);  // Create new student
    return this.studentRepository.save(newStudent);  // Save the student
  }

  // Update an existing student
  async updateStudent(id: number, studentData: Partial<Student>): Promise<Student> {
    const student = await this.studentRepository.findOne(id);  // Find the student by ID
    if (!student) {
      throw new Error('Student not found');
    }

    // Update the student data and save it
    Object.assign(student, studentData);
    return this.studentRepository.save(student);
  }
}
