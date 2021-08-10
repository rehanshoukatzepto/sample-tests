import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';
import { Test, TestSchema } from './schemas/test.schema';
import { MongooseModule } from '@nestjs/mongoose';
// Import QuestionsModule to be used in tests
import { QuestionsModule } from 'src/questions/questions.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Test.name, schema: TestSchema }]), QuestionsModule],
  controllers: [TestsController],
  providers: [TestsService]
})

export class TestsModule {}
