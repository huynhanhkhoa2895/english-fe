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