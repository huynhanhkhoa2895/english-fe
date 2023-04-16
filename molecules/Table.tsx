import DataTable, {TableColumn} from 'react-data-table-component';
import useSWR from 'swr'
import useVocabulary from "@/hooks/useVocabulary";
import {TableRemote} from "@/types/component";
type Props = {
  datas?: Array<any> | null;
  columns : TableColumn<any>[];
  remote? : TableRemote
}

const Table = ({columns,datas,remote = null} : Props) => {

  const propsPaginate = remote ? {
    pagination: true,
    paginationServer: true,
    handlePerRowsChange: remote.handlePerRowsChange,
    paginationTotalRows : remote.total,
    onChangeRowsPerPage : remote.handlePerRowsChange || null,
    onChangePage: remote.handlePageChange,
    onSort : remote.handleSort || null,
    sortServer: !!remote.handleSort,
    onSelectedRowsChange: remote.handleRowsChange
  } : {}

  return <DataTable
          columns={columns}
          data={datas || []}
          selectableRows
          paginationComponentOptions={{selectAllRowsItem: true,selectAllRowsItemText : 'All'}}
          {...propsPaginate}
      />

}
export default Table