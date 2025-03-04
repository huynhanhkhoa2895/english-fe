import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic} from '@fortawesome/free-solid-svg-icons'
import {useRef} from "react";
import {PlayCircleOutlined} from "@ant-design/icons";

const Audio = ({src, autoplay = false, icon = true, module = 'vocabulary'}: {
    src: string,
    autoplay?: boolean,
    icon?: boolean,
    module?: string
}) => {
    const ref = useRef<HTMLAudioElement | null>(null);

    const handleClick = () => {
        if (ref.current) {
            ref.current.play()
        }
    }

    return (
        <>
            {
                icon ?
                    <div className={'cursor-pointer'} onClick={() => handleClick()}>
                        <PlayCircleOutlined />
                        <audio ref={ref} className={'hidden'} controls autoPlay={autoplay}>
                            <source
                                src={(module === 'interview_question' ? process.env.NEXT_PUBLIC_APP_BE + '/storage/interview/' : process.env.NEXT_PUBLIC_APP_BE + '/storage/speech/') + src}
                                type="audio/mpeg"/>
                        </audio>
                    </div>
                    :
                    <audio ref={ref} className={'w-full'} controls autoPlay={autoplay}>
                        <source src={src} type="audio/mpeg"/>
                    </audio>
            }
        </>


    )
}
export default Audio
