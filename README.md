# praktikum-hero-hackathon-2020

## Cсылка на развернутый проект
http://praktikum-hero-2020.herokuapp.com/

### Что было сделано
- Разработан дизай в `Figma` [макет](https://www.figma.com/file/cUCEOzHAA0bTzJJ4i4crZg/Herou-Practicum-2020?node-id=0%3A1);
- Верстка `HTML`, `CSS`, `БЭМ`;
- Виртуализация при помощи `Docker(DockerFile)`;
- Тесты написаны на `Jest`;
- Настроен вебпак:
    - html: `HtmlWebpackPlugin`;
    - обработка css: `css-loader`, `style-loader`, `postcss-loader`, `autoprefixer`, `cssnano`, `mini-css-extract-plugin`;
    - сборка TS/JS: `babel`, `ts-loader`;
- Кодстайлинг: `prettier`, `eslint`;
- Статику раздает `express` на `nodejs`;


## Использование

### Локальный запуск
1. Склонировать репозиторий
    ```
        git clone https://github.com/praktikum-hero-2020/praktikum-hero-hackathon-2020.git
    ```
2. Доставить отсутствющие модули npm
    ```
        npm i
    ```
3. Запустить локальный сервер
    ```
        npm run start
    ```

### Публикация образа на Heroku

1. Войти в реестр контейнеров:
    ```
        heroku container:login
    ```
2. Создание и отправка образа в реестр:
    ```
        heroku container:push web
    ```
3. Релиз образа:
    ```
        heroku container:release web
    ```
4. Открыть приложение в браузере:
    ```
        heroku open
    ```

### Внесение изменений
1. При необходимости, после внесения изменений, запустить тестирование
    ```
        npm run eslint
    ```
2. Для автоматического исправления можно воспользоваться командой:
    ```
        npm run eslintFix
    ```
