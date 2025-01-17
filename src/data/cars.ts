export type Team = {
  name: string;
  drivers: Driver[];
  cars: Car[];
};

export type Driver = {
  name: string;
  profilePicture: string;
};

export type Car = {
  name: string;
  src: string;
};

export const SEASON_8_TEAMS = [
  {
    name: "Club Pinwing Racing",
    drivers: [
      {
        name: "Jhon Doo",
        profilePicture: "/drivers/1.png",
      },
      {
        name: "Foofy Barny",
        profilePicture: "/drivers/2.png",
      },
    ],
    cars: [
      {
        name: "Club Pinwing Racing Livery A",
        src: "/team-cars/club-pinwin-1.jpg",
      },
      {
        name: "Club Pinwing Racing Livery B",
        src: "/team-cars/club-pinwin-2.jpg",
      },
    ],
  },
  {
    name: "Owax Racing",
    drivers: [
      {
        name: "Jhon Doo",
        profilePicture: "/drivers/3.png",
      },
      {
        name: "Foofy Barny",
        profilePicture: "/drivers/4.png",
      },
    ],
    cars: [
      {
        name: "Owax Racing Livery",
        src: "/team-cars/owax.jpg",
      },
    ],
  },
  {
    name: "HG Castrol Racing Team",
    drivers: [
      {
        name: "Jhon Doo",
        profilePicture: "/drivers/5.png",
      },
      {
        name: "Foofy Barny",
        profilePicture: "/drivers/6.png",
      },
    ],
    cars: [
      {
        name: "HG Castrol Racing Team Livery",
        src: "/team-cars/castrol.jpg",
      },
    ],
  },
  {
    name: "Hoonigan Racing Division",
    drivers: [
      {
        name: "Jhon Doo",
        profilePicture: "/drivers/7.png",
      },
      {
        name: "Foofy Barny",
        profilePicture: "/drivers/8.png",
      },
    ],
    cars: [
      {
        name: "Hoonigan Racing Division Livery A",
        src: "/team-cars/hoonigan-1.jpg",
      },
      {
        name: "Hoonigan Racing Division Livery B",
        src: "/team-cars/hoonigan-2.jpg",
      },
    ],
  },
  {
    name: "VRC Racing",
    drivers: [
      {
        name: "Jhon Doo",
        profilePicture: "/drivers/9.png",
      },
      {
        name: "Foofy Barny",
        profilePicture: "/drivers/10.png",
      },
    ],
    cars: [
      {
        name: "VRC Racing Livery A",
        src: "/team-cars/vrc-1.jpg",
      },
      {
        name: "VRC Racing Livery B",
        src: "/team-cars/vrc-2.jpg",
      },
    ],
  },
  {
    name: "Copa Muñon",
    drivers: [
      {
        name: "Jhon Doo",
        profilePicture: "/drivers/11.png",
      },
      {
        name: "Foofy Barny",
        profilePicture: "/drivers/12.png",
      },
    ],
    cars: [
      {
        name: "Copa Muñon Livery A",
        src: "/team-cars/copa-munon.jpg",
      },
    ],
  },
  {
    name: "WEC Inugami eRacing Team",
    drivers: [
      {
        name: "Jhon Doo",
        profilePicture: "/drivers/13.png",
      },
      {
        name: "Foofy Barny",
        profilePicture: "/drivers/14.png",
      },
    ],
    cars: [
      {
        name: "WEC Inugami eRacing Team Livery A",
        src: "/team-cars/wec-1.jpg",
      },
      {
        name: "WEC Inugami eRacing Team Livery B",
        src: "/team-cars/wec-2.jpg",
      },
    ],
  },
  {
    name: "MIB Sport",
    drivers: [
      {
        name: "Jhon Doo",
        profilePicture: "/drivers/15.png",
      },
      {
        name: "Foofy Barny",
        profilePicture: "/drivers/16.png",
      },
    ],
    cars: [
      {
        name: "MIB Sport Livery",
        src: "/team-cars/mib.jpg",
      },
    ],
  },
  {
    name: "Phoenix Eternal",
    drivers: [
      {
        name: "Jhon Doo",
        profilePicture: "/drivers/17.png",
      },
      {
        name: "Foofy Barny",
        profilePicture: "/drivers/18.png",
      },
    ],
    cars: [
      {
        name: "Phoenix Eternal Livery",
        src: "/team-cars/phoenix-eternal.jpg",
      },
    ],
  },
  {
    name: "SRH GTZ RT",
    drivers: [
      {
        name: "Jhon Doo",
        profilePicture: "/drivers/19.png",
      },
      {
        name: "Foofy Barny",
        profilePicture: "/drivers/20.png",
      },
    ],
    cars: [
      {
        name: "SRH GTZ RT Livery A",
        src: "/team-cars/srh-1.jpg",
      },
      {
        name: "SRH GTZ RT Livery B",
        src: "/team-cars/srh-2.jpg",
      },
    ],
  },
  {
    name: "TRD",
    drivers: [
      {
        name: "Jhon Doo",
        profilePicture: "/drivers/21.png",
      },
      {
        name: "Foofy Barny",
        profilePicture: "/drivers/22.png",
      },
    ],
    cars: [
      {
        name: "TRD Livery A",
        src: "/team-cars/trd-1.jpg",
      },
      {
        name: "TRD Livery B",
        src: "/team-cars/trd-2.jpg",
      },
    ],
  },
  {
    name: "TROFEOS LOBO RACING",
    drivers: [
      {
        name: "Jhon Doo",
        profilePicture: "/drivers/23.png",
      },
      {
        name: "Foofy Barny",
        profilePicture: "/drivers/24.png",
      },
    ],
    cars: [
      {
        name: "TROFEOS LOBO RACING Livery",
        src: "/team-cars/trofeos-lobo.jpg",
      },
    ],
  },
];
