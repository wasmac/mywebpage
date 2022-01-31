import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/Reloadbar.css";
import TitleBar from "./components/titleBar";
import MainMenu from "./components/mainMenu";
import AboutMe from "./components/pages/aboutMe";
import Projects from "./components/pages/projects";
import WorkExpierience from "./components/pages/workExperience";
import ContactMe from "./components/pages/contactMe";

//- create a new animation that pops after 2nd rod goes throguh the screen

//- create a CSS for MenuButtons, populate them on MainMenu page and create Routing for them
//- continue with dev of the MainMenu page

//Final conecpt:
//- make it look as DS ptd edition
//- big name in center and button that after click is chagning its look to main menu buttons
//- first animation,screen is blured, the title is slowl getting less brightness unless its easy to look at
//- while the title text is still fady and just becomes visible all the other stuff is already ready to work with
//- after pressing start the component is immidietly changed (only the button) no animations included
//- on hover the button has red color- no animations again, the borders are suqres simple squares
//- on going to different page the previous one is fading and new one appears- it follows this patern only after initial main menu click

//- in projects create a sub page that says "cool effects that i've found online" and show that u know how to implement those
//- add buttons to invoke those actions
//- stuff to show: rain, reloadbar, carousel

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TitleBar />} />
      <Route path="/mainMenu" element={<MainMenu />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/WorkExpierience" element={<WorkExpierience />} />
      <Route path="/ContactMe" element={<ContactMe />} />
    </Routes>
  );
};

export default App;
