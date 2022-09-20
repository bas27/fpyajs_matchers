# fpyajs_matchers [![Build status](https://ci.appveyor.com/api/projects/status/2nlsga7hbc63wprh?svg=true)](https://ci.appveyor.com/project/bas27/fpyajs-matchers)

## Легенда
Поскольку в рамках игры вы можете управлять несколькими героями, то во время "битвы" неплохо бы отображать уровень жизни, оставшейся у каждого героя в отсортированном порядке (наверху - самые здоровые). Необходимо сделать это и написать соответствующие авто-тесты.

## Описание
Дан массив с информацией о героях, например:

```[
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]
```
В отсортированном порядке должно выглядеть следующим образом:
```
[
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]
```
Убедитесь, что `toBe` работать не будет, но будет работать `toEqual`. Изучите документацию на [toBe](https://jestjs.io/docs/en/expect#tobevalue) и [toEqual](https://jestjs.io/docs/en/expect#toequalvalue) и выясните в чём разница (а так же термин `Deep Equality`). Убедитесь, что вы обеспечили 100% покрытие тестами по строкам.

Вы можете дополнительно изучить список доступных "матчер" (список приведён на странице [Документация по expect](https://jestjs.io/docs/ru/expect)), для организации сравнения.

## Требования

Важно: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

Важно: ESLint не должен выдавать ошибок.

Важно: Jest должен обеспечивать 100% покрытие по строкам для тестируемых вами функций.

Важно: Ко всем задачам должен быть подключен Appveyor и выставлен бейджик статуса.

Важно: используйте `import`/`export` а не `require`.

В качестве шаблона вы можете использовать [готовый проект](https://github.com/netology-code/ajs-homeworks/blob/ajs8/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваш GitHub-проекты.

## Описание установки
```
npm init
# При инициалиализации в качестве тестовой команды указать:
# test command: jest --coverage
npm install --save-dev jest@^26.0.1 babel-jest@^26.0.1 @babel/core @babel/cli @babel/preset-env
npm install core-js@3
```
Не забудьте про .babelrc и .browserslistrc.

В .babelrc:
```
{
  "presets": [["@babel/preset-env", {
    "useBuiltIns": "usage",
    "corejs": 3
  }]]
}
```
### Запуск тестов:
```
npm test
```