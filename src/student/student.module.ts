import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Student])], // Register Student repository here
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
