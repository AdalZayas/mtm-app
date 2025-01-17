"use client";
import Image from "next/image";
import React from "react";
import Flag from "react-world-flags";
import Buttton from "./Buttton";

export type CardProps = {
  driverName: string;
  teamName: string;
  driverImage?: string;
  imageWidth?: number;
  imageHeight?: number;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({
  driverName = "Dri Ver",
  driverImage = "https://placehold.co/600x400",
  teamName = "Team Name",
  imageWidth = 300,
  imageHeight = 200,
  onClick,
}) => {
  return (
    <div className="card">
      <Image
        src={driverImage}
        width={imageWidth}
        height={imageHeight}
        alt="placeholder"
        className="card__image"
      />
      <h3 className="card__title">{driverName}</h3>
      <h4 className="card__subtitle">{`Team: ${teamName}`}</h4>
      <p className="card__content">
        Country: <Flag className="ml-2" code="MX" width={50} />
      </p>
      <button 
        className="button button--primary button--full button--size-md"
        onClick={onClick}
      >
        More Info
      </button>
    </div>
  );
};

export default Card;
