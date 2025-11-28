"use client";

import React from "react";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

// -----------------------------------------------------
// FORM CONTEXT
// -----------------------------------------------------
export const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

// -----------------------------------------------------
// FORM FIELD
// -----------------------------------------------------
export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: ControllerProps<TFieldValues, TName>
) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

// -----------------------------------------------------
// FORM ITEM CONTEXT
// -----------------------------------------------------
type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

// Hook combining field + item context
export function useFormField() {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);

  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField must be used inside <FormField>");
  }

  const { id } = itemContext;

  return {
    ...fieldState,
    id,
    name: fieldContext.name,
    formItemId: `${id}-item`,
    formDescriptionId: `${id}-desc`,
    formMessageId: `${id}-msg`,
  };
}

// -----------------------------------------------------
// FORM ITEM WRAPPER
// -----------------------------------------------------
export function FormItem({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={`grid gap-2 ${className}`} {...props} />
    </FormItemContext.Provider>
  );
}

// -----------------------------------------------------
// FORM LABEL
// -----------------------------------------------------
export function FormLabel({
  className = "",
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const { error, formItemId } = useFormField();

  return (
    <label
      htmlFor={formItemId}
      className={`${
        error ? "text-red-600" : ""
      } text-sm font-medium ${className}`}
      data-slot="form-label"
      data-error={!!error}
      {...props}
    />
  );
}

// -----------------------------------------------------
// FORM CONTROL (wraps input/select/textarea)
// -----------------------------------------------------
export function FormControl({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <div
      id={formItemId}
      aria-invalid={!!error}
      aria-describedby={
        error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId
      }
      className={className}
      data-slot="form-control"
      {...props}
    />
  );
}

// -----------------------------------------------------
// FORM DESCRIPTION
// -----------------------------------------------------
export function FormDescription({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      id={formDescriptionId}
      className={`text-sm text-gray-500 ${className}`}
      data-slot="form-description"
      {...props}
    />
  );
}

// -----------------------------------------------------
// FORM MESSAGE (error text)
// -----------------------------------------------------
export function FormMessage({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error.message ?? "") : children;

  if (!body) return null;

  return (
    <p
      id={formMessageId}
      className={`text-sm text-red-600 ${className}`}
      data-slot="form-message"
      {...props}
    >
      {body}
    </p>
  );
}
