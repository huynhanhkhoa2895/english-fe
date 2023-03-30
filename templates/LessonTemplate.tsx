import Box from "@/molecules/Box";


type Props = {
  lessons : Lesson[]
}

const LessonTemplate = ({lessons} : Props) => {

  const RenderList = () => {
    let xhtml : JSX.Element[] = [];
    xhtml = lessons.map((lesson : Lesson)=>{
      return <Box lesson={lesson} />
    });
    return xhtml
  }

  return(
    <>
      <RenderList />
    </>
  )
}
export default LessonTemplate;