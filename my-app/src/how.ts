export const topCars = [
  { manufacturer: "BMW", model: "m5cs" },
  { manufacturer: "Mercedes", model: "e63s" },
  { manufacturer: "Audi", model: "rs6" },
];

export const eachCar = topCars.map((car) => {
  return car.manufacturer;
});
console.log(eachCar);
