# Klimate - weather application

## Description

Klimate is a weather application which allows you to check the weather around you and all over the world at a glance. Klimate utilizes OpenWeatherMap API to provide the accurate weather of all the places around the globe. It contains rich features like:

- Current and “Feels like” temperature
- Wind speed and direction
- Pressure information
- Sunrise/sunset time
- Excellet UI
- Dark/Light Mode
- Search Functionality
- Adding to favourites
- 5 day forecast

## Installation Instructions

These instructions demonstrate how to create the Weather App locally on your computer.

### Pre-requisites

The Weather App utilizes npm as the packet manager.

Before starting, make sure that the following tools are installed on your computer:

- [Node](https://nodejs.org/en/)
- [npm (Node Package Manager)](https://www.npmjs.com)

### Installation

If you would like to run the Weather App on your local machine, you will need to follow these instructions:

```bash
  git clone https://github.com/notsogenius-netizen/Klimate.git
  cd Klimate
  npm instal
```

After this you would need to create a free account at [Open Weather](https://openweathermap.org) and get the API key to use the API service.

Create an env file in the root directory and paste your API key

```bash
VITE_OPENWEATHER_API_KEY=<INSERT_OPEN_WEATHER_API_KEY>
```

## Run Locally

All the npm commands that can be run for the project are defined in the "scripts" section of package.json.

### Run Development Server (with hot-reload)

```bash
  npm run dev
```

### Compile for build

```bash
  npm run build
```

## Screenshots

<img src='/public/screenshot.png' style="height: 400px;"/>
