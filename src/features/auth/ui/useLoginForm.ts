import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "../application/useLoginMutation";
import type { LoginCredentials } from "../domain/auth.types";

export const loginSchema = yup
  .object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required")
  })
  .required();

export const useLoginForm = () => {
  const methods = useForm<LoginCredentials>({
    defaultValues: {
      username: "admin",
      password: "photoDeliveryService"
    },
    resolver: yupResolver(loginSchema),
    mode: "onTouched"
  });

  const mutation = useLoginMutation();
  const { isError, isPending, reset } = mutation;

  const onSubmit: SubmitHandler<LoginCredentials> = (credentials) => {
    mutation.mutate(credentials);
  };

  return {
    methods,
    isError,
    isPending,
    resetError: reset,
    handleSubmit: methods.handleSubmit(onSubmit)
  };
};
