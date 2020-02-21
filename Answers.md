1. What problem does the context API help solve?

   It makes it so that you don't need to keep passing down props through multiple components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   Dispatch passes info the reducer which changes the state and store stores the state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

   Application state is a state available everywhere while component is only needed in the component. When you only need something in one place it's good to use a component state

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   It's middleware that checks if an action creator returns a function and runs that.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

   Redux because it's a lot easier to manage state when it's all one thing.