# Rabbi-Rabbit - Backend

![Node.js](https://img.shields.io/badge/Node.js-16.x-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-%2332BA7C?logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-%23000000?logo=express)
![License](https://img.shields.io/badge/license-MIT-blue)

To learn more about the overall project, please visit the repos listed below.

## Quicklinks

- [Related Repos](#related-repos)
- [Tech Stack](#tech-stack)
- [Data Structures](#data-structures)
  - [User](#user)
  - [User Pins](#user-pins)
  - [Vocabulary Set](#vocabulary-set)
  - [Vocabulary](#vocabulary)
- [Endpoints](#endpoints)
  - [Authentication Routes](#authentication-routes)
  - [Profile Routes](#profile-routes)
  - [Vocabulary Routes](#vocabulary-routes)
  - [Email Routes](#email-routes)
- [Installation and Starting](#installation-and-starting)

---

## Related Repos

- [Desktop Web App](https://github.com/Rabbi-Rabbit/frontend-react-desktop)

---

## Tech Stack

- MongoDB / Mongoose
- Node / Express / REST API
- JSON Web Tokens (JWT)

---

## Data Structures

### User

| Data             | Type        | Required  |
| ---------------- | ----------- | --------- |
| _id              | number      | generated |
| email            | string      | yes       |
| password         | string      | yes       |
| user_lessons     | [String]    | no        |
| available_lesson | number      | no        |
| user_vocab       | [Vocab Set] | no        |

### User Pins

| Data     | Type   | Required  |
| -------- | ------ | --------- |
| email    | string | yes       |
| pin      | string | yes       |
| expireAt | date   | generated |

### Vocabulary Set

| Data          | Type     | Required |
| ------------- | -------- | -------- |
| vocab_id      | ObjectId | yes      |
| next_review   | date     | no       |
| lesson_number | number   | no       |
| rank          | number   | no       |

### Vocabulary

| Data               | Type   | Required  |
| ------------------ | ------ | --------- |
| _id                | number | generated |
| hebrew             | string | no        |
| hebrew_with_nikkud | string | no        |
| reading            | string | no        |
| meaning            | string | no        |
| lesson             | number | no        |
| gender             | string | no        |

---

## Endpoints

### Authentication Routes

| Method | Endpoint               | Token | Description                                       |
| ------ | ---------------------- | ----- | ------------------------------------------------- |
| POST   | `/auth/signup`         | no    | Registers new user and returns token              |
| POST   | `/auth/signin`         | no    | Signs in registered user and returns token        |
| PUT    | `/auth/password-reset` | no    | Verifies email and pin then updates user password |

### Profile Routes

| Method | Endpoint   | Token | Description                              |
| ------ | ---------- | ----- | ---------------------------------------- |
| GET    | `/profile` | yes   | Returns the current user's profile       |
| PUT    | `/profile` | yes   | Updates the user's profile               |
| DELETE | `/profile` | yes   | Deletes the user's profile               |

### Vocabulary Routes

| Method | Endpoint     | Token | Description                     |
| ------ | ------------ | ----- | ------------------------------- |
| POST   | `/vocab`     | no    | Creates new vocab word          |
| GET    | `/vocab`     | no    | Returns all vocabulary          |
| GET    | `/vocab/:id` | no    | Returns single vocab word by id |
| PUT    | `/vocab/:id` | no    | Updates vocab word by id        |
| DELETE | `/vocab/:id` | no    | Deletes vocab word by id        |

### Email Routes

| Method | Endpoint | Token | Description                                                |
| ------ | -------- | ----- | ---------------------------------------------------------- |
| POST   | `/email` | no    | Creates random pin, saves to userPins, sends email to user |

---

## Installation and Starting

```bash
npm install        # Install dependencies
npm start          # Run app with Node
npm run server     # Run app with nodemon
npm run test       # Run tests with Mocha (coming soon)
```

### Required .env File

Create your own `.env` file in the root directory with the following keys:

```env
MONGODB_URL={your_key_here}
JWT_SECRET={your_secret_here}
EMAIL={your_email_here}
PASSWORD={your_password_here}
```
