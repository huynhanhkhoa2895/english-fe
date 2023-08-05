import ReactPlayer from "react-player";
import {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";

type Props = {
    src: string
    playing: boolean;
}

const Video = forwardRef(({src, playing}: Props, ref) => {
    const videoRef: any = useRef(null)
    const [isWindow, setIsWindow] = useState<boolean>(false)

    useEffect(() => {
        if (!isWindow) setIsWindow(true)
    }, [])

    useImperativeHandle(ref, () => {
        function seekTo(amount: number) {
            if (videoRef.current) {
                videoRef.current.seekTo(amount)
            }
        }
    })

    return (
        <div className={'relative w-full max-w-full xl:max-w-[500px] mx-auto'}>
            {isWindow && <ReactPlayer
                className={'!w-full'}
                ref={videoRef}
                url={src}
                playing={playing}
                controls={true}
            />}
        </div>


    )
})

export default Video