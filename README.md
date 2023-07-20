# Grow: Work - Backend

To learn more about the over all project please visit the repos listed below.

## Quicklinks

- [Related Repos](#related-repos)
- [Tech Stack](#tech-stack)
- [Base URL](#base-url)
- [Data Structures](#data-structures)
  - [Users](#users)
  - [Profiles](#profiles)
  - [Jobs](#jobs)
- [End Points](#end-points)
  - [Authentication Routes](#authentication-routes)
  - [Newbs Routes](#newbs-routes)
  - [Companies Routes](#companies-routes)
  - [Job Listing Routes](#job-listing-routes)
  - [Account Routes](#account-routes)
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

| data         | type   | required |
| ------------ | ------ | -------- |
| id           | number | yes      |
| email        | string | yes      |
| password     | string | yes      |
| account_type | string | yes      |

### Profiles

| data       | type   | required |
| ---------- | ------ | -------- |
| user_id    | number | yes      |
| first_name | string | no       |
| last_name  | string | no       |
| location   | string | no       |
| email      | string | no       |
| phone      | string | no       |
| bio        | string | no       |
| skills     | string | no       |
| links      | array  | no       |
| saved_jobs | array  | no       |

### Jobs

| data             | type   | required |
| ---------------- | ------ | -------- |
| user_id          | number | yes      |
| title            | string | no       |
| company          | string | no       |
| description      | string | no       |
| compensation     | string | no       |
| required_skills  | string | no       |
| preferred_skills | string | no       |
| location         | string | no       |
| job_type         | string | no       |
| apply_link       | string | no       |

## End Points

### Authentication Routes

| Method | Endpoint       | Token Required | Description                                |
| ------ | -------------- | -------------- | ------------------------------------------ |
| POST   | `/auth/signup` | no             | Registers new user and returns token       |
| POST   | `/auth/signin` | no             | Signs in registered user and returns token |

### Job Listing Routes

| Method | Endpoint                | Token Required | Description                              |
| ------ | ----------------------- | -------------- | ---------------------------------------- |
| GET    | `/job-listing`          | yes            | Returns all job postings                 |
| GET    | `/job-listing/:id`      | yes            | Returns single job listing by id         |
| POST   | `/job-listing/:id/save` | yes            | Saves single job listing to user profile |

### Account Routes

| Method | Endpoint                    | Token Required | Description                                |
| ------ | --------------------------- | -------------- | ------------------------------------------ |
| POST   | `/account/profile`          | yes            | Returns newly added company profile        |
| GET    | `/account/profile`          | yes            | Returns the current user's company profile |
| PUT    | `/account/profile`          | yes            | Returns the user's newly updated profile   |
| DELETE | `/account/profile`          | yes            | Deletes the user's profile                 |
| POST   | `/account/job-listings`     | yes            | Returns newly added job listing            |
| GET    | `/account/job-listings`     | yes            | Returns the current user's job listings    |
| GET    | `/account/job-listings/:id` | yes            | Returns single job listing by current user |
| PUT    | `/account/job-listings/:id` | yes            | Returns user's newly updated job listing   |
| DELETE | `/account/job-listings/:id` | yes            | Deletes the user's job listing             |
| DELETE | `/account/saved-job/:id`    | yes            | Deletes the user's saved job listing       |

## Instalation and Starting

• Npm i - install dependencies

• Npm start - run app with node

• Npm run server - rup app with nodemon

• Npm run test - runs tests with mocha

• You'll need to create your own .env file with:

MONGODB_URL={your_key_here}<br>
JWT_SECRET={your_secret_here}
