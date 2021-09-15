export default interface Vehicle {
    id: string;
    licenseplate: string;
    salesdesignation: string;
    nickname: string;
    modelyear: string;
    colorname: string;
    fueltype: string;
    powerhp: number;
    powerkw: number;
    numberofdoors: number;
    numberofseats: number;
    tires: Tires;
    location: Location;
    fuel: Fuel;
  }

  export interface Tires {
    tirepressurefrontleft: Tire;
    tirepressurefrontright: Tire;
    tirepressurerearright: Tire;
    tirepressurerearleft: Tire;
  }

  export interface Tire {
    value: number;
    timestamp: string,
    unit: string
  }

  export interface Location {
    longitude: Coordinates;
    latitude: Coordinates,
    heading: Coordinates,
  }

  export interface Coordinates {
    value: string,
    timestamp: string
  }

  export interface Coordinates {
    value: string,
    timestamp: string
  }

  export interface Fuel {
    value: string,
    timestamp: string
  }