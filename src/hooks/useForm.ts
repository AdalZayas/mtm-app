import { useState } from "react";

interface UseFormProps {
  initialValues: Record<string, string | number>;
}

export function useForm({ initialValues }: UseFormProps) {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (id: string, value: string | number) => {
    console.log("id", id);
    console.log("value", value);
    setValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (
    callback: (values: Record<string, string | number>) => void
  ) => {
    return (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      callback(values); // Llama al callback con los valores
    };
  };

  return {
    values,
    handleInputChange,
    handleSubmit,
  };
}
