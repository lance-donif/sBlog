'use client'
import React, { useState,useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function MyComponent() {
    const [value, setValue] = useState('');
    // console.log(value)
    const  quillRef = useRef({
            toolbar: [
                [{ 'header': [1, 2, false] }],
                ['bold', 'italic', 'underline','strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image'],
                ['clean']
            ],

    });
    return <ReactQuill className="bg-amber-50"  theme="snow" value={value} onChange={setValue} modules={quillRef.current} />;
}

export default MyComponent;