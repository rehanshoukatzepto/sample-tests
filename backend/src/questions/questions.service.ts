import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question, QuestionDocument } from './schemas/question.schema';
import { Model } from 'mongoose';

@Injectable()
export class QuestionsService {

  constructor(@InjectModel(Question.name) private questionModel: Model<QuestionDocument>) {}

  populateDefaults() {
    this.questionModel.find({}, (err, questions) => {

      if(questions.length === 0) {
        // List of default questions
        let defaultQuestions = [{
          title: 'Name of the screen that recognizes touch input is',
          description: '',
          correctAnswer: 'Touch Screen',
          options: ['Recog screen', 'Point Screen', 'Touch Screen', 'Android Screen']
        },
        {
          title: 'Identify the device through which data and instructions are entered into a computer',
          description: '',
          correctAnswer: 'Input device',
          options: ['Software', 'Output device', 'Input device', 'Memory']
        },
        {
          title: 'Computer Moniter is also known as :',
          description: '',
          correctAnswer: 'VDUD',
          options: ['DVUB', 'UVD', 'VDUD', 'CCTV']
        },
        {
          title: 'Which one of these stores more data than a DVD?',
          description: '',
          correctAnswer: 'Blue Ray Disk',
          options: ['CD Rom', 'Floppy', 'Blue Ray Disk', 'Red Ray Disk']
        },
        {
          title: 'The output shown on the computer monitor is called',
          description: '',
          correctAnswer: 'Soft Copy',
          options: ['VDU', 'Hard Copy', 'Soft Copy', 'Screen Copy']
        },
        {
          title: 'Eight Bits make up a',
          description: '',
          correctAnswer: 'byte',
          options: ['byte', 'megabyte', 'kilobyte', 'None']
        },
        {
          title: 'Which one is the result of the output given by a computer',
          description: '',
          correctAnswer: 'Information',
          options: ['Data', 'Istruction', 'Information', 'Excursion']
        },
        {
          title: 'Which one of these also known as read/write memory ?',
          description: '',
          correctAnswer: 'RAM',
          options: ['ROM', 'RAM', 'DVD', 'Hard Disk']
        }];

        this.questionModel.insertMany(defaultQuestions);
      }
    });
  }

  create(createQuestionDto: CreateQuestionDto) {
    return 'This action adds a new question';
  }

  findAll() {
    // Exclude correctAnswer key to provide security
    return this.questionModel.find().select({correctAnswer: false}).exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }

  // Get all questions with correctAnswer to calculate the test percentage
  getAllQuestions() {
    return this.questionModel.find().exec();
  }
}
