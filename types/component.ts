import {QuestionContent} from "@/types/common";

export type ComponentWithForm = {
  isSubmit?: boolean,
  dataPush?: any,
  errors?: any;
  isShowAnswer?: boolean;
  control : any;
  datas : any[];
  submitSuccess?: any;
  clickForSubmit?: boolean;
}

export type TableRemote = {
  total: number,
  handlePerRowsChange?: any,
  handlePageChange: any,
  handleSort?: any,
  handleRowsChange?: any
} | null