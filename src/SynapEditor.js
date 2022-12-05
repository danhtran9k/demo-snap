import React, { useEffect, useRef, useState } from "react";
import { synapEditorConfig } from "./SynapEditor/synapeditor.config";
import "./SynapEditor/synapeditor.min.css";
import "./SynapEditor/synapeditor.min";



export const SynapEditor = () => {
	const synapDomRef = useRef(null);
	const [editor, setEditor] = useState();

	useEffect(() => {
		if (!synapDomRef) return;
		const synap = new window.SynapEditor("synapApp", synapEditorConfig);
		setEditor(synap);
	}, []);

	if (editor?.isLoaded) {
		console.log("Init synap success");
	}
	return <div id="synapApp" ref={synapDomRef} />;
};
