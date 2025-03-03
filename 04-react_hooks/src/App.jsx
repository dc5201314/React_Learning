import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import Textinput from "./components/Textinput";
import TotoList from "./components/TotoList";
import FetchData from "./components/FetchData";
import PafeTitle from "./components/PafeTitle";
import Weather from "./components/Weather";
import CurrentTime from "./components/CurrentTime";
import ThemeProvider from "./components/ThemeProvider";
import ThemeButton from "./components/ThemeButton";
import AnimateBox from "./components/AnimateBox";
import Child from "./components/Child";
import Child1 from "./components/Child1";
import ComponentSize from "./components/ComponentSize";
import Counter2 from "./components/Counter2";
import Data from "./components/Data";
import ExpensiveCalculation from "./components/ExpensiveCalculation";
import ExpensiveComponentParent from "./components/ExpensiveComponentParent";
import ExpensiveComponent from "./components/ExpensiveComponent";
import ExpensiveCalculationParent from "./components/ExpensiveCalculationParent";
import FocusInput from "./components/FocusInput";
import ListFilter from "./components/ListFilter";
import ListFilterParent from "./components/ListFilterParent";
import Parent from "./components/Parent";
import Parent1 from "./components/Parent1";
import Parent2 from "./components/Parent2";
import PreviousValue from "./components/PreviousValue";
import Search from "./components/Search";
import UserPage from "./components/UserPage";
import UserProfile from "./components/UserProfile";
import LoginForm from "./components/user/LoginForm";
import LogoutButton from "./components/user/LogoutButton";
import UserStatus from "./components/user/UserStatus";
import UserProvider from "./components/user/UserContext";
const App = () => {
  // const handleSearch = (query) => {
  //   console.log("Searching for:", query);
  // };

  return (
    <>
      <UserProvider>
        <div className="app-container">
          <UserStatus />
          <div className="content">
            <LogoutButton />
            <LoginForm />
          </div>
        </div>
      </UserProvider>
      ;
      {/* <h1>Search Example</h1>
      <Search onSearch={handleSearch} /> */}
      {/* <ThemeToggle />
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
      <Textinput />
      <TotoList />
      <FetchData />
      <PafeTitle />
      <Weather />
      <CurrentTime />
      <AnimateBox />
      <Child />
      <Child1 />
      <ComponentSize />
      <Counter2 />
      <Data />
      <ExpensiveCalculation />
      <ExpensiveComponentParent />
      <ExpensiveComponent />
      <ExpensiveCalculationParent />
      <FocusInput />
      <ListFilter />
      <ListFilterParent />
      <Parent />
      <Parent1 />
      <Parent2 />
      <PreviousValue />
      <UserPage />
      <UserProfile /> */}
    </>
  );
};

export default App;
