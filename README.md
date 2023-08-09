# React + Vite

1. first we authorise the firebase and follow the steps to begin the firebase
2. we make the project name in the firebase after we follow the inteuctions copy and paste the api in the folder name config which is known as 'firebase'
   3)we call the getauth and export into the auth variable and make it export into Auth compoenent

4) now we make the compoenent name Auth and import the createEmailAndPassword from the firebase/auth

5) then we make the ui of email and pass amke them onClick with the firebase useState
   6)useState basically set the values of pass and email and make a function to save the data in the firebase
6) we make the signIn async and async return alot of promises
7) we make in try and catch
8) as await return a lot of promises
9) now we make a button of signInWithGOOGLE AND AUTHERISE IT WITH FIREBASE AND MAKE AVARIABLE CALLED GOOGLE PROVIDER import const googleProvider IN THE FIREbase.jsx

export const googleProvider = new GoogleAuthProvider();

int his we authorise the google authenticartion

10.import { GoogleAuthProvider, getAuth } from "firebase/auth";
we import the GoogleAuthProvider from the firebase

11. now we same to same make the button of googlesignin like login and make a button signout from import the signOut

12)now we make the crud and enable the ui of login and logout

13.Now we working on the App.jsx and we make the collection to call the data data and puthe collection to call the docs from the firebase

14. we make the crud and make useEffect and inside the useEffect we make the await and async function we inside it because we want in the promises and it is only possible in the await and async now we make the firestore rules and on the the rulle by making true and now we make the the async and await in the try catch

15) now the firestore rules

16)we make edit the firebase rules and make the true in it 17) now we make the crud of the app 18) we make the state of the title, released date and is oscar or not 19) we make the 3 state relate to each and make the input and button individually of these 20) now we make the loop of db using the map function and make put the vlaue into the each fields with the help of a useEffectg to show the change on the screen

21 now we make the delete the the witht the help of a function call deletedoc from firebase and make the async function nad call the id fro the button and make the inout for the delete item make it onchange and call the id in the created function deleteMovie

22. same goes for the update the move by makein the inout field onchange with the event and make a fucntion to call the function updateMovie and from the function of firebase we make it updated called updateDoc

23)
