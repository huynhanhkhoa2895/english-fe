import Mask from "@/molecules/Mask";
import {Vocabulary} from "@/types/common";
import CellVocabulary from "@/molecules/TableVocabulary/CellVocabulary";

type Props = {
    vocabulary: Vocabulary,
    maskVocabularyAll: boolean,
    maskTranslateAll: boolean,
    maskDefineAll: boolean,
    maskExampleAll: boolean,
    isMobile: boolean
}

const RowVocabulary = ({
                           vocabulary,
                           maskVocabularyAll,
                           maskTranslateAll,
                           maskDefineAll,
                           maskExampleAll,
                           isMobile
                       }: Props) => {
    return (
        <tr>
            <td className={'border border-slate-300 p-2 lg:w-[200px]'}>
                <CellVocabulary vocabulary={vocabulary} maskVocabularyAll={maskVocabularyAll}/>
            </td>
            <td className={'border border-slate-300 p-2'}>{vocabulary.translate &&
                <Mask value={vocabulary.translate} haveMask={maskTranslateAll}/>}</td>
            {
                !isMobile && (
                    <>
                        <td className={'border border-slate-300 p-2'}>{vocabulary.definition &&
                            <Mask value={vocabulary.definition} haveMask={maskDefineAll}/>}</td>
                        <td className={'border border-slate-300 p-2'}>{vocabulary.example &&
                            <Mask value={vocabulary.example} haveMask={maskExampleAll}/>}</td>
                    </>
                )
            }
        </tr>
    )
}

export default RowVocabulary