import DefaultLayout from "@/templates/DefaultLayout";
import LessonTemplate from "@/templates/LessonTemplate";

const vocabularies : Vocabulary[] = [
  {
    id: 1,
    vocabulary: 'test',
    translate: 'kiểm tra'
  },
  {
    id: 2,
    vocabulary: 'dog',
    translate: 'chó'
  },
  {
    id: 3,
    vocabulary: 'cat',
    translate: 'mèo'
  }
]

const lessons : Lesson[] = [
  {
    id: 1,
    name: "Lesson 1",
    vocabularies: vocabularies
  },
  {
    id: 2,
    name: "Lesson 1",
    vocabularies: vocabularies
  }
]

export default function Home() {
  return (
    <DefaultLayout>
      <LessonTemplate lessons={lessons} />
    </DefaultLayout>
  );
}
