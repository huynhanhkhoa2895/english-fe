import {createAction} from "@reduxjs/toolkit";

export const setIndexDisplayAction = createAction<any,any>('setIndexDisplay',() =>
  (index: number) => ({payload : index})
);