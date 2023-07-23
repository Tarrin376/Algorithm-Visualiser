import React, { useState, useRef, useEffect, useContext, createRef } from 'react';
import { algorithmStorage } from '../services/AlgorithmStorage';
import { Visualizations } from '../services/Visualizations';
import '../Styles/GridAlgorithms.css';
import { ContextProvider } from '../index';
import Editor from './Editor';

let grid = [];
const MAX_SIZE = 30;
const MIN_SIZE = 1;

function GridAlgorithms({ algorithm }) {
    const [row, setRow] = useState(10);
    const [col, setCol] = useState(10);

    const context = useContext(ContextProvider);
    const rowsInput = useRef();
    const colsInput = useRef();

    const [startSelected, setStartSelected] = useState(false);
    const [endSelected, setEndSelected] = useState(false);

    function updateGridSize() {
        const rowSize = parseInt(rowsInput.current.value);
        const colSize = parseInt(colsInput.current.value);
        rowsInput.current.value = '';
        colsInput.current.value = '';
        
        if (rowSize >= MIN_SIZE && rowSize <= MAX_SIZE && colSize >= MIN_SIZE && colSize <= MAX_SIZE) {
            setRow(parseInt(rowSize));
            setCol(parseInt(colSize));

            if ((algorithm === algorithmStorage.dp || algorithm === algorithmStorage.dijkstra)
                && (rowSize > row || colSize > col)) {
                context.setDisable(true);
            }
        }
    }

    return (
        <React.Fragment>
            <div id={context.editor ? '' : 'fullSize'} className={context.darkMode ? 'content cont-dark' : 'content'}>
                <Actions algorithm={algorithm} setStartSelected={setStartSelected} setEndSelected={setEndSelected} />
                <div className="gridComponent">
                    <button className="mobileTopics reset" onClick={context.toggleMobileTopics}>View Algorithms</button>
                    <div className="gridDimensions">
                        <input className={context.darkMode ? 'dark-input' : ''} disabled={context.disable} 
                            type="number" min={MIN_SIZE} max={MAX_SIZE} ref={rowsInput} placeholder={`Rows: {Max ${MAX_SIZE}}`} 
                            id="rows"/>
                        <input className={context.darkMode ? 'dark-input' : ''} disabled={context.disable} 
                            type="number" min={MIN_SIZE} max={MAX_SIZE} ref={colsInput} placeholder={`Cols: {Max ${MAX_SIZE}}`} 
                            id="cols"/>
                        <button id="updateSize" disabled={context.disable} onClick={updateGridSize} 
                        className={context.disable ? 'disabled' : ''}>Update Size</button>
                    </div>
                    <Grid 
                        row={row} col={col} algorithm={algorithm} 
                        setStartSelected={setStartSelected} setEndSelected={setEndSelected}
                        startSelected={startSelected} endSelected={endSelected}
                    />
                </div>
            </div>
            <Editor algorithm={algorithm}></Editor>
        </React.Fragment>
    );
}

function Actions({ algorithm, setStartSelected, setEndSelected }) {
    const [actionsDiv, setActionsDiv] = useState(true);
    const [clear, setClear] = useState(false);
    const context = useContext(ContextProvider);
    const clearButton = useRef();
    const actions = useRef();

    const selectButton = (state, value) => {
        context.setStartNode(false);
        context.setEndNode(false);
        context.setObstacle(false);
        state(!value);
    };

    function clearCells() {
        if (clear) {
            return;
        }
        
        context.setObstacle(false);
        context.setStartNode(false);
        context.setEndNode(false);
        context.setDisable(false);

        setStartSelected(false);
        setEndSelected(false);

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                const element = grid[i][j].ref.current;
                element.removeAttribute('class');

                if (algorithm !== algorithmStorage.dp && algorithm !== algorithmStorage.dijkstra) element.textContent = '';
                else element.textContent = Math.floor(Math.random() * 20) + 1;
            }
        }
    }

    function runVisual() {
        setClear(true);
        context.setDisable(true);

        checkCells(grid, algorithm).then((startNode) => {
            if (algorithm === algorithmStorage.dfs) Visualizations.visualiseDFS(startNode, grid, context.speed, setClear, algorithm,);
            if (algorithm === algorithmStorage.bfs) Visualizations.visualiseBFS(startNode, grid, context.speed, setClear, algorithm);
            if (algorithm === algorithmStorage.dp) Visualizations.visualiseDP(grid, context.speed, setClear, algorithm, createNumberMatrix);
            if (algorithm === algorithmStorage.dijkstra) Visualizations.visualiseDijkstras(startNode, grid, context.speed, setClear, algorithm, createNumberMatrix);
        })
        .catch((error) => {
            context.setDisable(false);
            setClear(false);
            alert(error);
        });
    }

    return (
        <React.Fragment>
            <div className="minimiseContainer">
                <div className="minimise" onClick={() => setActionsDiv((curState) => !curState)}></div>
            </div>
            {actionsDiv && <div className="actions" ref={actions}>
                <h2 style={{color: 'white'}}>{algorithm}</h2>
                <div className="actionButtons">
                    {algorithm !== algorithmStorage.dp && 
                        <button 
                        disabled={context.disable} 
                        className={context.disable ? 'disabled' : context.startNode ? 'selectedChoice' : ''} 
                        onClick={() => selectButton(context.setStartNode, context.startNode)}>
                            Set Start Node
                    </button>}
                    {algorithm !== algorithmStorage.dp && 
                    <button 
                    disabled={context.disable} 
                    className={context.disable ? 'disabled' : context.endNode ? 'selectedChoice' : ''} 
                    onClick={() => selectButton(context.setEndNode, context.endNode)}>
                        Set End Node
                    </button>}
                    {algorithm !== algorithmStorage.dp && 
                    <button 
                    disabled={context.disable} 
                    className={context.disable ? 'disabled' : context.obstacle ? 'selectedChoice' : ''}  
                    onClick={() => selectButton(context.setObstacle, context.obstacle)}>
                        Place Obstacle
                    </button>}
                    <button onClick={clearCells} ref={clearButton} disable={`${clear}`} className={clear ? 'disabled' : ''}>
                        Reset
                    </button>
                    <button disabled={context.disable} className={context.disable ? 'disabled' : ''} onClick={runVisual}>
                        Run
                    </button>
                </div>
                <div className="keys">
                    <div id="algorithm">
                        <p>Algorithm</p>
                        <div></div>
                    </div>
                    <div id="path">
                        <p>{algorithm === algorithmStorage.dp ? 'Smaller sum found' : algorithm === algorithmStorage.bfs ? 'Shortest path' : 'Path found'}</p>
                        {algorithm === algorithmStorage.dp ? <div className="modified"></div> : <div></div>}
                    </div>
                    {algorithm === algorithmStorage.dp && 
                    <div>
                        <p>Smallest sum path</p>
                        <div className="smallestSum"></div>
                    </div>}
                </div>
            </div>}
        </React.Fragment>
    );
}

