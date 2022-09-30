import React, { useState } from 'react';
import '../Styles/DataStructure.css';
import vscode from '../../../Images/vscode.png';
import sublime from '../../../Images/sublimeImg.png';
import vs from '../../../Images/vs.png';
import intellig from '../../../Images/jetbrains_logo.webp';
import { dataStructureInfo } from '../services/dataStructureInfo';

function DataStructure() {
    const [buttonState, setButtonState] = useState(0);

    return (
        <React.Fragment>
            <h1 id="title">Ace your technical interviews and online assessments</h1>
            <div className="DSComponent">
                <div className="buttons">
                    <button className={buttonState === 0 ? 'selected' : ''} onClick={() => setButtonState(0)}>Heaps</button>
                    <button className={buttonState === 1 ? 'selected' : ''} onClick={() => setButtonState(1)}>Binary Trees</button>
                    <button className={buttonState === 2 ? 'selected' : ''} onClick={() => setButtonState(2)}>Stacks</button>
                    <button className={buttonState === 3 ? 'selected' : ''} onClick={() => setButtonState(3)}>Queues</button>
                </div>
                <div className="DSInfo">
                    <h2>{dataStructureInfo[buttonState].Title}</h2>
                    <h3>Overview</h3>
                    <p id="last">{dataStructureInfo[buttonState].Overview}</p>
                    <h3>Operations</h3>
                    <p>Insertion: {dataStructureInfo[buttonState].Insertion}</p>
                    <p>Deletion: {dataStructureInfo[buttonState].Deletion}</p>
                    <p>Retrieval: {dataStructureInfo[buttonState].Retrieval}</p>
                </div>
                <div className="codeEditor">
                    <h2>Use your favourite code editor</h2>
                    <p>To put into practice your new found knowledge of data structures and algorithms,
                    you can use your favourite code editor and follow along to solidify your understanding. We have provided some code editors below 
                    if u have not yet downloaded one. Happy coding!
                    </p>
                    <div className="editors">
                        <a href="https://code.visualstudio.com/" target="_blank">
                            <div>
                                <img src={vscode} alt="Visual Studio Code icon"/>
                                <p>VS Code</p>
                            </div>
                        </a>
                        <a href="https://www.jetbrains.com/" target="_blank">
                            <div>
                                <img src={intellig} alt="Jetbrains icon"/>
                                <p>JetBrains IDEs</p>
                            </div>
                        </a>
                        <a href="https://www.sublimetext.com/" target="_blank">
                            <div id="secondLast">
                                <img src={sublime} style={{'width': '105px'}} alt="Sublime Text icon"/>
                                <p>Sublime Text</p>
                            </div>
                        </a>
                        <a href="https://visualstudio.microsoft.com/" target="_blank">
                            <div id="lastItem">
                                <img src={vs} alt="Visual Studio icon"/>
                                <p>Visual Studio</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DataStructure;