import React, { useEffect, useState, useContext } from "react";
import AppNavbar from './Components/AppNavbar';
import Loading from './Components/Loading';
import GridAlgorithms from './Components/GridAlgorithms';
import { algorithmStorage } from './services/AlgorithmStorage';
import { speeds } from './services/Speeds';
import './Styles/index.css';
import Guide from './Components/Guide';

const algorithms = [
  {name: algorithmStorage.dfs, render: <GridAlgorithms algorithm={algorithmStorage.dfs} />}, 
  {name: algorithmStorage.bfs, render: <GridAlgorithms algorithm={algorithmStorage.bfs} />},
];

const advancedAlgorithms = [
  {name: algorithmStorage.dijkstra, render: <GridAlgorithms algorithm={algorithmStorage.dijkstra} />}, 
  {name: algorithmStorage.dp, render: <GridAlgorithms algorithm={algorithmStorage.dp} />},
];

export const ContextProvider = React.createContext();

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    loading ? <Loading /> : <MainApp />
  );
}

function MainApp() {
  const [algorithm, setAlgorithm] = useState(algorithms[0]);
  const [disable, setDisable] = useState(false);
  const [mobileTopics, setMobileTopics] = useState(false);
  const [speed, setSpeed] = useState(speeds.Fast);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const [editor, setEditor] = useState(localStorage.getItem('editorToggle') === 'true');
  const [guideToggle, setGuideToggle] = useState(true);

  const [startNode, setStartNode] = useState(false);
  const [endNode, setEndNode] = useState(false);
  const [obstacle, setObstacle] = useState(false);

  const toggleMobileTopics = () => {
    setMobileTopics((curState) => !curState);
    const topics = document.querySelector('.topics');

    if (mobileTopics) topics.style.left = '';
    else topics.style.left = 0;
  };

  const toggleTheme = (set) => {
    setDarkMode(set);
    localStorage.setItem('darkMode', set);
  };

  const provider = {
    disable, 
    setDisable, 
    toggleMobileTopics, 
    speed, 
    setSpeed, 
    darkMode, 
    setDarkMode, 
    toggleTheme, 
    editor, 
    setEditor, 
    startNode, 
    setStartNode, 
    endNode, 
    setEndNode, 
    obstacle,
    setObstacle
  };

  return (
    <ContextProvider.Provider value={provider}>
      <div className="mainApp" style={{backgroundColor: 'white'}}>
        <AppNavbar />
        {guideToggle && <Guide setGuideToggle={setGuideToggle} />}
        <div className="components" style={{display: 'flex'}}>
          <Topics setAlgorithm={setAlgorithm} algorithm={algorithm.name} setGuideToggle={setGuideToggle} />
          {algorithm.render}
        </div>
      </div>
    </ContextProvider.Provider>
  );
}

function Topics({ setAlgorithm, algorithm, setGuideToggle }) {
  const context = useContext(ContextProvider);
  const [windowSize, setWindowSize] = useState(() => window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowSize(window.innerWidth));
  }, []);

  const changeAlgorithm = (curAlgorithm) => {
    if (!context.disable) {
      context.setDisable(true);
      setAlgorithm(curAlgorithm);
    }
  };

  return (
    <div className={context.darkMode ? 'topics-dark topics' : 'topics'} style={
      context.editor && windowSize <= 1680 ? {height: 'calc(100vh - 80px - 400px)'} : 
      (windowSize <= 1680) ? {height: 'calc(100vh - 80px - 30px)'} : {height: 'calc(100vh - 80px)'}
    }>
      <div id="exit" onClick={context.toggleMobileTopics} style={context.darkMode ? {color: 'white'} : {}}>X</div>
      <button disabled={context.disable} className={context.disable ? 'disabled welcome' : 'welcome'} onClick={() => setGuideToggle((guide) => !guide)}>How-To Guide</button>
      <div className="algorithms">
        <h1 id="completed" style={context.darkMode ? {backgroundColor: '#292d3a', color: 'white'} : {}}>{
          algorithms.reduce((acc, algorithm) => checkCompleted(acc, algorithm.name), 0)
        } / {algorithms.length} completed
        </h1>
        <h1 id="algorithms">Algorithms</h1>
        <TopicLists 
          algorithms={algorithms} changeAlgorithm={changeAlgorithm} 
          algorithm={algorithm} darkMode={context.darkMode} 
        />
      </div>
      <div className="advancedAlgorithms">
        <h1 id="completed" style={context.darkMode ? {backgroundColor: '#292d3a', color: 'white'} : {}}>{
          advancedAlgorithms.reduce((prev, algorithm) => checkCompleted(prev, algorithm.name), 0)
        } / {advancedAlgorithms.length} completed
        </h1>
        <h1 id="algorithms" style={{color: 'rgb(254, 80, 121)'}}>Advanced Algorithms</h1>
        <TopicLists 
          algorithms={advancedAlgorithms} changeAlgorithm={changeAlgorithm} 
          algorithm={algorithm} darkMode={context.darkMode} 
        />
      </div>
    </div>
  );
}

const TopicLists = ({ algorithms, changeAlgorithm, algorithm, darkMode }) => {
  return (
    <ul>
      {algorithms.map((curAlgorithm) => {
        return (
          <li key={curAlgorithm.name} onClick={() => changeAlgorithm(curAlgorithm)} 
            style={ (curAlgorithm.name === algorithm) ? { textDecoration : 'underline' } : {}}>
            <div className="topicWrapper">
              <p className={darkMode ? 'topic-dark' : ''}>{curAlgorithm.name}</p>
              <div className={checkCompleted(0, curAlgorithm.name) === 1 ? 'completed' : ''}></div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const checkCompleted = (acc, algorithm) => {
    const completed = localStorage.getItem(algorithm);
    if (completed === 'true') return 1 + acc;
    else return acc;
  };

export default Index;