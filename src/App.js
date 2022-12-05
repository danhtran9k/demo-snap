import './App.css';
import { useEffect, useRef, useState } from 'react';
import { synapEditorConfig } from "./synapeditor.config"
import "./synapeditor.min"
import "./formula-parser.min"
import "./synapeditor.min.css"

function App() {
  const synapDomRef = useRef(null)
  const [editor, setEditor] = useState()

	useEffect(() => {
		if (!synapDomRef) return
    const synap = new window.SynapEditor("synapApp", synapEditorConfig)
    setEditor(synap)
	}, [])

  if(editor?.isLoaded){
    console.log("Init synap success")
  }

  return (
    <div className="App">
      <div id='synapApp'ref={synapDomRef} />
    </div>
  );
}

export default App;
