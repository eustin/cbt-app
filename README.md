# A React Native app for Cognitive Behavioural Therapy

This will be a simple app that allows the user to complete CBT journal entries.

The first version will not persist state in any way. All state will be held in memory.

## Why this app?

1. Mental health is extremelly important. Global events over the past few years have highlighted that many of us don't know how to take care of it. 
2. I wanted to learn React Native.
3. I've been a data analyst/data scientist for over 10 years. I've always gravitated towards engineering and am a "builder of things" at heart. It's time for a change! 

## The current state of the app

Warning: It ain't pretty!

### Create a journal entry

![app current state](https://media.giphy.com/media/SorsVynTd5XNwW01k7/giphy.gif)

### Basic error handling when creating a journal entry

![error handling](https://media.giphy.com/media/SaTPaIbYOVBpEIfFSh/giphy.gif)

### Edit a journal entry

![edit a journal entry](https://media.giphy.com/media/WobvCvQ6BoFMQnnCNq/giphy.gif)

### Delete a journal entry

![delete a journal entry](https://media.giphy.com/media/TGzMIN2LTomhw0u63U/giphy.gif)

## Disclaimers

I'm an Android user with a Windows laptop running Ubuntu on WSL2. I haven't tested this on an iPhone. 

## Prerequisites

* Android Studio
* Node.js
* npm

## How to run this app on your computer

1. In the root of this repository, issue `npm install`
2. Start your Android Virtual Device (AVD).
3. Run `npm run android`

The app should soon appear on your AVD.

## Next steps

* It's time to refactor some code! 
  * `EditEntryScreen` and `CreateEntryScreen` share a lot of common code. I'll extract the common functionality into a separate component. 
  * The StackNavigator in `App.js` contains some complex logic to create and handle events related to the edit and delete icons. I'll do some research to see how others have extracted logic from their navigators to make `App.js` cleaner.
  * I might create a theme context and wrap the app in a theme provider component.  
* Make the app prettier!
* Persist app state in local storage.
