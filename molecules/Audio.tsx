const Audio = ({src} : {src : string}) => {
  return(
      <audio controls autoPlay>
        <source src={src} type="audio/mpeg" />
      </audio>
  )
}
export default Audio