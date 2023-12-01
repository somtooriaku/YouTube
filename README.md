# My Youtube 2.0


## Intro
Presenting youtube 2.0. my version of youtube.com which limits the addictive parts of youtube and provides it's most important features.
- You can find the live deployment [here](https://abetteryoutube.netlify.app)

## 🔍 Preview
### 📱 Desktop

![Alt text](assets/SS1.png?raw=true "Homepage")
![Alt text](assets/SS2.png?raw=true "Example of the search function")
![Alt text](assets/SS3.png?raw=true "A channel's feed")
![Alt text](assets/SS1.png?raw=true "A video Feed")

## 📚 Table of Contents

- [🔍 Preview](#-preview)
  - [💻 Desktop](#-desktop)
- [📚 Table of Contents](#-table-of-contents)
- [🚀 Features](#-features)
- [🔧 Getting Started](#-getting-started)
  - [Run Development Environment](#run-development-environment)
  - [Build for Production](#build-for-production)
- [🎨 Design](#-design)
- [👩‍💻 Technologies and Libraries Used](#-technologies-and-libraries-used)
- [♿ Accessibility](#-accessibility)
- [🧪 Testing](#-testing)
- [📝 Notes](#-notes)



## 🚀 Features

The user may:

- Load 50 videos at one
- See the number of views and likes a video
- Search for a specific video by title
- View recommeded and common titles from sidebar
- See videos that are similar to current video
  - Similar

## 🔧 Getting Started
Clone the project

```bash
  git clone git@github.com:somtooriaku/YouTube.git
```

Go to the project directory

```bash
  cd YouTube
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Remember to install dependencies after cloning it locally.

### Run Development Environment

```bash
yarn dev # npm run dev
```

### Build for Production

```bash
yarn build # npm run build
```

## 🎨 Design

All designs, including a design system, were created prior to any development, by attempting to structure it similarily to youtube.com. The appplication was styled using embedded CSS and importing icons from material UI.

## 👩‍💻 Technologies and Libraries Used

- React
- TypeScript
- MaterialUI
- Date-fns
- Styled Components
- Jest
- YouTube's API

Bootstrapped with my [React.js template](https://github.com/facebook/create-react-app).

## ♿ Accessibility

This application was built using a design first principle and is fully accessible on all possible platforms. The design is restructed for all forms of devices. It also has an accessibility score of 100 according to Google lighthouse. This was achieved using [semantic elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics) and aria labels using [a11yproject's checklist](https://www.a11yproject.com/checklist/).

## 🧪 Testing

Unit tests have been written for all components using Jest. You can run all tests in watch mode by using the command line:

```bash
yarn test # npm run test
```

Alternatively, generate coverage by using the following:

```bash
yarn test:coverage # npm run test:coverage
```

## 📝 Notes

All components were developed from scratch and implemented based on the design system created for this challenge.


 
## Features

- Search component that works like the youtube search bar
- Media feeds. (both videos nd their thumbnails)
- Fullscreen mode
- Open youtube channels
- View Video likes and channel subscribers
- search by common tags on the sidebar


## Deployment

The application is fully functional online and has been deployed to: [https://abetteryoutube.netlify.app]



## License

[MIT](https://choosealicense.com/licenses/mit/)

