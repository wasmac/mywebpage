import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/Reloadbar.css";
import MainMenu from "./components/mainMenu";
import AboutMe from "./components/pages/aboutMe";
import Projects from "./components/pages/projects";
import WorkExpierience from "./components/pages/workExperience";
import ContactMe from "./components/pages/contactMe";

//Final conecpt:
//- first only the continue thing is visible then title appears blured and then it slowly unblurs while its brightinning setting is lowered
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
    <div className="flex bg-black">
      <Routes>
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/WorkExpierience" element={<WorkExpierience />} />
        <Route path="/ContactMe" element={<ContactMe />} />
        <Route path="/" element={<MainMenu menuStatus="not-visible" />} />
      </Routes>
    </div>
  );
};

export default App;
