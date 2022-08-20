# Peanut Butter

This project is a specialist interest website with information about taking care of golden retrievers.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Get Started

## Run The Application

First, fork this repository into your own Github account, then clone locally.

### `npm install`

Installs the modules.

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Tests

## Unit Tests

### `npm run test`

Launches the test runner in the interactive watch mode, and runs the unit tests that utilise `jest` and `testing-library`.

Test files for each component are kept within the directory for that component.

## Coverage Reports

### `npm run coverage`

Runs the unit tests mentioned above as well as generating a test coverage report using `istanbul`.

## E2E Tests

### `npm run cypress:open`

Runs the end-to-end tests written with `cypress`.

E2E tests use http://localhost:3000/ as the baseUrl, so ensure the application is running locally on that port before running the tests.

When the cypress GUI is launched select e2e testing, then the browser of your choice, then run the tests contained in spec.cy.js.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
