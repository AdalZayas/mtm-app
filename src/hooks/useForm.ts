import { useState } from "react";

interface UseFormWithFilesProps {
  initialValues: Record<string, string | number | null>;
}

export function useForm({ initialValues }: UseFormWithFilesProps) {
  const [values, setValues] = useState(initialValues);
  const [files, setFiles] = useState<Record<string, File | null>>({});
  const [previews, setPreviews] = useState<Record<string, string | null>>({});

  // Manejo de inputs regulares
  const handleInputChange = (id: string, value: string | number) => {
    setValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Manejo de archivos
  const handleFileChange = (id: string, file: File | null) => {
    setFiles((prev) => ({
      ...prev,
      [id]: file,
    }));

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews((prev) => ({
          ...prev,
          [id]: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setPreviews((prev) => ({
        ...prev,
        [id]: null,
      }));
    }
  };

  const handleSubmit = (
    callback: (
      data: Record<string, string | number | null>,
      files: Record<string, File | null>
    ) => void
  ) => {
    return (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      callback(values, files);
    };
  };

  return {
    values,
    files,
    previews,
    handleInputChange,
    handleFileChange,
    handleSubmit,
  };
}
