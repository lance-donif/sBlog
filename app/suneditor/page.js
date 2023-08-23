'use client'
import React, {Suspense} from 'react';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import {useRef,useState} from "react";
import {Ddt} from "@/app/todol";

const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
    loading: () => <div>Loading...</div>,

});

export default function  MyComponent ()  {
    const [html, setHtml] = useState('');
const suneditorRef = useRef(
    {
        "mode": "classic",
        "rtl": false,
        "katex": "window.katex",
        "imageGalleryUrl": "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",
        "videoFileInput": false,
        "tabDisable": false,
        "buttonList": [
            [
                "undo",
                "redo",
                "font",
                "fontSize",
                "formatBlock",
                "paragraphStyle",
                "blockquote",
                "bold",
                "underline",
                "italic",
                "strike",
                "subscript",
                "superscript",
                "fontColor",
                "hiliteColor",
                "textStyle",
                "removeFormat",
                "outdent",
                "indent",
                "align",
                "horizontalRule",
                "list",
                "lineHeight",
                "table",
                "link",
                "image",
                "video",
                "audio",
                "math",
                "imageGallery",
                "fullScreen",
                "showBlocks",
                "codeView",
                "preview",
                "print",
                "save",
                "template"
            ]
        ],
        "lang(In nodejs)": "en"
    }
);
    function handleChange(content) {
        // console.log(e.target.value)
        console.log(content)
        setHtml(content)    }
    return (
        <div>
            <p> My Other Contents </p>
            <SunEditor  setOptions={suneditorRef.current}  value={html} onChange={handleChange}   />

            <Suspense fallback={<Loading />}>
                <Ddt html={html}/>            </Suspense>
        </div>
    );
};
function Loading() {
    const setTime=()=>{
        setTimeout(()=>{
            console.log('Loading Done')
        },3000)}
    return <h2>🌀 Loading...</h2>;
}
