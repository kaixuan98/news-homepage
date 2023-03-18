# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - News homepage solution](#frontend-mentor---news-homepage-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [💪 The challenge](#-the-challenge)
    - [🖼 Screenshot](#-screenshot)
    - [🔗 Links](#-links)
  - [My process](#my-process)
    - [🧰 Built with](#-built-with)
    - [📝 What I learned](#-what-i-learned)
    - [⚙️ Continued development](#️-continued-development)
    - [📡 Useful resources](#-useful-resources)
  - [Author](#author)

## Overview

### 💪 The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### 🖼 Screenshot

![Desktop Size](./desktop-size.png)
For mobile size screenshot, please check at the root file with the title `phone-size.png` and `phone-size-menu.png`

### 🔗 Links

- [Solution URL](https://github.com/kaixuan98/news-homepage)
- [Live Site URL](https://kaixuan98.github.io/news-homepage/)

## My process

### 🧰 Built with

- HTML 
- CSS custom properties with Sass Framework
- Flexbox
- [React in TypeScript](https://www.typescriptlang.org/docs/handbook/react.html) 

### 📝 What I learned

1. **BEM naming**
    Naming things is one of the hardest part in a project (in my opinion), in this project I implemented BEM naming which follow the following format: `Block__Element--Modifier`. For example, if I have a UI component, which is an article, under the article, it has a title. The BEM naming for that article is `article__title`. If we need different version of the title, maybe it is in a dark background we can add a modifier to it (`article__title--darkbg`). This is just a simple example for BEM naming convention. In this project, I had tried to do the best practice for BEM naming and try to be general and concise but yet this is a skill that required practise. 
2. **CSS (change of mental model)** 
   CSS might seems to be random and no order to it. I used to think CSS is just a bunch of properties and each of them works on its own element or children until I came across an article ["Understanding Layout Algorithms by Josh Comeau"](https://www.joshwcomeau.com/css/understanding-layout-algorithms/). This article change the way I think about CSS layouts, I can better understand and visualize how my components and elements interact with each other in the code. 
3. **TypeScript**
   I had some exposure in Typescript during a course in my final year of University, and now I wanted to add that to my tech stack. I started this project with React framework in typescript. The challenges is that I am so used to React without types, I always get error when I am passing a prop or setting up a variables. I learned how to pass props in React typescript, create custom types, and use types in React hooks. 


### ⚙️ Continued development
1. add one more breakpoint for the tablet
2. organized my SASS code to be more dynamic and modular - try to add a simple breakpoint manager with SASS
3. organized my react code to be more modular 

### 📡 Useful resources

- [Understanding Layout Algorithm by Josh Comeau](https://www.joshwcomeau.com/css/understanding-layout-algorithms/) 
- [BEM Naming](https://getbem.com/naming/)
- [SASS Best Practice](https://sass-guidelin.es/)


## Author

- Website - [Avery Chin](https://www.averychin.xyz)
- Frontend Mentor - [@kaixuan98](https://www.frontendmentor.io/profile/kaixuan98)
- Github - [@kaixuan98](https://github.com/kaixuan98)

