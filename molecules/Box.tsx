import Image from "next/image";

const Box = () => {
  return(
      <div className={'flex'}>
        <div>
          <Image src={'/assets/img/box-1.jpg'} alt={'box'} />
        </div>
        <div>
          <div>Title</div>
          <div>Number of vocabulary</div>
          <div>Create At</div>
        </div>
      </div>
  )
}
export default Box