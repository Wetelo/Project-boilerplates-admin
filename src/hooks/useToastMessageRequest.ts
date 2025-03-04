import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { getErrorMessage } from '@/utils';
import { IResponseHttpError } from '@/utils/errors';

export enum ResponseStatus {
  Error = 'error',
  Success = 'success',
}

interface IUseToastMessageRequestProps {
  isSuccess: boolean;
  isError: boolean;
  successMessage?: string;
  errorMessage?: string;
  error?: FetchBaseQueryError | SerializedError;
}

interface AdditionalPropsType {
  condition: boolean;
  message: {
    text: string;
    status: ResponseStatus;
  };
}

const defaultErrorMessage = 'Something wrong!';
const defaultSuccessMessage = 'Request was successfully!';

const useToastMessageRequest = (
  { isSuccess, isError, errorMessage, error }: IUseToastMessageRequestProps,
  additionalProps?: AdditionalPropsType,
) => {
  useEffect(() => {
    if (additionalProps?.condition) {
      const { text, status } = additionalProps.message;
      if (status === ResponseStatus.Error) toast.error(text);
      if (status === ResponseStatus.Success) toast.success(text);
      return;
    }
    if (isSuccess) {
      toast.success(defaultSuccessMessage);
    }
    if (isError) {
      const serverError = error as IResponseHttpError;
      const toastError = getErrorMessage(serverError) ?? errorMessage ?? defaultErrorMessage;
      toast.error(Array.isArray(toastError) ? toastError.join(',') : toastError);
    }
  }, [isSuccess, isError, error, additionalProps?.condition, additionalProps?.message, errorMessage]);
};

export default useToastMessageRequest;
