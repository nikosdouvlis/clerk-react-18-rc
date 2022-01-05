import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SignedIn, UserButton, SignedOut, SignIn } from "@clerk/clerk-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React 18 RC app
        <SignedIn>
          You are signed in <UserButton />
        </SignedIn>
        <SignedOut>
          <SignIn />
        </SignedOut>
      </header>
    </div>
  );
}

export default App;
