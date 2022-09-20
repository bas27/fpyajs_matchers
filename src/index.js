// const characters = [
//   { name: "мечник", health: 10 },
//   { name: "маг", health: 100 },
//   { name: "лучник", health: 80 },
// ];

export default function sortCharacters(heroes) {
  return heroes.sort((a, b) => {
    return b.health - a.health;
  });
}