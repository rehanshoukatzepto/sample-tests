import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TestsModule } from './tests/tests.module';
import { QuestionsModule } from './questions/questions.module';
const config = require('../config.json');

@Module({
  imports: [MongooseModule.forRoot(config.mongoDBConnectionString), TestsModule, QuestionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
