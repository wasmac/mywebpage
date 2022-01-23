import "./App.css"
import "./styles/Reloadbar.css"
import TitleBar from './components/titleBar';


//maybe setState from here?

//- add typesafe lib so u can see the errors in compilation
//- make the TitleBar dissapear after animation as well
//- create a new animation that pops after 2nd rod goes throguh the screen
//- Create TitleMenu Component that hosts the most important data
//- maybe retrive that data from aws or smth simillar- git might be an option for hosting

const App = () => {

  return(
     <div>
      <TitleBar title= "Maciej Waskiewicz" continueButtonText = "Click to see my portfolio" />
    </div>
  );

}

export default App;
