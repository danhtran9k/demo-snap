import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { synapEditorConfig } from "./synapeditor.config"
import { customConfig } from './customConfig';

function App() {
  const [editor, setEditor] = useState()

  useEffect(() => {
    // const script = document.createElement("script")
    const script = document.getElementById("synapScript")
    // script.src = "/SynapEditor/synapeditor.min.js"
    // script.async = true
    // document.body.appendChild(script)
    // script.onload = () => {
    //   const se2 = new window.SynapEditor("synapEditor", synapEditorConfig)
    // }
    console.log(window)
    if (!script) {
      return
    }
    console.count("🚀 App-L23 render")
    window.editor = new SynapEditor("synapApp", customConfig)
    // script.addEventListener('load', function () {
    //   console.count("🚀 App-L23 render")
    //   const se2 = new window.SynapEditor("synapEditor", synapEditorConfig)
    //   console.log("🚀 App-L24-se2", se2)
    // });
  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
      <div id='synapApp' style={{ backgroundColor: '#ffffff', width: '100%', height: '500px' }}> SynapEditor</div>
    </div>
  );
}

export default App;
