/* Напиши функцию findBestEmployee(employees),
которая принимает объект сотрудников и возвращает имя самого продуктивного
(который выполнил больше всех задач).Сотрудники и кол - во выполненых задач содержатся
как свойства объекта в формате "имя": "кол-во задач". */

const findBestEmployee = function (employees) {
  let findBest = employees[Object.keys(employees)[0]]; // получаем  первое значение обьекта (вставляя ключ из массива)
  let nameBest = Object.keys(employees)[0]; // получаем название первого элеманта массива (ключ обьекта)
  for (let i = 1; i < Object.keys(employees).length; i += 1) {
    if (findBest < employees[Object.keys(employees)[i]]) {
      findBest = employees[Object.keys(employees)[i]];
      nameBest = Object.keys(employees)[i];
    }
  }
  return nameBest;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
