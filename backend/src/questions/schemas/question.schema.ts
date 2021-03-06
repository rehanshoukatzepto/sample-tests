import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema()
export class Question {
  @Prop({required: true})
  title: string;

  @Prop()
  description: string;

  @Prop({required: true})
  correctAnswer: string;

  @Prop({required: true})
  options: string[]
}

export const QuestionSchema = SchemaFactory.createForClass(Question);