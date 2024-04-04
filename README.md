# Memories game

## Foreword

This repos is not a perfect working memories it was just a challenge on react/redux

## The game

Memories Game is an interactive card-matching game designed to challenge your memory skills and provide an engaging experience for players of all ages. With its intuitive interface and exciting features, Memories Game offers a fun way to test your cognitive abilities while enjoying the thrill of matching cards.

# How to Play

## For human

- Click on a card to reveal its hidden image.
- Find and click on another card that matches the first.
- If the cards match, they are removed from the board.
- Keep track of your matches and challenge yourself to beat your high score.
- Your click history is stored for your reference.

## For devs

- Click on a card and return the card.
- Remove if cards matches : clic n & clic n-1
- Count the matches
- Store the Clic history

# Challenges and Enhancements

## Create level/stages :

- Increase the numbers of cards
- Reduce the time of animation

## Improve User Experience (UX)

- Enhance gameplay with sound and visual effects for matched cards.
- Implement a timer to add urgency and excitement to the game.

## Customization Options

- Add settings parameters to adjust the number of columns and cards for a personalized gaming experience.

# Tools Used

React
Redux
Docker

# Local settings with

To run Memories Game locally on your machine, follow these steps:

## 1 - Install npm dependencies

Install npm dependencies by running the command:
`npm install`

## 2 - Launch the app

Launch the application with the following command:

`npm start`

# Setup with docker

To run Memories Game using Docker, use the following instructions:

Create your environment variables file by copying `sample.env` to `.env`
`sample.env .env`
Modify the access port by editing the `APP_PORT` variable in .`env` file.
`APP_PORT = 83`
Start the Docker Compose
start :
`docker compose up`

stop :
`docker compose stop`

With the default settings you can access the app on http://localhost:83
