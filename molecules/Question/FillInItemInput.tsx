import {forwardRef, useEffect, useState} from "react";
import {twMerge} from "tailwind-merge";
import {useController} from "react-hook-form";

type Props = {
    valueChoose: string | null,
    onChoose: any,
    control: any,
    name: string,
    isSubmit: boolean
}

const FillInItemInput = forwardRef(({valueChoose, control, name, onChoose, isSubmit}: Props, ref) => {
    const {field} = useController({control, name});
    const [isChoose, setChoose] = useState<boolean>(false)
    const [value, setValue] = useState("")
    useEffect(() => {
        if (valueChoose === value) {
            setChoose(true)
        } else {
            setChoose(false)
        }
    }, [valueChoose])

    useEffect(() => {
        field.onChange(value)
    }, [value])

    const handleQuestionChoose = () => {
        if (!isSubmit) {
            if (valueChoose) {
                setValue(valueChoose)
                if (value != "") {
                    onChoose && onChoose(value, "replace")
                } else {
                    onChoose && onChoose(valueChoose, "add")
                }

            } else {
                if (value != "") {
                    setValue("")
                    onChoose && onChoose(value, "remove")
                }
            }
        }


    }

    return (
        <div
            className={
                twMerge(
                    'border-2 border-gray-500 outline-none px-3 min-h-[30px]',
                    valueChoose ? 'bg-gray-500 cursor-pointer text-white' : 'bg-white text-black'
                )
            }
            onClick={handleQuestionChoose}
        >
            <span className={'cursor-pointer'}>{value}</span>
        </div>
    )
})
export default FillInItemInput