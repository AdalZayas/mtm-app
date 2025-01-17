import Image from "next/image";
import Flag from "react-world-flags";
import Divider from "./ui/Divider";

interface DriverLicenseProps {
  driverName: string;
  teamName: string;
  age: number;
  country: string;
  number: number;
  image?: string;
}

export default function DriverLicense({
  driverName,
  teamName,
  age,
  country,
  number,
  image,
}: DriverLicenseProps) {
  if (!image) {
    image = "https://placehold.co/220x317";
  }
  return (
    <div className="driver-license">
      <div className="driver-license__content">
        <Image src={image} width={220} height={200} alt="pilot" />

        <div className="driver-license__info">
          <h1 className="driver-license__name">{driverName}</h1>
          <p className="driver-license__team">{teamName}</p>
          <Divider />
          <p className="driver-license__details">Age: {age}</p>
          <p className="driver-license__details">
            Country: <Flag code={country} width={50} />
          </p>
          <div className="driver-license__number">{number}</div>
        </div>
      </div>
    </div>
  );
}