function Grid(props) {
    const context = useContext(ContextProvider);
    const gridRefs = useRef(new Array(props.row));
    
    useEffect(() => {
        gridRefs.current = new Array(props.row);
    });

    const removeStyle = (cell) => {
        if (cell.classList.contains('startNodeSelected')) props.setStartSelected(false);
        if (cell.classList.contains('endNodeSelected')) props.setEndSelected(false);
        cell.removeAttribute('class');
    };

    const highlightCell = (e) => {
        const cell = e.target;
        if (context.disable) {
            return;
        }

        if (context.startNode && !props.startSelected) {
            removeStyle(cell);
            context.setStartNode(false);
            props.setStartSelected(true);
            cell.classList.add('startNodeSelected');

            if (props.algorithm === algorithmStorage.dijkstra) {
                cell.classList.add('dijkstraStart');
                cell.textContent = '0';
            }
        }
        else if (context.endNode && !props.endSelected) {
            removeStyle(cell);
            context.setEndNode(false);
            props.setEndSelected(true);
            cell.classList.add('endNodeSelected');

            if (props.algorithm === algorithmStorage.dijkstra) {
                cell.classList.add('dijkstraEnd');
                cell.textContent = '0';
            }
        }
        else if (context.obstacle) {
            if (cell.classList.length === 0) {
                removeStyle(cell);
                cell.classList.add('obstacleSelected');
                cell.textContent = '';
            }
        }
        else {
            if (props.algorithm === algorithmStorage.dijkstra && (cell.classList.contains('dijkstraStart') 
                || cell.classList.contains('dijkstraEnd') || cell.classList.contains('obstacleSelected'))) {
                cell.textContent = Math.floor(Math.random() * 20) + 1;
            }

            removeStyle(cell);
        }
    };

    grid = constructGrid(gridRefs, props.row, props.col, context.darkMode, highlightCell);
    return (
        <table className="grid">
            <tbody>
                {grid.map((row, index) => {
                    return (
                        <tr key={`${index}`}>
                            {row.map((col) => col)}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

function constructGrid(gridRefs, row, col, darkMode, highlightCell) {
    for (let i = 0; i < row; i++) {
        gridRefs.current[i] = new Array(col);
        for (let j = 0; j < col; j++) {
            gridRefs.current[i][j] = createRef();
        }
    }

    return gridRefs.current.map((row, i) => {
        return row.map((_, j) => {
            return (
                <td 
                    key={`${i},${j}`} id={`${i},${j}`} ref={gridRefs.current[i][j]}
                    style={darkMode ? {color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.4)'} : {}} 
                    onMouseDown={highlightCell}>
                </td>
            );
        });
    });
};

function checkCells(grid, algorithm) {
    return new Promise((resolve, reject) => {
        if (algorithm === algorithmStorage.dp) resolve(null);
        const startNode = find('startNodeSelected', grid);
        if (startNode == null) reject("Start node has not been set.");
        else resolve(startNode);
    });
}

function find(startNode, grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const element = grid[i][j].ref.current;
            if (element.classList.contains(startNode)) {
                return element;
            }
        }
    }

    return null;
}

function createNumberMatrix(grid) {
    let matrix = [];
    for (let i = 0; i < grid.length; i++) {
        matrix.push([]);
        for (let j = 0; j < grid[0].length; j++) {
            const element = parseInt(grid[i][j].ref.current.textContent);
            matrix[i].push(element);
        }
    }

    return matrix;
}

export default GridAlgorithms;