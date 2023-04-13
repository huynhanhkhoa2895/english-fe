import { useForm } from 'react-hook-form';
import React from 'react';
import Button from "@/atoms/button";

type PropsForm = {
  defaultValues: {
    [key: string]: any;
  };
  idForm?: string;
};

type PropsChildForm = {
  onSubmit: any;
  submitText?: JSX.Element|string;
  loading?: boolean;
  idStep?: string;
};
const withForm = (FieldsComponent: any, infoForm: PropsForm) => {
  // eslint-disable-next-line react/display-name
  return ({ onSubmit, submitText, loading, idStep }: PropsChildForm) => {
    const {
      control,
      handleSubmit,
      formState: { errors }
    } = useForm({
      defaultValues: infoForm.defaultValues
    });
    return (
      <form onSubmit={handleSubmit(onSubmit)} id={`form${infoForm.idForm}`}>
        <FieldsComponent
          loading={loading || false}
          control={control}
          errors={errors}
        />
        <Button
          disabled={loading || false}
        >
          {submitText || ''}
        </Button>
      </form>
    );
  };
};
export default withForm;
