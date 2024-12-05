# Backend_ssps

Backend for the Smart Printing Service Project (SSPS).

## Prerequisites

- Node.js v16+ (download from [nodejs.org](https://nodejs.org/))
- MongoDB (local or cloud database)

## Installation and Run 

1. Clone the repository:
    bash:
    git clone <repository-url>
    cd Backend_ssps

2. Install dependencies:
    npm install

3. Create a .env file in the root directory and add your environment variables, PORT=3000:
    MONGODB_URI="mongodb+srv://syuq:123@cluster0.nkqvt.mongodb.net"
    JWT_SECRET="hehehe"

4. To run the project in production mode:
    npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

5. API Testing:
The API will operate at http://localhost:3000 or the port specified in .env.
## API endpoints:
    /api/user
    /api/printer
    /api/process
    /api/upload
    /api/report

6. Folder Structure
    src/config: Configuration files (e.g., database connection).
    src/controllers: API logic and request handlers.
    src/middleware: Middleware functions.
    src/models: MongoDB models.
    src/routes: API route definitions.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
