# FoodSwift-Web
This is the frontend repository for FoodSwift, a restaurant delivery application. It's responsible for creating an engaging and user-friendly interface that allows customers to browse restaurants, place orders, and track their deliveries seamlessly.

## Table of Contents
- [FoodSwift-Web](#foodswift-web)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [API](#api)
  - [Docker](#docker)

## Features
- [x] User registration and authentication
- [ ] Browse a menu of available food items
- [ ] Add items to the shopping cart
- [ ] Place orders and make payments
- [ ] Real-time order tracking
- [ ] Admin panel for managing the menu and orders
  
## Getting Started
### Prerequisites
Before you start, make sure you have the following software installed:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

### Installation
1. Clone the repository
```sh
git clone git@github.com:MEZ901/FoodSwift-Web.git
```
1. Change directory
```sh
cd FoodSwift-Web
```
1. Install dependencies
```sh
npm install
```

## Usage
1. Start the development server
```sh
npm run dev
```
2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

> **Note:** This project uses API endpoints from the [FoodSwift-API](https://github.com/MEZ901/FoodSwift-API) repository. Make sure to start the API server before running the frontend.

## API
The API documentation can be found [here](https://documenter.getpostman.com/view/25895747/2s9YXcf64q).

Make sure to configure the API endpoint in your application to match your API server's address. The default endpoint is `http://localhost:8080`.

## Docker
