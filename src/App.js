import logo from './logo.svg';
import './App.css';
import DropZone from "./dropzone/DropZone";

function App() {
  return (
    <div className='App'>
        <p className="title">Upload your image</p>
        <p className="subTitle">File should be Jpeg, Png,...</p>
        <div className="content">
          <DropZone />
        </div>
        <p className="text">Or</p>
        <button className="button">Choose a File</button>
    </div>
  );
}

export default App;
