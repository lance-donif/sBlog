'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Strike from '@tiptap/extension-strike'

const Tiptap = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,    Strike,
        ],
        content: '<p>Hello World! 🌎️</p>',  autofocus: true,
        editable: true,
        injectCSS: false,
    })

    return (
        <EditorContent editor={editor} />
    )
}

export default Tiptap