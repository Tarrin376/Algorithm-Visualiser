import { algorithmStorage } from "./AlgorithmStorage";

export class Algorithms {
    static checkCells(grid, algorithm) {
        return new Promise((resolve, reject) => {
            if (algorithm === algorithmStorage.dp) resolve(null);
            const startNode = this.find('startNodeSelected', grid);
            if (startNode == null) reject("Start node has not been set.");
            else resolve(startNode);
        });
    }

    static find = (startNode, grid) => {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                const element = grid[i][j].ref.current;
                if (element.classList.contains(startNode)) {
                    return element;
                }
            }
        }

        return null;
    };

    static createNumberMatrix = (grid) => {
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
}