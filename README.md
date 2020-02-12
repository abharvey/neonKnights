# Trivia Challenge

#### In your favorite terminal

```bash
npm i
npm start
```

## Design & Sacrifices

I had some fun with the design, which ended up sacrificing test cases once the 8 hour mark hit. I was going for a 90s retro vibe with colors and shapes. Were I to put more time into the design some notable areas are lacking in attention around testing. The UI components should be better tested in my opinion and I could easily spend a couple more hours adding more robust edge cases for state management.
I also would put in another hour or so to clean up css style areas such as the focus and active states on the buttons as well as the results page question list.

## Libraries

#### styled-components

My favorite library around has to be styled-components. Keeping component styles close to display logic as well as being able to compose more clearly while writing css feels more natural than scss or less ever had!

#### theme-responsively

This is a small library I wrote to augment styled-component themes to easily create and manage responsive styling.

#### React Router

React router dom felt natural for this application with three distinct pages and easy composition of those routes. Particularly since I was avoiding any server side work.

#### craco

craco is a library that allows you to extend the create react app configuration without ejecting. For small applications this is really helpful to quickly solve things like jest configuration or module resolution paths. For maintainability I prefer to use aliased routes for clearer and faster refactoring as well as improve thought exercise when deciding where particular components should live.

#### Hooks over redux/mobx

This is a fairly small application, and with the context API I decided to use the reducer hook for state management to both emulate redux and simplify the setup, particularly over MobX/MobX State Tree. There was no benefit to expand on the state management for this.

##
