# SMART PRINTING SERVICE SYSTEM

The Smart Printing Service for Students (HCMUT-SSPS) is an advanced digital platform implemented at Ho Chi Minh City University of Technology (HCMUT). It is designed to streamline the printing process for students, providing them with easy access to printing services across multiple campus locations. This system allows students to submit their documents online and retrieve them from a network of strategically placed printers, reducing the need for students to visit external printing shops or use personal printers.

## Features

### For Students:
- The system must allow document uploads for printing in specific file formats.
- Students should be able to select printers based on availability and location.
- Printing properties such as paper size, number of copies, and single-/double-sided options must be configurable.
- The system should display the remaining page balance and allow students to purchase additional pages through the payment gateway.
- Students can view their printing history over a specified period, including details such as printer ID, document name, and timestamps.
- The system must have instructions for use for students.
- Students are allowed to create reports when problems occur with the printer.

### For SPSO:
- SPSO should be able to add, enable, or disable printers in the system.
- The system must allow configuration of file types for printing.
- SPSO can view and generate reports on printing usage, including detailed student and printer logs.
- The system must enable SPSO to manage the allocation of printing pages and set semester page quotas.
- SPSO must have the ability to send notifications to students if errors occur during printing or if a machine requires maintenance.

### For University Administration:
- The system must generate and store monthly and annual reports on printing usage and associated costs.
- It must integrate with the university’s Single Sign-On (SSO) service for secure user authentication.
- University administration should have tools to track overall printer usage, monitor print-related expenses, and enforce printing policies.
- Administration has a side where reports from students can be handled.

### For Printer Vendors:
- Vendors should be able to monitor printer performance, track the consumption of resources (e.g., ink, paper), and receive alerts when maintenance is required.

## Requirements

- **Node.js** version 14.0 or higher
- **MongoDB** version 4.0 or higher
- **NPM** version 6.0 or higher

## System Modelling
- Use-case diagram
- Class diagram
- Activity diagram
- Sequence diagram

## Architectural Design

The system is designed in a layered architecture, with separate functions for each layer. The architecture consists of four layers: **presentation**, **business**, **persistence**, and **database**. Each class performs a specific role in the application:

### Presentation Layer
- Responsible for user interaction, displaying the interface, sending requests, and receiving responses.
- Consists of the Web UI, which allows users to interact with the HCMUT SSPS printing services.

### Business Layer
- Handles the core logic of the HCMUT SSPS system.
- Includes various services:
  - **Authentication Service**: Handles user login and access control.
  - **User Management Service**: Manages user profiles and permissions, including:
    - **Page Manager**: For user-specific print settings.
    - **Profile Manager**: For student and administrator details.
  - **Printing Service**: Handles file uploads, validation, print queues, and printer management, including:
    - Printer registration, status monitoring, and configuration.
  - **Reporting Service**: Generates print logs and usage reports.
  - **Payment Service**: Calculates print costs and processes transactions.

### Persistence Layer
- Acts as an intermediary between the application and database layers.
- Provides secure and controlled data access.
- Includes the **Data Access Component**, which handles database interactions.

### Database Layer
- Stores all HCMUT SSPS system data, including printer information, user details, print logs, and configurations.
- Uses **MongoDB**, a NoSQL database, for flexible and scalable data storage.



## Prerequisites

- Node.js v16+ (download from [nodejs.org](https://nodejs.org/))
- MongoDB (local or cloud database)


# Backend_ssps

Backend for the Smart Printing Service Project (SSPS).

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

6. API Testing:
The API will operate at http://localhost:3000 or the port specified in .env.
## API endpoints:
    /api/user
    /api/printer
    /api/process
    /api/upload
    /api/report

6. Folder Structure:
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
