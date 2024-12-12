# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications where an infinite loop is created due to improper usage of the `useEffect` hook. The bug occurs because the `count` state variable is included in the dependency array, causing the effect to run continuously, updating the `count` and triggering another update, and so on.

## Bug Description
The `useEffect` hook is designed to perform side effects based on changes in the component's state or props. However, if a state variable that is modified inside the effect is also included in the dependency array, an infinite loop will result. This is because the change in state triggers the effect, which then modifies the state again, leading to another effect execution and so on.

## Solution
The solution involves removing the `count` state from the dependency array or using a different approach to update the state that doesn't create an infinite loop.  For example, using a timeout or only updating the state based on external events.