import "./App.css"
import "./styles/Reloadbar.css"
import TitleBar from './components/titleBar';


//maybe setState from here?

const App = () => {

  return(
     <div>
      <TitleBar title= "Maciej Waskiewicz" continueButtonText = "Click to see my portfolio" />
    </div>
  );

}

export default App;
