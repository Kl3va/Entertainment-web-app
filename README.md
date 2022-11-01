# Entertainment web app

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

- My users are able to view the optimal layout for the app depending on their device's screen size...
- They can all see hover states for all interactive elements on the page
- They can navigate between Home, Movies, TV Series, and Bookmarked Shows pages
- Add/Remove bookmarks from all movies and TV series
- Search for relevant shows on all pages
- This waas built as a full-stack application with login and signup screens

### Links

- Solution URL: [github](https://github.com/Kl3va/Entertainment-web-app)
- Live Site URL: [netlify](https://entertainment-mini-app.netlify.app/)

## My process

### Built with

- JSX
- SCSS module system
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Firebase](https://firebase.google.com/) - Database Framework for storing data
- [Scss Module](https://sass-lang.com) - For styling

### What I learned

- My key takeaway was learning how to use firebase to authenticate users, store data on firestore cloudstorage, persist auth state as well as update the storage. Using the functions provided by firebase to implement these was a joy to behold.
- Learning how to use scss modules to style for such a large project was cool. It has a little similarity with styled components.
- I was also able to get acquainted with implementing private routes/protected routes for displaying certain components according to a user's authorization.
- I equally learnt how to structure my project folders according to the size of the project. Here's a link; [pedro Tech](https://www.youtube.com/watch?v=XEO3mFvrDx0&t=702s).
- Getting better as styling using the mobile first approach workflow.
- I'm glad I read the reactrouter docs for implementing this type of user interface. It was challenging at first sight, but the way i structured it, aided me in implementing the search functionality with ease without having to render a search component for every page... All i needed to do was make it a persistent component with the pages serving as outlets.
- Also comfortable with creating reusuable components as seen with the search results.
- For the first time I was able to use custom hook to fetch authentication. I was overly impressed with this.
- I moved away from using relative paths to absolute paths for importing my files. All thanks to [Fola Folarin](https://github.com/folathecoder)... An amazing person to my progress so far.

I'm so impressed about these codes:

```css
.snap__inline {
  scroll-snap-type: inline mandatory;

  & > * {
    scroll-snap-align: start;
  }
}
```

```js
//loops over an array, compares the ids of passed and contained and changes the value of bookmarked prop
const bookmarkMovie = (id) => {
  const newState = movieData.map((obj) => {
    // if id equals obj[id], update bookmarked property

    if (obj.id === id) {
      const { isBookmarked } = obj
      return { ...obj, isBookmarked: !isBookmarked }
    }

    // else return the object as it is
    return obj
  })
  //Store newstate into the movieData array.
  setMovieData(newState)
}
```

### Continued development

- I'm looking at learning reduxToolKit very well... Also, NextJs to be applied in my next project which is an e-commerce application. Might as well pick up TypeScript cause there's a high demand for it lately.
- Getting better at writing reusuable code is my next line of improvement, because after building, I was able to spot out things I could ve done differently.
- Also,Late into the project I read someone's(Kadet') code implementation of a certain spiral animation that made top trends a certain time on twitter and I was so impressed with how he commented his codes... Very descriptive. I'm looking to build on that moving forward. I really loved what I saw.
- I will be exploring firebase more, cause my solution can be improved upon by:
  - fetching user's data directly from firebase using the snapshot event listener as against my current approach of updating the docs using the sendDocs function when a change occurs in the state... Cause this pattern will enable me ignore a situation where a user refreshes the page. My current set up, utilizes sessions, which isn't optimal.
  - setting up a better storage structure cause the current one makes a lot of reads and writes. I've an idea of the approach(making a call to only a unique collection with default properties n values as a reference n only changing a user's specified doc properties(bookmarks). This should be achieved using the 'where' statement provided by firebase. More to read up on.)

### Useful resources

- [Layouts](https://reactrouter.com/en/v6.3.0/getting-started/concepts#layout-routes), [Outlets](https://reactrouter.com/en/v6.3.0/getting-started/concepts#outlets) - This was effective in my implementation of the user interface structure.
- [Creating database for each user](https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document) - This part of the docs was helpful, cause i didnt need firebase to autogenrate an id for me... I simply created a specific user database using the id generated when a user was created during the signup functionality. This was helpful in manipulating the data contained in the database according to the specific user.

## Author

- Frontend Mentor - [@Kl3va](https://www.frontendmentor.io/profile/Kl3va)

## Acknowledgments

A huge shout out to Fola, Derek, Victor, Nkpozi, Olusegun, Zimway, Francis, Kristi... They were always available to answer my every question. Also, a huge thanks to the entire frontendmentor team for providing such a platform to aid developers out there.
