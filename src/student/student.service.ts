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

  // Update an existing student by ID
  async updateStudent(id: number, studentData: Partial<Student>): Promise<Student> {
    const student = await this.studentRepository.findOne(id);  // Find the student by ID
    if (!student) {
      throw new Error('Student not found');  // Throw error if student is not found
    }

    // Update the student data and save it
    Object.assign(student, studentData);
    return this.studentRepository.save(student);  // Save updated student
  }

  // Delete a student by ID
  async deleteStudent(id: number): Promise<void> {
    const student = await this.studentRepository.findOne(id);  // Find the student by ID
    if (!student) {
      throw new Error('Student not found');  // Throw error if student is not found
    }

    await this.studentRepository.delete(id);  // Delete the student from the database
  }
}
