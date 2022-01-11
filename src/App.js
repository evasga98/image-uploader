import logo from './logo.svg';
import './App.css';
import DropZone from "./dropzone/DropZone";

function App() {
  return (
    <div>
        <p className="title">Upload your image</p>
        <p className="subTitle">File should be Jpeg, Png,...</p>
        <div className="content">
          <DropZone />
        </div>
    </div>
  );
}

export default App;
