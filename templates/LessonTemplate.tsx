import Box from "@/molecules/Box";


type Props = {
  lessons : Lesson[]
}

const LessonTemplate = ({lessons} : Props) => {

  const RenderList: any = () => {
    let xhtml : JSX.Element[] = [];
    xhtml = lessons.map((lesson : Lesson)=>{
      return <Box key={lesson.id} lesson={lesson} />
    });
    return xhtml
  }

  return(
    <>
      <div className={'flex flex-col gap-3'}>
        <RenderList />
      </div>

    </>
  )
}
export default LessonTemplate;