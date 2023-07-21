export class DynamicProgramming {
    static showEnd = (dp, grid) => {
        let min = [Infinity, null, -1];
        for (let i = 0; i < dp.length; i++) {
            if (dp[i] < min[0]) {
                const cur = grid[grid.length - 1][i].ref.current;
                min = [dp[i], cur, i];
            }
        }

        return min[2];
    };

    static async modifyCellStyle(row, col, grid, value, speed) {
        const element = grid[row][col].ref.current;
        if (value === undefined) {
            element.classList.add('visited');
            return;
        }

        element.classList.add('modified');
        element.textContent = value;

        await new Promise(resolve => setTimeout(resolve, speed * 2));
        element.classList.remove('modified');
    }

    static updateCell = (next, index, value, grid, row, speed) => {
        next[index] = value;
        this.modifyCellStyle(row, index, grid, next[index], speed);
    }

    static async run(grid, speed, createNumberMatrix) {
        let m = createNumberMatrix(grid);
        let dp = m[0].map((i) => i);

        for (let i = 0; i < grid.length; i++) {
            let next = new Array(dp.length);
            next.fill(Infinity, 0, dp.length);

            for (let j = 0; j < dp.length; j++) {
                this.modifyCellStyle(i, j, grid);
                await new Promise(resolve => setTimeout(resolve, speed * 2));

                if (i + 1 < m.length) {
                    if (dp[j] + m[i + 1][j] < next[j]) {
                        this.updateCell(next, j, dp[j] + m[i + 1][j], grid, i + 1, speed);
                    }
                    if (j - 1 >= 0 && dp[j] + m[i + 1][j - 1] < next[j - 1]) {
                        this.updateCell(next, j - 1, dp[j] + m[i + 1][j - 1], grid, i + 1, speed);
                    }
                    if (j + 1 < dp.length && dp[j] + m[i + 1][j + 1] < next[j + 1]) {
                        this.updateCell(next, j + 1, dp[j] + m[i + 1][j + 1], grid, i + 1, speed);
                    }
                }
        
                await new Promise(resolve => setTimeout(resolve, speed * 2));
            }

            dp = next;
        }

        let end = this.showEnd(dp, grid);
        return { end, grid };
    }

    static async backtrackDP(end, grid, speed) {
        const updateMin = (row, col, min) => {
            const element = grid[row][col];
            return (
                element === undefined || element.ref.current.textContent === '' ||
                parseInt(element.ref.current.textContent) > min[1] ? 
                min : [element.ref.current, parseInt(element.ref.current.textContent), col]
            );
        };

        for (let i = grid.length - 1; i >= 0; i--) {
            await new Promise(resolve => setTimeout(resolve, speed * 2));

            let min = [null, Infinity, end];
            min = updateMin(i, end - 1, min);
            min = updateMin(i, end, min);
            min = updateMin(i, end + 1, min);

            min[0].removeAttribute('class');
            min[0].classList.add('backtrack');
            end = min[2];
        }
    }
}