import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TestDocument = Test & Document;

@Schema()
export class Test {
  @Prop({required: true})
  studentName: string;

  @Prop({required: true})
  percentage: number;

  @Prop({required: true})
  duration: number;

  @Prop({ required: true })
  createdAt: Date;
}

export const TestSchema = SchemaFactory.createForClass(Test);