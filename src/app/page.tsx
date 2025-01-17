"use client";
import React from "react";

import Buttton from "@mtm/components/ui/Buttton";
import Divider from "@mtm/components/ui/Divider";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="h-full  mx-24 my-16 ">
      <div className="text-center mx-auto">
        <h1 className="text-4xl font-bold">
          Welcome to the Mexican Touring Masters
        </h1>
        <p className="text-lg mt-4">
          The Mexican Touring Master (MTM) is Mexico premier touring car
          championship, where the country’s top drivers and teams battle on
          challenging tracks. Each race delivers heart-pounding action, from
          daring overtakes to thrilling finishes, creating an unforgettable
          motorsport experience. Our diverse circuits test both the power of the
          machines and the skill of the drivers, pushing them to their limits.
          Whether you’re a dedicated fan or new to racing, MTM invites you to
          join the excitement and witness the pursuit of victory, one checkered
          flag at a time.
        </p>
      </div>
      <Divider />
      <div className="text-center mx-auto mt-8">
        <h2 className="text-2xl font-bold">What you can find here:</h2>
        <div className="flex justify-around mt-4">
          <div className=" rounded-lg bg-white pb-4 shadow-lg">
            <Image
              className="rounded-t-lg"
              src={"https://placehold.co/600x400"}
              width={300}
              height={200}
              alt="placeholder"
            />
            <h3 className="font-bold text-2xl">Drivers</h3>
            <p className="text-lg">Information about the drivers</p>
            <Buttton
              text="More Info"
              color="primary"
              size="lg"
              onClick={() => navigateTo("/drivers")}
            />
          </div>
          <div className="rounded-lg bg-white pb-4 shadow-lg">
            <Image
              className="rounded-t-lg"
              src={"https://placehold.co/600x400"}
              width={300}
              height={200}
              alt="placeholder"
            />
            <h3 className="font-bold text-2xl">Teams</h3>
            <p className="text-lg">Information about the teams</p>
            <Buttton
              text="More Info"
              color="primary"
              size="lg"
              onClick={() => navigateTo("/teams")}
            />
          </div>
          <div className="rounded-lg bg-white pb-4 shadow-lg">
            <Image
              className="rounded-t-lg"
              src={"https://placehold.co/600x400"}
              width={300}
              height={200}
              alt="placeholder"
            />
            <h3 className="font-bold text-2xl">Sing up</h3>
            <p className="text-lg">Join the championship</p>
            <Buttton
              text="More Info"
              color="primary"
              size="lg"
              onClick={() => navigateTo("/signup")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
