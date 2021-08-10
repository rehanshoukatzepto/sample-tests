export class CreateQuestionDto {
    title: string
    description?: string
    correctAnswer: string
    options: string[]
}