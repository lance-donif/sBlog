"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Strike from "@tiptap/extension-strike";
import tiptap from "./tiptap.module.css"
import {
    BubbleMenu,
    FloatingMenu,
  } from '@tiptap/react'
const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Strike],
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;

const Toolbar = ({ editor }) => {
  return (
    <>
    {editor?
    <div>
    <button onClick={() => editor.chain().focus().toggleBold().run()}>
      bold
    </button>
    
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`${editor.isActive('bold') ? 'is-active' : ''} ${tiptap.tEditor}`}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          Strike
        </button>


        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          Bullet List
        </button></div>:<div></div>}

    </>
  );
};
