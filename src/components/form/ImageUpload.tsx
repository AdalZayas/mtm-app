import React from "react";

interface ImageUploadProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  label: string;
}

export default function ImageUpload({ id, label, ...props }: ImageUploadProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="block font-medium">
        {label}
      </label>
      <input
        id={id}
        type="file"
        accept="image/*"
        {...props}
        className="border rounded px-3 py-2 w-full"
      />
    </div>
  );
}
