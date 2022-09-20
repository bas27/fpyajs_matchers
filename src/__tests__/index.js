import sortCharacters from '../index';

const data = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const actualData = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

describe('Персонажи в игре', () => {
  test('Сортировка по убыванию "toEqual" сходные результаты', () => {
    expect(sortCharacters(data)).toEqual(actualData);
  });
  test('Через "toBe" имеем отличный результат', () => {
    expect(sortCharacters(data)).not.toBe(actualData);
  });
});
