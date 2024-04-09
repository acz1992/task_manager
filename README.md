# Task Manager App

## About

## The Mission
While on the move and occupied, I often remember all of the tasks I need to complete. However, as soon as I am in a position to address them, I forget them. Therefore, I wanted to be able to keep track of all of these tasks, define by importance, and be able to use this app on both my phone and laptop.

## Tech / Resources

### Stack

This project uses Next 13, TypeScript, MongoDB and Prisma.

### Dependencies Used

### Resources

-   **Clerk/NextJS**: Seamlessly integrates authentication and user management into Next.js applications.
    
-   **Styled-Components**: A library for styling React components using tagged template literals to write CSS in JavaScript.
    
-   **Axios**: Promise-based HTTP client for making asynchronous requests in JavaScript environments.
    
-   **React Hot Toast**: Displays toast notifications in web applications, with customizable styles and animations.
    
-   **Moment**: Library for parsing, validating, manipulating, and formatting dates and times in JavaScript.
  
-   **Next Top Loader**:  Plugin for Next.js applications that optimizes image loading by lazy-loading and serving images from a CDN.

## Future

### To do

-   **Render Bug**: When isCompleted is toggled, page UI doesnt update to match change in state

-   **Text overflow**: Maybe add scroll function to each Task card

-   **Change description to steps**: Instead of having a description field, have multiple input fields under description property that describe different steps for Task.
    - Requires investigating **nested documents/ arrays** in MongoDB and how to represent this in DataBAse Schema.
    - Could also have a toggle method for each step that when clicks, crosses out particular step

-   **Add Light Mode**: Low Priority, more for exhibiting ability rather than useful functionality.
