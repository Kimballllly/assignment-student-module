import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student/student.entity';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'paperazzi.cre40o0wmfru.ap-southeast-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'paperazzi',
      database: 'student_db',
      entities: [Student],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Student]),
    StudentModule,
  ],
})
export class AppModule {}
