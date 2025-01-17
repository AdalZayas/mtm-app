"use client";
import Card from "@mtm/components/ui/Card";
import Divider from "@mtm/components/ui/Divider";
import Modal from "@mtm/components/ui/Modal";
import { SEASON_8_TEAMS } from "@mtm/data/cars";
import useModal from "@mtm/hooks/useModal";
import Image from "next/image";
import Flag from "react-world-flags";

export default function Home() {
  const { isOpen, data, openModal, closeModal } = useModal<{
    name: string;
    profilePicture: string;
    team: string;
  }>();
  const driversCards = SEASON_8_TEAMS.map((team) => {
    return team.drivers.map((driver, index) => (
      <Card
        key={index}
        driverName={driver.name}
        teamName={team.name}
        driverImage={driver.profilePicture}
        imageWidth={250}
        imageHeight={250}
        onClick={() =>
          openModal({
            ...driver,
            team: team.name,
          })
        }
      />
    ));
  });

  return (
    <div className="h-full flex mx-24 my-16 ">
      <div className="grid grid-cols-5 gap-2">{driversCards}</div>
      <Modal isOpen={isOpen} onClose={() => closeModal()}>
        {data && (
          <div>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <Image
                  src={data.profilePicture}
                  width={600}
                  height={400}
                  alt="driver"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Driver name: {data.name}</h2>
                <Divider />
                <h3 className="text-3xl font-bold">Team: {data.team}</h3>
                <Divider />
                <div className="text-3xl font-bold flex space-x-4">
                  <p>Country:</p>
                  <Flag code="MX" width={50} />
                </div>
                <Divider />
                <div className="text-3xl font-bold flex space-x-4">
                  <p>Championships:</p>
                  <p>0</p>
                </div>
                <Divider />
                <div className="text-2xl font-bold flex space-x-4">
                  <p>Wins:</p>
                  <p>0</p>

                  <p>Podiums:</p>
                  <p>0</p>

                  <p>Best finish:</p>
                  <p>0</p>
                </div>
                <Divider />
                <div className="text-lg">
                  <h5 className="text-2xl font-bold">Biography:</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ac ex eget orci bibendum aliquet. Nullam nec sapien
                    vestibulum, ultricies magna a, fermentum nunc. Nulla
                    facilisi. Nam vitae orci nec nisi efficitur tincidunt. In
                    vitae nunc nec turpis ultricies fermentum. Proin ac
                    consectetur nunc. Nulla facilisi. Nam vitae orci nec nisi
                    efficitur tincidunt.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}
