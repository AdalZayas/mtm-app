"use client";
import DriverLicense from "@mtm/components/DriverLicense";
import Form from "@mtm/components/form/Form";
import Input from "@mtm/components/form/Input";
import Selector from "@mtm/components/form/Selector";
import { useForm } from "@mtm/hooks/useForm";
import React from "react";

function SingnUp() {
  const countries = [
    {
      value: "MX",
      label: "Mexico",
    },
    {
      value: "US",
      label: "United States",
    },
    {
      value: "JP",
      label: "Japan",
    },
    {
      value: "BR",
      label: "Brazil",
    },
    {
      value: "ES",
      label: "Spain",
    },
    {
      value: "NL",
      label: "Netherlands",
    },
  ];

  const { values, handleInputChange, handleSubmit } = useForm({
    initialValues: {
      driverName: "John Doe",
      teamName: "Ferrari",
      age: 33,
      country: "MX",
      number: 33,
      email: "",
    },
  });

  const handleFormSubmit = (data: Record<string, string | number>) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="h-full flex justify-between items-center mx-24 my-16">
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-bold">Sing up</h2>
        <p className="text-lg">Join the championship</p>

        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            label="Name"
            id="driverName"
            type="text"
            placeholder="John Doe"
            onChange={(e) => handleInputChange("driverName", e.target.value)}
          />
          <Input
            label="Team"
            id="teamName"
            type="text"
            placeholder="Ferrari"
            onChange={(e) => handleInputChange("teamName", e.target.value)}
          />
          <Input
            label="Age"
            id="age"
            type="number"
            placeholder="18"
            onChange={(e) => handleInputChange("age", e.target.value)}
          />
          <Selector
            label="Country"
            id="country"
            options={countries}
            onChange={(e) => handleInputChange("country", e.target.value)}
          />
          <Input
            label="Driver Number"
            id="driverNumber"
            type="number"
            placeholder="33"
            onChange={(e) => handleInputChange("number", e.target.value)}
          />
          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="johnDoe33@email.com"
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </Form>
      </div>
      <DriverLicense
        driverName={values.driverName as string}
        teamName={values.teamName as string}
        age={Number(values.age)}
        country={values.country as string}
        number={Number(values.number)}
      />
    </div>
  );
}

export default SingnUp;
