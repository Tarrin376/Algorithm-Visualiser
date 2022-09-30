import Heap from 'heap-js';

export class Dijkstras {
    static async run(startNode, grid, speed, createNumberMatrix) {
        let [startRow, startCol] = startNode.id.split(',');
        startRow = parseInt(startRow);
        startCol = parseInt(startCol);

        const matrix = createNumberMatrix(grid);
        const prevNodes = new Array(grid.length * grid[0].length).fill(-1);
        const distances = new Array(grid.length * grid[0].length).fill(Infinity);
        const neighbors = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        const pq = new Heap((a, b) => a[2] - b[2]);
        
        distances[(matrix[0].length * (startRow)) + startCol] = 0;
        pq.add([startRow, startCol, 0]);

        while (pq.length > 0) {
            await new Promise(resolve => setTimeout(resolve, speed * 2));
            const node = pq.poll();
            matrix[node[0]][node[1]] = -1;

            const element = grid[node[0]][node[1]].ref.current;
            if (element.classList.contains('endNodeSelected')) return { grid, endNode: [node[0], node[1]], prevNodes};
            if (!element.classList.contains('startNodeSelected')) element.classList.add('visited');

            for (let neighbor of neighbors) {
                const row = node[0] + neighbor[0];
                const col = node[1] + neighbor[1];

                if (this.validNode(row, col, matrix, grid)) {
                    await new Promise(resolve => setTimeout(resolve, speed * 2));
                    this.addNode(row, col, matrix, prevNodes, distances, pq, node, grid, speed);
                }
            }
        }

        return { grid, endNode: [], prevNodes };
    }

    static async backtrackDijkstra(grid, endNode, prevNodes, speed) {
        if (endNode.length === 0) return;
        endNode = (grid[0].length * (endNode[0])) + endNode[1];

        while (endNode !== -1) {
            await new Promise(resolve => setTimeout(resolve, speed * 2));
            const element = grid[Math.floor(endNode / grid[0].length)][endNode % grid[0].length].ref.current;

            if (!element.classList.contains('startNodeSelected') && !element.classList.contains('endNodeSelected')) {
                element.removeAttribute('class');
                element.classList.add('backtrack');
            }

            endNode = prevNodes[endNode];
        }
    }

    static validNode(row, col, matrix, grid) {
        if (row < 0 || row === matrix.length || col < 0 || 
            col === matrix[0].length || matrix[row][col] === -1) {
            return false;
        }

        const element = grid[row][col].ref.current;
        return !element.classList.contains('obstacleSelected');
    }

    static async addNode(row, col, matrix, prevNodes, distances, pq, prev, grid, speed) {
        const element = grid[row][col].ref.current;
        element.classList.add('modified');

        const index = (matrix[0].length * (row)) + col;
        const distance = prev[2] + matrix[row][col];
        
        if (distances[index] > distance) {
            prevNodes[index] = (matrix[0].length * (prev[0])) + prev[1];
            distances[index] = distance;
            pq.add([row, col, distance]);
            element.textContent = distances[index];
        }

        await new Promise(resolve => setTimeout(resolve, speed * 2));
        element.classList.remove('modified');
    }
}