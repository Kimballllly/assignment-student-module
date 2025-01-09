import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Student } from './student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])], // Register the Student entity
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService], // Export if used in other modules
})
export class StudentModule {}
