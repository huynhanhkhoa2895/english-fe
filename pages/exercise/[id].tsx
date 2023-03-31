import DefaultLayout from "@/templates/DefaultLayout";
import LessonDetailTemplate from "@/templates/LessonDetailTemplate";
import LessonExcersiseTemplate from "@/templates/LessonExcersiseTemplate";

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

const lesson : Lesson = {
    id: 1,
    name: "Lesson 1",
    vocabularies: vocabularies
}

const Lesson = ({lesson} : {lesson : Lesson}) => {
  return(
    <DefaultLayout>
      <LessonExcersiseTemplate lesson={lesson} />
    </DefaultLayout>
  )
}
export default Lesson

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  // const id = context?.params.id
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  return {
    props: {
      lesson,
    },
  }
}