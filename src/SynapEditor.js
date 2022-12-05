import React, { useEffect, useRef, useState } from "react";
import { synapEditorConfig } from "./SynapEditor/synapeditor.config";
import "./SynapEditor/synapeditor.min.css";
import "./SynapEditor/synapeditor.min";



export const SynapEditor = ({editorId}) => {
	const synapDomRef = useRef(null);
	const [editor, setEditor] = useState();

	const synapId = `synap-${editorId}`
	
	useEffect(() => {
		if (!synapDomRef) return;
		const synap = new window.SynapEditor(synapId, synapEditorConfig);
		setEditor(synap);
	}, [synapId]);

	if (editor?.isLoaded) {
		console.log("Init synap success");
	}
	return <div id={synapId} ref={synapDomRef} />;
};
