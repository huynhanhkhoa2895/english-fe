import {PaginationData, Vocabulary} from "@/types/common";
import Table from "@/molecules/Table";
import useVocabulary from "@/hooks/useVocabulary";
import {TableRemote} from "@/types/component";
import Audio from "@/molecules/Audio";
import Button from "@/atoms/button";
import {useDispatch} from "react-redux";
import {setSelectedVocabularyAction} from "@/reducers/vocabularyReducer";
import {useCallback} from "react";
import Link from "next/link";


const VocabularyTable = () => {
  const dispatch = useDispatch();
  const {paginationData,setPageNumber,setSortField,setPageLimit} = useVocabulary();
  const setSelectedRow = useCallback(
      (vocabularies : Vocabulary[]) => {
        dispatch({type: setSelectedVocabularyAction.type, payload: vocabularies})
      }
      ,[dispatch])
  const data = paginationData()
  const columns : any = [
    {
      name: 'Vocabulary',
      selector: (row: Vocabulary) => row.vocabulary+' '+(row.parts_of_speech?`(${row.parts_of_speech})`:''),
      sortable: true,
      sortField: 'vocabulary',
    },
    {
      name: 'Translate',
      selector:  (row: Vocabulary) => row.translate
    },
    {
      name: 'Spelling',
      selector:  (row: Vocabulary) => row.spelling
    },
    {
      name: 'Sound',
      selector:  (row: Vocabulary) => <Audio src={row?.sound || ''} />
    },
  ]

  const handleSort = (column: any, sortDirection: string) => {
    if(column.sortField) {
      setSortField(column.sortField,sortDirection)
    }
  }

  const handlePerRowsChange = (limit : number) => {
    setPageLimit(limit)
  }

  const handleRowsChange = ({ selectedRows } : any) => {
    setSelectedRow(selectedRows)
  }

  const handlePageChange = (page: number) => {
    setPageNumber(page)
  }

  const handleLearn = () => {

  }

  const remote : TableRemote = {
    total: data?.total || 0,
    handleSort,
    handlePageChange,
    handlePerRowsChange,
    handleRowsChange
  }

  return <>
    <div className={'w-full'}>
      <div className={'flex'}>
        <Link href={'/exercise'}>
          <Button handleClick={handleLearn}>Learn</Button>
        </Link>
      </div>
      <Table
          datas={data?.data || []}
          columns={columns}
          remote={remote}
      />
    </div>
  </>

}
export default VocabularyTable