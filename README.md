# Personal Website in ReactJs Workshop

Welcome to the **Personal Website Workshop**! This README will guide you through the essential steps for using ReactJs and creating your personal website Follow along to set up your environment, manage your code, and build your first draft for your personal website! Be creative, play around. This is YOUR personal website, inject your personality into it!

---

## Table of Contents
- [React.js Introduction](#reactjs-introduction)
- [Node.js Check](#nodejs-check)
- [Setting Up a React Project](#setting-up-a-react-project)
- [React Concepts](#react-concepts)
- [How to find react libraries](#how-to-find-local-libraries)
- [Deployment using Vercel](#deployment-using-vercel)
---

## React.js Introduction
React.js is a **JavaScript library** for building dynamic user interfaces using **reusable components**, **state**, and **props**.

### Why React?
- Fast & efficient  
- Reusable code  
- Easier interactivity

---

## Node.js Check
Before starting with React, make sure you have **Node.js installed**:
```bash
node -v
```

If not installed, download from [nodejs.org](https://nodejs.org).

---

## React Concepts

### JSX Example
```jsx
const element = <h1>Hello, world!</h1>;
```

### Component Example

A reusable function that returns jsx.

```jsx
function Welcome(props) {
  return (
    <h1>Hello, {props.name}</h1>
  );
}
```


### How to find react libraries

I want to acheive a typewrite effect.

Visit [node package manager](https://www.npmjs.com/) and look for the library that can help you do this.

In this project, I want to use to typewriter effect so I run the following command to install it.

```bash
npm install react-simple-typewriter
```

### Deployment using Vercel

Create a vercel account through github account using https://vercel.com
