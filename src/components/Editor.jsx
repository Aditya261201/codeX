import React from 'react'
// import 'codemirror/lib/codemirror.css'
// import 'codemirror/theme/material.css'
// import 'codemirror/mode/xml/xml'
// import 'codemirror/mode/javascript/javascript'
// import 'codemirror/mode/css/css'
import CodeEditor from '@uiw/react-textarea-code-editor';




const Editor = (props) => {

    const {language , displayname , value , onChange} = props;

    function handleChange(editor,data,value){
        onChange(value);
    }



    return (
        <div className="editor-container">
            <div className="editorTitle">
                {displayname}
            </div>
            <CodeEditor
                className='editor'
                language={language}
                placeholder={`Please enter ${language} code.`}
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                style={{
                    color:"white",
                    backgroundColor: "black",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    overflow: scroll,
                }}
                />
        </div>
    )
}

export default Editor
