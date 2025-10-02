# Git & React Workshop

Welcome to the **Git & React Workshop**! This README will guide you through the essential steps for using Git and starting a React.js project. Follow along to set up your environment, manage your code, and build your first React app.

---

## Table of Contents
- [Git Basics](#git-basics)
- [GitHub Overview](#github-overview)
- [Git Setup](#git-setup)
- [Working with Git](#working-with-git)
- [Branching in Git](#branching-in-git)
- [React.js Introduction](#reactjs-introduction)
- [Node.js Check](#nodejs-check)
- [Setting Up a React Project](#setting-up-a-react-project)
- [React Concepts](#react-concepts)
- [Feedback](#feedback)

---

## Git Basics
Git is a **version control system** that tracks and manages changes to files over time.  
It uses **repositories** to store your project files and their entire change history, making collaboration easy.

---

## GitHub Overview
GitHub is a **web-based platform** for hosting your Git repositories.  
It allows you to store code online, collaborate, track issues, and showcase your projects.

---

## Git Setup
1. **Install Git**  
   Download from [git-scm.com](https://git-scm.com).

2. **Configure your user info**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@eg.com"
git config --global color.ui auto
```

---

## Working with Git
- **Initialize a repository**
```bash
git init
```

- **Clone a repository**
```bash
git clone https://github.com/YOUR_USERNAME/repo.git
```

- **Stage, commit, and push changes**
```bash
git add sayhello.txt
git commit -m "Initial Commit"
git push
```

- **Check status and history**
```bash
git status
git log
```

---

## Branching in Git
- **List branches**
```bash
git branch
```

- **Create a new branch**
```bash
git branch <branch-name>
```

- **Switch branches**
```bash
git checkout <branch-name>
```

- **Push a branch to remote**
```bash
git push --set-upstream origin <branch-name>
```

- **Merge branches**
```bash
git merge <feature-branch-name>
```

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

## Setting Up a React Project
1. **Create a new React project using Vite**
```bash
npm create vite@latest myweb --template react
cd myweb
```

---

## React Concepts

### JSX Example
```jsx
const element = <h1>Hello, world!</h1>;
```

### Component Example
```jsx
function Welcome(props) {
  return (
    <h1>Hello, {props.name}</h1>
  );
}
```

### Mapping a List
```jsx
const items = ['Apple', 'Banana'];
<ul>
  {items.map(item => <li key={item}>{item}</li>)}
</ul>
```

### Using State
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      count is {count}
    </button>
  );
}
```

### Handling Events
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      count is {count}
    </button>
  );
}
```
