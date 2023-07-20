# Grow: Work - Backend

To learn more about the over all project please visit the repos listed below.

## Quicklinks

- [Related Repos](#related-repos)
- [Tech Stack](#tech-stack)
- [Base URL](#base-url)
- [Data Structures](#data-structures)
  - [Users](#users)
  - [Profiles](#profiles)
  - [Vocabulary Set](#vocabulary-set)
  - [Vocabulary](#vocabulary)
- [End Points](#end-points)
  - [Authentication Routes](#authentication-routes)
  - [Profile Routes](#profile-routes)
  - [Vocabulary Routes](#vocabulary-routes)
- [Instalation and Starting](#instalation-and-starting)

## Related Repos

[Native Mobile App](https://github.com/Grow-Work/frontend-react-native)

[Desktop Web App](https://github.com/Grow-Work/frontend-react-desktop)

## Tech Stack

- MongoDB / Mongoose

- Node / Express

- Json webtokens

- Tests with Mocha

## Base url

Base URL: https://grow-work.herokuapp.com/

## Data Structures

### Users

| data     | type   | required |
| -------- | ------ | -------- |
| id       | number | yes      |
| email    | string | yes      |
| password | string | yes      |

### Profiles

| data       | type   | required |
| ---------- | ------ | -------- |
| user_id    | number | yes      |
| user_name  | string | yes      |
| user_level | number | no       |
| user_vocab | array  | no       |

### Vocab Set

| data        | type   | required |
| ----------- | ------ | -------- |
| vocab_id    | number | yes      |
| next_review | date   | no       |
| rank        | number | no       |

### Vocab

| data            | type   | required |
| --------------- | ------ | -------- |
| vocab_id        | number | yes      |
| hebrew          | string | no       |
| transliteration | string | no       |
| translation     | string | no       |
| vocab_level     | string | no       |

## End Points

### Authentication Routes

| Method | Endpoint       | Token | Description                                |
| ------ | -------------- | ----- | ------------------------------------------ |
| POST   | `/auth/signup` | no    | Registers new user and returns token       |
| POST   | `/auth/signin` | no    | Signs in registered user and returns token |

### Vocabulary Routes

| Method | Endpoint          | Token | Description                     |
| ------ | ----------------- | ----- | ------------------------------- |
| POST   | `/vocab         ` | no    | Creates new vocab word          |
| GET    | `/vocab`          | no    | Returns all vocabulary          |
| GET    | `/vocab/:id`      | no    | Returns single vocab word by id |
| PUT    | `/vocab/:id`      | no    | Updates vocab word by id        |
| DELETE | `/vocab/:id`      | no    | Deletes vocab word by id        |

### Profile Routes

| Method | Endpoint   | Token | Description                              |
| ------ | ---------- | ----- | ---------------------------------------- |
| POST   | `/profile` | yes   | Returns newly added profile              |
| GET    | `/profile` | yes   | Returns the current user's profile       |
| PUT    | `/profile` | yes   | Returns the user's newly updated profile |
| DELETE | `/profile` | yes   | Deletes the user's profile               |

## Instalation and Starting

• Npm i - install dependencies

• Npm start - run app with node

• Npm run server - rup app with nodemon

• Npm run test - runs tests with mocha

• You'll need to create your own .env file with:

MONGODB_URL={your_key_here}<br>
JWT_SECRET={your_secret_here}
