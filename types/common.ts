type Category = {
  id: string | number;
  name: string;
}

type Vocabulary = {
  id: string | number;
  vocabulary: string;
  translate?: string;
  spelling?: string;
  example?: string;
  sound?: string;
  category?: Category;
}

type Lesson = {
  id: string | number;
  name: string;
  vocabularies: Vocabulary[]
  createdAt?: string;
}