import React, { ReactNode, FormEvent } from "react";
import Buttton from "../ui/Buttton";

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

export default function Form({ onSubmit, children }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="form">
      {children}
      <Buttton type="submit" text="Submit" color="primary" size="md" />
    </form>
  );
}
