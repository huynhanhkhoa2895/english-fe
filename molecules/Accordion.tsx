import {HeadlessAccordion} from '@tenaspace/react-headless-accordion'
import {AccordionContent} from "@/types/common";
import {twMerge} from 'tailwind-merge'

type Props = {
    list: AccordionContent[]
    classNameItem?: string;
    defaultOpen?: boolean
}

const Accordion = ({list, classNameItem = '', defaultOpen = false}: Props) => {
    return (
        <>
            <HeadlessAccordion defaultActiveKey={defaultOpen ? [`0`, '1'] : []} multipleOpen>
                {list.map((item, key) => (
                    <HeadlessAccordion.Item className={'mb-3'} key={key} eventKey={`${key}`}>
                        {({open}) => {
                            return (
                                <>
                                    <HeadlessAccordion.Button
                                        className={'bg-primary text-white p-2 rounded-tl-2xl rounded-tr-2xl font-mono'}
                                        style={{cursor: `pointer`}}>
                                        {item.title} {open ? `-` : `+`}
                                    </HeadlessAccordion.Button>
                                    <HeadlessAccordion.Panel
                                        style={{
                                            transitionProperty: `max-height`,
                                            transitionDuration: `0.2s`,
                                        }}
                                    >
                                        <div
                                            className={twMerge('p-2 border rounded-bl-2xl rounded-br-2xl border-gray-500 overflow-auto', classNameItem)}>{item.content}</div>
                                    </HeadlessAccordion.Panel>
                                </>
                            )
                        }}
                    </HeadlessAccordion.Item>
                ))}
            </HeadlessAccordion>
        </>
    )
}
export default Accordion