import { TraversalAlgorithms } from '../services/Traversals';
import { DynamicProgramming } from '../services/DynamicProgramming';
import { Dijkstras } from '../services/Dijkstras';

export class Visualizations {
    static visualiseDFS(startNode, grid, speed, setClear, name) {
        TraversalAlgorithms.runDFS(startNode, grid, speed).then(({ prevNodes, end }) => {
            TraversalAlgorithms.backtrackTraversal(prevNodes, end, grid, speed).then(() => {
                localStorage.setItem(name, 'true');
                setClear(false);
            });
        });
    };

    static visualiseBFS(startNode, grid, speed, setClear, name) {
        TraversalAlgorithms.runBFS(startNode, grid, speed).then(({ prevNodes, end }) => {
            TraversalAlgorithms.backtrackTraversal(prevNodes, end, grid, speed).then(() => {
                localStorage.setItem(name, 'true');
                setClear(false);
            });
        });
    };

    static visualiseDP(grid, speed, setClear, name, createNumberMatrix) {
        DynamicProgramming.run(grid, speed, createNumberMatrix).then(({ end, grid }) => {
            DynamicProgramming.backtrackDP(end, grid, speed).then(() => {
                localStorage.setItem(name, 'true');
                setClear(false);
            });
        });
    };

    static visualiseDijkstras(startNode, grid, speed, setClear, name, createNumberMatrix) {
        Dijkstras.run(startNode, grid, speed, createNumberMatrix).then(({ grid, endNode, prevNodes }) => {
            Dijkstras.backtrackDijkstra(grid, endNode, prevNodes, speed).then(() => {
                localStorage.setItem(name, 'true');
                setClear(false);
            });
        });
    };
}