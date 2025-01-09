import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async createStudent(student: Partial<Student>): Promise<Student> {
    return this.studentRepository.save(student);
  }

  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }
  
}
