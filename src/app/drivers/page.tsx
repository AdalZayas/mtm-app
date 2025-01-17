"use client";
import DriverCard from "@mtm/components/ui/DriverCard";
import Divider from "@mtm/components/ui/Divider";
import Modal from "@mtm/components/ui/Modal";
import { SEASON_8_TEAMS } from "@mtm/data/cars";
import useModal from "@mtm/hooks/useModal";
import Image from "next/image";
import Flag from "react-world-flags";
import SideBar from "@mtm/components/ui/SideBar";
import { useEffect, useState } from "react";

export default function Home() {
  const { isOpen, data, openModal, closeModal } = useModal<{
    name: string;
    profilePicture: string;
    team: string;
  }>();

  // Estado para equipos seleccionados
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("All Teams");
  useEffect(() => {
    if (selectedTeams.length > 0) {
      setTitle(`Selected Teams: ${selectedTeams.join(", ")}`);
    } else {
      setTitle("All Teams");
    }
  }, [selectedTeams]);

  // Filtrar conductores según los equipos seleccionados
  const filteredDrivers = SEASON_8_TEAMS.filter(
    (team) => selectedTeams.length === 0 || selectedTeams.includes(team.name)
  ).flatMap((team) =>
    team.drivers.map((driver, index) => (
      <DriverCard
        key={`${team.name}-${index}`}
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
    ))
  );

  // Manejo de selección de equipos
  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const teamName = e.target.id; // Nombre del equipo como id del checkbox
    if (e.target.checked) {
      setSelectedTeams([...selectedTeams, teamName]);
    } else {
      setSelectedTeams(selectedTeams.filter((team) => team !== teamName));
    }
  };

  // Obtener lista de equipos
  const teams = SEASON_8_TEAMS.map((team) => team.name);

  return (
    <div className="flex mx-24 my-16">
      {/* Barra lateral con checkboxes */}
      <SideBar selected={title} items={teams} onClick={handleCheckBox} />

      {/* Conductores filtrados */}
      <div className="grid grid-cols-4 gap-4">{filteredDrivers}</div>

      {/* Modal con información del conductor */}
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
