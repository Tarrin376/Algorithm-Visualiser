import dfs from '../../../Images/dfs.PNG';
import bfs from '../../../Images/bfs.PNG';
import dp from '../../../Images/dp.PNG';
import dijkstra from '../../../Images/dijkstra.PNG';

export const codeSources = Object.freeze({
    'Depth-First Search': {
      codeImage: <img src={dfs} id="code" alt="dfs code"></img>,
      codeExplanation: `
        In my implementation, I am assuming that the graph is undirected and can contain cycles. The 'edges' array contains each edge of the graph
        to help you understand how you would construct an adjacency list (see the function 'construct_graph' on how to do this). In the 'dfs' function,
        we have two parameters: 'source' and 'target'. Firstly, in the 'dfs' function, we create a 'visited' array of size N, where N is the number of vertices in the graph. The 'visited' array is used to indicate whether
        a node has already been visited or not. This is to prevent our algorithm from going into infinite recursion when a cycle is found. Next, we
        call the 'helper' function that runs the traversal of the graph. In this function, we do two checks before iterating over the neighbors of the
        node. After this, we set our node as visited and iterate over all of the node's neighbors. 
        An important thing to note is that when the target node is found, we do not want to keep searching the graph, which is why we have 
        a condition in the for loop that states 'if the node is reachable from one of these neighbors, return true'. 
        That's it, you now understand how depth-first search works!
        `,
      keys: 'V = number of vertices, E = number of edges',
      timeComplexity: 'Time complexity - O(V + E)',
      spaceComplexity: 'Space complexity - O(V + E)'
    },
    'Breadth-First Search': {
      codeImage: <img src={bfs} id="code" alt="bfs code"></img>,
      codeExplanation: `
        In my implementation, I am assuming that the graph is undirected and can contain cycles. 
        The 'edges' array contains each edge of the graph to help you understand how you would construct an adjacency list 
        (see the function 'construct_graph' on how to do this). In our bfs function, we have a 'visited' array that will be used to prevent
        an infinite loop in our traversal. Initially, we set the 'source' node as visited before the traversal. 
        This is because we will be setting the node's neighbors as visited rather than the node itself. The reason is that if you set the node as 
        visited only when that node is being processed, there is no guarantee that nodes are only added once to the
        queue (think of why this is the case). In the while loop, we keep iterating until the queue is empty to ensure that we have visited as many nodes
        as we can from the given source node. In each iteration, we check that the node is the target node and then return true, otherwise, we iterate over 
        each neighbor and only add the neighbor to the queue if it has not already been visited.
      `,
      keys: 'V = number of vertices, E = number of edges',
      timeComplexity: 'Time complexity - O(V + E)',
      spaceComplexity: 'Space complexity - O(V + E)'
    },
    'Dynamic Programming': {
      codeImage: <img src={dp} id="code" alt="dp code"></img>,
      codeExplanation: `
        In dynamic programming, we use smaller subproblems to solve larger subproblems so we can reach a final solution for our input. 
        In this problem, we need to figure out the lowest falling path sum from the top row to the bottom row. 
        Say we had a 10x10 matrix and we were at (2, 2) with the value of 20. 
        In the problem, we can only take the following 3 cells from the previous row: grid[i - 1][j - 1], grid[i - 1][j], and grid[i - 1][j + 1]. 
        To get the smallest sum for position (2, 2), we need to add grid[2][2] to min(dp[1][1], dp[1][2], dp[1][3]).
        The dp formula for this problem is: dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]). 
        We apply this formula to every cell in the matrix to ensure that we achieve the smallest possible falling sum for each cell.
      `,
      keys: 'N = number of rows and M = number of columns',
      timeComplexity: 'Time complexity - O(N * M)',
      spaceComplexity: 'Space complexity - O(N * M)'
    },
    'Dijkstras Algorithm': {
      codeImage: <img src={dijkstra} id="code" alt="dijkstra code"></img>,
      codeExplanation: `
        In this implementation, we use a 'distances' array to update the lowest sum path found. 
        We fill this array with infinity values to ensure that, no matter our weight at the beginning, it replaces the default value of infinity.
        Next, we set the source node's value in the 'distances' array to zero as the distance from a node to itself is zero.
        We are using a min-heap to store the best distances found to the nodes that we have touched so far. Then, we exhaustively explore all edges
        of the graph, keeping track of the current path sums in the priority queue, until no better paths are found 
        (when the priority queue becomes empty). Finally, we return the shortest path found from 'source' to 'target',
        which can be found in the 'distances' array.
      `,
      keys: 'V = number of vertices, E = number of edges',
      timeComplexity: 'Time complexity - O((V + E) * log V)',
      spaceComplexity: 'Space complexity - O(V + E)'
    },
});