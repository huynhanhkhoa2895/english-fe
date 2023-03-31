import Mask from "@/molecules/Mask";

type Props = {
  data : Vocabulary[]
}

const TableVocabulary = ({data} : Props) => {
  const RenderVocabulary = () => {
    return  data.map((vocabulary : Vocabulary)=> <tr key={vocabulary.id}>
      <td className={'border border-slate-300 p-2'}><Mask value={vocabulary.vocabulary} /> </td>
      <td className={'border border-slate-300 p-2'}>{vocabulary.translate && <Mask value={vocabulary.translate}/>}</td>
    </tr>)
  }
  return(
    <table className={'table-fixed w-full border-collapse border border-slate-400'}>
      <thead>
        <tr>
          <th className={'border border-slate-300 p-3 '}>Vocabulary</th>
          <th className={'border border-slate-300 p-3 '}>Translate</th>
        </tr>
      </thead>
      <tbody>
      {
        <RenderVocabulary />
      }
      </tbody>
    </table>
  )
}
export default TableVocabulary