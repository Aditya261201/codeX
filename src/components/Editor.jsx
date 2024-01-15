import React, {useState} from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';
import { IoIosRefresh } from "react-icons/io";
import { useTheme } from "../ThemeContext";


const Editor = (props) => {

    const {language , displayname , value , onChange} = props;
    const { theme } = useTheme();



    return (
        <div className="editor-container">
            <div className="editorTitle">
                {displayname}
                <IoIosRefresh className='refresh' onClick={()=>{onChange('')}} />

            </div>
            <CodeEditor
                className={theme==="light"?"editor":"editor-dark"}
                language={language}
                value={value}
                placeholder={`Please enter ${language} code.`}
                onChange={(evn) =>onChange(evn.target.value)}
                padding={15}
                style={{
                    // color:"white",
                    // backgroundColor: {theme==="light"? "white":"black"},
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    overflow: scroll,
                }}
                />
        </div>
    )
}

export default Editor
