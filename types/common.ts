
export type StaticProps = {
  params: {
    id: string | number;
  };
  searchParams?: any
};

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
  transcript?: string;
  parts_of_speech?: string;
  spelling?: string;
  example?: string;
  sound?: string;
  definition?: string;
  category?: Category;
  relationship? : VocabularyRelationship[];
}

export type VocabularyRelationship = {
  relationship : string;
  vocabulary: Vocabulary
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
  media: Media;
  link_video: string;
  content: string;
  questions: Question[]
  createdAt?: string;
}

export type Media = {
  url: string;
  type: string;
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
}

export type Student = {
  id: string | number;
  name: string;
  position: string;
  type: string;
  practices: Practice[];
  lessons: Lesson[]
}

export type PaginationData = {
  data: Vocabulary[],
  total: number
}

