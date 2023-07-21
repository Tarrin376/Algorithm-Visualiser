import useGuide from '../../../Videos/useGuide.mp4';
import gridSize from '../../../Videos/gridSize.mp4';
import toggleEditor from '../../../Videos/toggleEditor.mp4';
import toggleTheme from '../../../Videos/toggleTheme.mp4';

export const guideData = [
    {
        title: "Using the app",
        src: useGuide,
        desc: `
            To get started with visualizing the various algorithms on the platform, set a start node. 
            You can choose a start node from anywhere within the grid but you cannot have more than one starting position.
            You can also provide an end node which is where the algorithm will finish executing if it manages to locate it.
            Another optional choice is to see how each algorithm deals with obstacles during execution. 
            You can place obstacles in the grid by selecting the 'Place Obstacle' button and clicking any cell. 
            After that, simply press 'Run' to visualize the algorithm!
        `,
    },
    {
        title: "Changing the size of the grid",
        src: gridSize,
        desc: `
            To change the size of the grid, input the number of rows and columns that you want the grid to have. After you are happy with your values, 
            click 'Update Size' and it will update the grid's dimensions.
        `,
    },
    {
        title: "Toggling the editor",
        src: toggleEditor,
        desc: `
            To view the code examples and explanations, navigate to the bottom of the page and look for the white rectangle which is the toggle button to open and close the widget. 
            If you would like to close this widget, simply click the rectangle again and it will close. 
            It is important to note that you will not be able to toggle the editor during the runtime of an algorithm so make sure you choose your preferred option before clicking 'Run'!
        `,
    },
    {
        title: "Toggling the theme",
        src: toggleTheme,
        desc: `
            If you want to change your theme, navigate to the top of the page and select your preferred theme option.
            Note that you cannot change the theme during the visualization process of an algorithm so choose one before you hit 'Run'.
        `,
    }
];