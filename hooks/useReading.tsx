import {LegacyRef, useEffect} from "react";

const useReading = (refReading: any) => {

  useEffect(()=>{
    console.log("document",document)
    if(document && refReading && refReading?.current) {
      // refReading.current.addEventListener("mouseup",handleMouseUp)
      refReading.current.addEventListener("touchend",handleTouch)

    }
    return () => {
      // refReading && refReading.current && refReading.current.removeEventListener("mouseup",handleMouseUp)
      refReading && refReading.current && refReading.current.removeEventListener("touchend",handleTouch)

    }
  },[])

  function handleTouch(e : any){
    // console.log("selection",window.getSelection().toString())
    // console.log("selection2",document.getSelection().toString())
  }

  const handleMouseUp = (e: MouseEvent) => {
    const ele : HTMLDivElement = refReading.current
    console.log("handleMouseUp")
    if(document) {
      const textSelect = document?.getSelection()?.toString();
      if(textSelect && textSelect !== '') {
        alert(textSelect)
      }
    }
  }

  return {}
}
export default useReading