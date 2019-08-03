# Sprint Challenge: React - Star Wars

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored ReactJS, Function Components, component state and side effects. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency ReactJS Fundamentals and your command of the concepts and techniques in the Function Components and Class Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge, create a web page that presents a styled list of Star Wars characters. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [x] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    - React JS is a library that is designed to make it easy to create and implement user interfaces. It works well with a lot of other technologies, giving you a lot of flexibility in your projects. It takes a lot of the headaches out of managing the DOM and all of the elements that need to be updated in today's complex applications.

- [x] What does it mean to _think_ in react?

    - To think in React means to think about a web application in terms of components. It means to break down your application into small components, each with an individual task, and then think about how each of those parts will make up the whole of your application. What this means in practice is thinking about what data each of your components will have access to, and how the components will interact with each other. This approach will allow you to build much cleaner and scalable applications.

- [x] Describe state.

    - State is used to represent parts of your component that can change for various reasons. In React, we have been using the State hook, which has a variable to hold the current state, as well as a function that handles changes to the state. When the state changes in our application, the application will re-render to the page.

- [x] Describe props.

    - Props are used to pass information about state between components in our application. Props is short for "Properties" It's important to note that they are read only. When changes need to be made, they are sent to the state holding components, and when the state changes the props are updated accordingly.

- [x] What are side effects, and how do you sync effects in a React component to state or prop changes?

    - A side effect is anything that causes an effect outside of the the scope of the function. For example, an API call is a side effect, because it happens outside of the scope of the function. A side effect will cause a component to return a different output, despite having consistent state and props.

## Project Set Up

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add PM as collaborator on Github.
- [x] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [x] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [x] Change directories into `./starwars` (`cd starwars`) and run `yarn install` or `npm install` to retrieve all needed dependencies.
- [x] Once you have installed the _node_modules_, run `yarn start` or `npm start` to get your server up and running.
- [x] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
Follow these steps for completing your project.
- [x] Implement the project on this Branch, **committing progress & changes often.**
- [x] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [x] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [x] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] PM then will count the HW as done by merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

- [x] Fetch a list of Star Wars characters from the [Star Wars API (or SWAPI)](https://swapi.co/) and render them to the screen. 
- [x] Follow the documentation to learn how to fetch a list of "people". However, don't spend _too_ long on this. Here is a link for you to follow if you've looked around the docs for about 15 minutes or so and haven't found where to go - [Secret Link to Awesomeness 🤫](https://swapi.co/documentation#people).
- [x] Set the data you fetch to state.
- [x] Map over the list and render a component for each character on the page.
- [x] You must have at least one element for each star wars character in the data set.
- [x] The elements must be styled with either SemanticUI or styled-components - don't rely on browser default styles.

#### Required best practices:

- [ ] Consistent naming. Examples: variables, functions, Components, and file/folder organization.
- [ ] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
- [ ] Consistent quotation usage.
- [ ] Spell-check.
- [ ] Schedule time to review, refine and reassess your work.


It is better to submit a challenge that meets [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) than one that attempts too much and fails.

## Stretch Problems

- [ ] Add at least one test using a testing tool:
  - [react-testing-library](https://github.com/testing-library/react-testing-library#basic-example)
  - [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

- [ ] Build a pagination system that will allow you to load the next page of data.
  - `console.log()` the data coming back from the server.
  - Notice that there are `next` and `previous` fields that give you a URL.
  - You can build a function that will get characters called `getCharacters` that you can use dynamically to get the next or previous set of characters. You would need to supply it with the proper fields, and you'll need to set up more state to do this.

<!--
- [ ] Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.
-->
