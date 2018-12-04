import { auth } from '../src/components/Firebase/firebase';

//Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.doCreateUserWithEmailAndPassword(email, password);

//Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.doSignInWithEmailAndPassword(email, password);

//Sign Out
export const doSignOut = () =>
    auth.signOut();

//Password Reset
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email);

//Password Change
export const doPasswordUpdate = (password) => 
    auth.currentUser.updatePassword(password);