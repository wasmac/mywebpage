import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/Reloadbar.css";
import TitleBar from "./components/titleBar";
import MainMenu from "./components/mainMenu";

//- create a new animation that pops after 2nd rod goes throguh the screen

//- create a CSS for MenuButtons, populate them on MainMenu page and create Routing for them
//- continue with dev of the MainMenu page

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TitleBar />} />
      <Route path="/mainMenu" element={<MainMenu />} />
    </Routes>
  );
};

export default App;
