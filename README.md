A responsive Task Manager App that allows me to list and track outstanding tasks, in order to better organise myself

## Mission

-   While on the move I am aware of all the things I need to do, but once I am in a position to do them, I suddenly forget
-   Wanted to be able to keep track of these tasks via a mobile app that could also be used in the browser

## Tools

### Technologies Used

TypeScript, Next.js 13, Styled Components, Tailwind

### Dependencies Used

-   **Axios** - Library that simplifies sending asynchronous HTTP Requests to RESTful APIs and fetching data from servers
-   **React Hot Toast** - Toast notification library that provides non-intrusive onscreen messages conveying information to user
-   **Moment** - Popular JS package for handling dates and times
-   **Next Top Loader** - Loading bar component
-   **CSS Loaders** - Collection of loader animations

## To do:

### Edit Task

-   Add PUT method on backend and Edit Modal on frontend that allows user to update task

### Text overflow

-   Maybe add scroll

### Change description to steps

-   Instead of having a description field, have multiple input fields under description property that describe different steps for Task.
-   Requires investigating **nested documents/ arrays** in MongoDB and how to represent this in DataBAse Schema.
-   Could also have a toggle method for each step that when clicks, crosses out particular step

### Light and Dark mode

-   Add light/ dark mode
