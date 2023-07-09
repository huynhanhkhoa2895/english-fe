'use client';
import Box from "@/molecules/Box";
import {Lesson, Practice} from "@/types/common";


type Props = {
  data : Lesson[] | Practice[]
  variant? : string
}

const ListTemplate = ({data,variant="lesson"} : Props) => {

  const RenderList: any = () => {
    let xhtml : JSX.Element[] = [];
    xhtml = data.map((data : Lesson | Practice)=>{
      return <Box variant={variant || ''} key={data.id} data={data} />
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
export default ListTemplate;