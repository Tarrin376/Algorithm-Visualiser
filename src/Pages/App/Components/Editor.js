import '../Styles/Editor.css';
import { codeSources } from '../services/CodeSources';
import { ContextProvider } from '../index';
import { useContext } from 'react';

function Editor({ algorithm }) {
    const context = useContext(ContextProvider);
    const toggleEditor = () => {
        if (!context.disable) {
            localStorage.setItem('editorToggle', !context.editor);
            context.setEditor((editor) => !editor);
        }
    };
    
    return (
        <div className={context.darkMode ? 'editorWrapper dark-wrapper' : 'editorWrapper'} style={context.editor ? {} : {bottom: '-370px'}}>
            <div className="minimiseContainer">
                <div className="minimise" onClick={toggleEditor}></div>
            </div>
            <div className={context.darkMode ? 'dark-editor editor' : 'editor'}>
                <div className="code">
                    <h2>Java code for {algorithm}:</h2>
                    {codeSources[algorithm].codeImage}
                </div>
                <div className="explanation">
                    <h2>Explanation of code:</h2>
                    <p>{codeSources[algorithm].codeExplanation}</p>
                    <h3 id="keys">{codeSources[algorithm].keys}</h3>
                    <div className="complexityAnalysis">
                        <h3>{codeSources[algorithm].timeComplexity}</h3>
                        <h3>{codeSources[algorithm].spaceComplexity}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Editor;