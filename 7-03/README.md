# Домашнее задание 7.3 — Jest и Playwright

В проекте собраны решения первых двух задач.

## Задача 1. Jest и покрытие

Установить зависимости:

```bash
npm install
```

Запустить unit-тесты:

```bash
npm test
```

Запустить проверку покрытия:

```bash
npm run coverage
```

Jest собирает покрытие JavaScript/JSX-файлов, исключая `node_modules` и `coverage`. Порог для branches, functions и lines установлен на 100%.

## Задача 2. Playwright

1. Создайте локальный файл с учётными данными:

```bash
cp user.example.js user.js
```

2. Откройте `user.js` и укажите email и пароль своего аккаунта Нетологии.
3. Установите браузер Playwright:

```bash
npx playwright install chromium
```

4. Запустите UI-тесты:

```bash
npm run test:e2e
```

Файл `user.js` добавлен в `.gitignore` и не должен попадать в коммиты. Не публикуйте реальные пароли, токены или другие секреты.

## Структура

- `src/validation.js` — функции для unit-тестирования.
- `src/validation.test.js` — Jest-тесты.
- `jest.config.js` — настройки покрытия.
- `tests/ui/auth.spec.js` — позитивный и негативный UI-тесты.
- `playwright.config.js` — настройки Playwright.
- `user.example.js` — шаблон локальных учётных данных.

**Важно:** успешный UI-тест требует действующего аккаунта Нетологии. Интерфейс сайта может меняться, поэтому при изменении полей/текста ошибок потребуется актуализировать локаторы.
