# Employee List

This project contains a web application that lists employees and departments of a company. In addition to its functionality, you can create, edit, and delete employees and departments.

## Getting Started

These instructions will guide you on how to set up and run the project for local development and testing purposes.

### Requirements

- Node
- npm (Node Package Manager): Comes with Node.js.
- Type Script
- React Js

### Installation

1. Clone this repository to your local machine:

```sh
git clone https://github.com/atknclk/employee-list.git
````

2. Navigate to the project directory:

```sh
cd employee-list
````

3. Install the required dependencies:

```sh
npm install
````

### Running

1. Start the JSON server in a terminal:
```sh
npm run jsonserver
````
The JSON server will run at http://localhost:3000. This server is used to store and process data such as employees and departments.


2. Start the React application in another terminal:
```sh
npm run dev
````
The project will run at http://localhost:5173

### Usage

After running the project, you will see a table on the main page listing the employees. You'll also find tools to edit, delete, and add new employees.

You can manage departments by using the /departments path. On this page, you can list, delete, and add new departments.