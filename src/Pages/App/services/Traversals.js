export class TraversalAlgorithms {
    static modifyCellBFS = (row, col, prev, grid, queue, prevNodes) => {
        if (this.validCell(row, col, grid)) {
            const element = grid[row][col].ref.current;
            element.classList.add('pathTaken');
            queue.push([row, col]);
            prevNodes[row][col] = prev;

            if (element.classList.contains('endNodeSelected')) return [row, col];
            else return [-1];
        }

        return [];
    };

    static validCell = (row, col, grid) => {
        if (row < 0 || row === grid.length || col < 0 || col === grid[0].length) {
            return false;
        }

        const element = grid[row][col].ref.current;
        return !element.classList.contains('obstacleSelected')
            && !element.classList.contains('pathTaken');
    };

    static async backtrackTraversal(prevNodes, end, grid, speed) {
        if (end.length === 0) {
            return;
        }

        end = prevNodes[end[0]][end[1]];
        while (prevNodes[end[0]][end[1]] !== -1) {
            await new Promise(resolve => setTimeout(resolve, speed));
            const element = grid[end[0]][end[1]].ref.current;
            element.className = 'backtrack';
            end = prevNodes[end[0]][end[1]];
        }
    }

    static createMatrix(rows, cols) {
        let prevNodes = [];
        for (let i = 0; i < rows; i++) {
            prevNodes[i] = [];
            for (let j = 0; j < cols; j++) {
                prevNodes[i].push(0);
            }
        }

        return prevNodes;
    }

    static async runBFS(startNode, grid, speed) {
        let [startRow, startCol] = startNode.id.split(',');
        let prevNodes = this.createMatrix(grid.length, grid[0].length);
        let queue = [], end = [];

        startRow = parseInt(startRow);
        startCol = parseInt(startCol);
        this.modifyCellBFS(startRow, startCol, -1, grid, queue, prevNodes);

        while (queue.length > 0 && end.length === 0) {
            const [row, col] = queue.shift();

            const up = this.modifyCellBFS(row + 1, col, [row, col], grid, queue, prevNodes);
            if (up.length > 0) await new Promise(resolve => setTimeout(resolve, speed));

            const right = this.modifyCellBFS(row, col + 1, [row, col], grid, queue, prevNodes);
            if (right.length > 0) await new Promise(resolve => setTimeout(resolve, speed));

            const down = this.modifyCellBFS(row - 1, col, [row, col], grid, queue, prevNodes);
            if (down.length > 0) await new Promise(resolve => setTimeout(resolve, speed));

            const left = this.modifyCellBFS(row, col - 1, [row, col], grid, queue, prevNodes);
            if (left.length > 0) await new Promise(resolve => setTimeout(resolve, speed));

            if (left.length === 2) end = left;
            if (down.length === 2) end = down;
            if (up.length === 2) end = up;
            if (right.length === 2) end = right;
        }

        return { prevNodes, end };
    }

    static async runDFS(startNode, grid, speed) {
        let [startRow, startCol] = startNode.id.split(',');
        startRow = parseInt(startRow);
        startCol = parseInt(startCol);

        let stack = [[startRow, startCol, -1]], end = [];
        let prevNodes = this.createMatrix(grid.length, grid[0].length);

        while (stack.length > 0) {
            const [row, col, prev] = stack.shift();
            if (!this.validCell(row, col, grid)) {
                continue;
            }

            const element = grid[row][col].ref.current;
            await new Promise(resolve => setTimeout(resolve, speed));
            prevNodes[row][col] = prev;
            element.classList.add('pathTaken');

            if (element.classList.contains('endNodeSelected')) {
                end = [row, col];
                break;
            }

            stack.unshift([row, col - 1, [row, col]]);
            stack.unshift([row - 1, col, [row, col]]);
            stack.unshift([row + 1, col, [row, col]]);
            stack.unshift([row, col + 1, [row, col]]);
        }

        return { prevNodes, end };
    }
}