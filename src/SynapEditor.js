import React, { useEffect, useRef, useState } from "react";
import { synapEditorConfig } from "./SynapEditor/synapeditor.config";
import "./SynapEditor/synapeditor.min.css";
import "./SynapEditor/synapeditor.min";

const url =
	"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

export const SynapEditor = ({ editorId }) => {
	const synapDomRef = useRef(null);
	const [editor, setEditor] = useState();

	const synapId = `synap-${editorId}`;

	useEffect(() => {
		if (!synapDomRef) return;
		const synap = new window.SynapEditor(synapId, synapEditorConfig);
		setEditor(synap);
	}, [synapId]);

	useEffect(() => {
		if (synapDomRef && editor?.isLoaded) {
			editor.setEventListener("afterUploadImage", (e) => {
				const image = editor.getAPIModelById(e.elementId);
				image.setSrc(url);
			});
		}
	}, [editor]);

	if (editor?.isLoaded) {
		console.log("Init synap success");
	}

	return <div id={synapId} ref={synapDomRef} />;
};
