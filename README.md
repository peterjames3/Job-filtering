# React + Vite

This  is a solution to the [job listingd with filtering on frontend mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt)


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories


### Screenshot
1. ![solution view1](/src/assets/Screenshot%20from%202024-06-15%2022-22-04.png)
2. ![solution view2](/src/assets/Screenshot%20from%202024-06-15%2022-22-13.png)
3. ![solution view3](/src/assets/Screenshot%20from%202024-06-15%2022-22-31.png)
4. ![solution view4](/src/assets/Screenshot%20from%202024-06-15%2022-32-36.png)


### Built with
  - **React**
  - **Tailwindcss**
  - **vite**
  - **JavaScript**


### Dependencies
 - Json-server to simulate data fetching

 ### What I learned
 - Zustand for state management

 ### To run the application
The application uses mock server to facilitate data fetching
 1. Download/clone the project
 2. install json-server dependency
 3. start the server `json-server --watch data.json port 3004` can be a port of your choice the default one is 3000. Incase it chance ensure to update the parameters inside the fetch function iside the store.