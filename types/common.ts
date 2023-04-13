export type Category = {
  id: string | number;
  name: string;
}

export type AccordionContent = {
  title: string;
  content: string | JSX.Element;
}

export type Vocabulary = {
  id: string | number;
  vocabulary: string;
  translate?: string;
  spelling?: string;
  example?: string;
  sound?: string;
  category?: Category;
}

export type Lesson = {
  id: string | number;
  name: string;
  vocabularies: Vocabulary[]
  createdAt?: string;
}

export type Practice = {
  id: string | number;
  name: string;
  level: string;
  type: string;
  instructions: string;
  content: string;
  questions: Question[]
  createdAt?: string;
}

export type Question = {
  id: string | number;
  title: string;
  type: string;
  description: string;
  contents: QuestionContent[];
}

export type QuestionContent = {
  id: string | number;
  question: string;
  answer: string;
  values?: QuestionContentValues[];
}

export type QuestionContentValues = {
  id: string;
  label : string;
  value : string;
}

export type Result = {
  question : string;
  answer: string;
  correct_answer: string;
  result : boolean;
  question_type: 'vocabulary' | 'question'
}

export type Student = {
  id: string | number;
  name: string;
  position: string;
  type: string;
  practices: Practice[];
  lessons: Lesson[]
}
