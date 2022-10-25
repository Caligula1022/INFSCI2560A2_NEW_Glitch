# Document for A2

### **What framework did you pick and why?**

#### Answer:

I chose the React framework. The reason is not only because React is the most popular framework in the world today, but also because it is very efficient and easy to use.

React is used to create reusable user-interface components for each state, that can automatically update and render data without the need of reloading the page.So using React can provide a silky smooth experience.

At the same time, the JSX syntax used in React was amazing and made me feel how powerful it is, making the process of front-end development a lot smoother.

I was stunned when I discovered that I could create html elements directly in jsx. React also has its own DOM.

The Virtual DOM is React's lightweight version of the Real DOM. Real DOM manipulation is substantially slower than virtual DOM manipulation. When an object's state changes, Virtual DOM updates only that object in the real DOM rather than all of them.

This makes React a lot more efficient. Since I had some knowledge of angular before, I found this framework really easy to learn and understand when I was learning React. That's why I pick it.

#### Here are some React usage data.

- 475k websites on the web are powered by React.

- 64.8% of javascript developers are currently using React.
- Ranked 1st most popular front-end javascript framework in State Of JS survey.
- Github – 120.5k stars, 21k forks and 1200 contributors.

### **What about that framework appealed to you, for this project?**

#### Answer: There are several main points that attracted me.

1. First of all I think Declarative DOM is the most attractive point for me. Previous experience has come from using native html+css+js to render pages. In that process would frequently use DOM operations to interact with html elements. In my project, this operation is also used very often, so with the help of React's features, I think this problem will be solved very well and can speed up the development.

2. React is very friendly for code debugging. It is almost always possible to modify code to fix bugs while keeping it running. This was crucial for the development of this project, and because it was my first time working on such a project, it was inevitable that there would be many bugs.

3. React is very friendly for mobile development. I want my project to be ported to mobile. So developing with React framework can largely avoid many porting issues, which makes the development schedule much shorter.

4. Since this was my first time developing with the React framework, it inevitably required a lot of learning. And React has a very good learning curve. When comparing JavaScript frameworks face-to-face, you’ll quickly see that React is way more user-friendly than Vue.js, Angular.js, or Ember.js. An accessible learning curve is one of many benefits of using React.js and staying with this framework for my project. It also has a strong community support.

### **What alternative frameworks did you consider?**

#### Answer:

1. I certainly have also considered the vue framework. This framework is also very easy to get started and less expensive to learn as it is more similar to native web development.

Secondly, vue framework has very good code readability and single file components. Unit tests are used to examine the way the small parts of an app work independently. This component-based approach helps streamline app performance.

When all the components are stored in separate files, it becomes much easier to comprehend the code. Consequently, it becomes easier to eliminate errors and maintain the app.

In addition, the Vue.js framework doesn’t take lots of space and it is not heavy, which helps build more lightweight final apps, which are therefore faster to download.

2. Apart from vue, I also make some research for angular which is another the most popular framework in this world. Angular is widely used for creating large-scale systems that meet the needs of enterprises or organizations rather than the needs of a specific user. Such applications help organize the workflow in companies and manage specific operations.

Those systems can be, for example, CRMs, ERP systems, platforms for payment processing, email marketing, content management, etc.

Besides, Angular has a feature named Progressive Web Applications. An Angular PWA is a cost-friendly solution that allows using web technologies to run mobile apps across platforms online and offline.

PWAs work in a browser but behave similarly to native apps. The major reason why people prefer PWAs is that they don’t have to go to Google Play or App Store to download the app, they start using it right away.

### **What resources did you read/watch/listen to?**

#### Answer: The resources I use are basically from here:

1. INFSCI2560 class provided some links to help me to start a framework from scratch which helps me a lot especially at the beginning of the development. Several of these articles also clarified for me the differences between several common frameworks so that I could make a choice.

2. The second main resource is the tutorials from [w3school](https://www.w3schools.com/). These tutorials basically accompanied me throughout the entire process of the assignment. Whenever I encounter a point that is unclear or confusing I first go to the tutorials here. In addition, there are tutorial sites such as [MDN](https://developer.mozilla.org/) that have helped me a lot in this process.

3. My other main learning resource is [Udemy](https://www.udemy.com/course/react-tutorial-and-projects-course/), and I'm roughly halfway through a full React tutorial on that. This has helped me tremendously and given me a very systematic process of learning React. I think this is also the best choice for newbies to learn a framework, because you can start with a complete systematic tutorial, from the simple to the difficult, all aspects. You can follow the tutorial and get familiar with the process of a web app from 0 to 1 in general.

4. It is also important to mention the help from StackOverFlow, which is also a source of learning that should not be ignored, especially in some cases to solve urgent problems.

### **Describe the site you built for this assignment. What does it do? What components or features of the framework did you explore for this project?**

#### Answer:

My site is a movie database that uses the open API of OMDB, so it can retrieve all the movie data of IMDB movie database. My app consists of two main types of pages, one is my main page, which is the search page. In this page you are able to see a search box and a wall of movie posters retrieved by title. The other type of page is any individual movie page. When you click on any movie on the movie poster wall, you can enter the individual movie page, which includes a lot of information, including a link to the imdb website, in addition to the title, cast and year, and director. There is also a button to go back to the home page. This basically makes up my entire project.

To complete this project, I learned the following features of React.

1. the Router component in React, through which I can route between multiple pages inside the project and implemented by a unified React-style approach, making the project consistent.

2. In order to develop the project smoothly, I learned and explored JSX syntax. The use of this syntax allows mixing js syntax and html elements in React, which saves a lot of time in the development process and makes the code much more readable.

3. focus on exploring the useState, useEffect, useContext and other Hooks in React. it is the existence of these hooks that makes React so powerful.

The first hook is a relatively new feature of React that allows function components to access state and other react features. useState allows us to track the value of the state in a function component.

So in my project, I need to use useState to control whether the page is loading, whether there is an error, what movie is being read, what query statement is being entered, and so on.

In addition, useEffect is a bit more complicated, because React's html is the return value of a function, so it is difficult to do operations such as fetch data in the process, so the designers developed useEffect to generate some side effects in the component in order to do some operations on the data.

For example, I will use useEffect to perform fetch data operations to get data through the API. In addition, there is useContext, a hook that helps us to manage state globally, so with a reasonable design, we can use the state we define in various parts of the project, which is very convenient.
