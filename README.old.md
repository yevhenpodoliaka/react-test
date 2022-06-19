# react-test

npx npx create-react-app .

-В jsx велика літера на початку сигналізує що це ім'я змінної -компонент має
лише один параметр

-при диструктирізації параметрів в компоненті можна задавати значення по дефолту
на випадок якщо якась інформація не прийде або буде ушкоджена

Додатково встановлюється: npm install --save prop-types для визначення типів
даних "PROPS" https://www.npmjs.com/package/prop-types

isRequired-вказує на обов'язкове значення

npm install --save husky lint-staged prettier додати файли конфігурації

.huskyrc { "hooks": { "pre-commit": "lint-staged" } }

.lintstagedrc { "src/**/\*.{json,css,scss,md}": ["prettier --write"],
"src/**/\*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"] }
