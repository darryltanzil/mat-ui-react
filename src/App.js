import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ButtonGroup variant="contained" color="primary">
        <Button
          startIcon = {<SaveIcon />}
          onClick={() => alert("hello!")}
          color="primary"
          size="medium"
          >
          Hello World!
        </Button>
        <Button
          endIcon = {<DeleteIcon />}
          onClick={() => alert("hello!")}
          size="medium"
          >
          Hello World!
        </Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
