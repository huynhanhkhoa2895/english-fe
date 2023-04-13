import {QuestionContent} from "@/types/common";

export type ComponentWithForm = {
  isSubmit : boolean,
  dataPush : {[key : string] : string}[],
  isShowAnswer : boolean;
  control : any;
}