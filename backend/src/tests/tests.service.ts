import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionsService } from 'src/questions/questions.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test, TestDocument } from './schemas/test.schema';

@Injectable()
export class TestsService {

  constructor(@InjectModel(Test.name) private testModel: Model<TestDocument>, private readonly questionsService: QuestionsService) {}

  async create(createTestDto: CreateTestDto) {
    // Get all questions for correct answers to match
    let questions = await this.questionsService.getAllQuestions();
    let corrects = []; 
    
    // Find correct results and generate array
    let percentageCalculation = questions.map((question, index) => {
        if(createTestDto.questions[question._id] === question.correctAnswer) {
          corrects.push(question._id);
        }
        return true;
    });

    // Delete questions key
    delete createTestDto.questions;
    // Fix percentage
    createTestDto.percentage = parseFloat((corrects.length/questions.length * 100).toFixed(2));

    // Add test record
    const createdTest = new this.testModel({...createTestDto, createdAt: new Date()});
    return createdTest.save().then(doc => { return doc; })
    .catch(err => { return { status: 'error', message: err.message } });
  }

  findAll() {
    // Return all tests list
    return this.testModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
