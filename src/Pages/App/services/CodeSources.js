import dfs from '../../../Images/dfs.PNG';
import bfs from '../../../Images/bfs.PNG';
import dp from '../../../Images/dp.PNG';
import dijkstra from '../../../Images/dijkstra.PNG';

export const codeSources = Object.freeze({
    'Depth-First Search': {
      codeImage: <img src={dfs} id="code" alt="dfs code"></img>,
      codeExplanation: `
          In the iterative version of a depth-first search algorithm (as shown in the snippet), a stack data structure is used as it acts as a recursive call stack. 
          Before we begin the dfs, we first add the start node to the stack. 
          This is so we can begin the process of visiting the start node's neighbors and adding them to the stack etc. 
          On each iteration, we set the node's value to '-1'. 
          This is done to act as a visited set to ensure that we do not visit this node again as that would lead to an infinite loop in our algorithm. 
          After we do that, we check whether the node is our target node that we are looking for. 
          If it is, we return true, otherwise, we continue looping. 
          After each node is visited on each iteration, we need to ensure that we add the neighbors of that node (4-directionally in this case) are valid. 
          Before adding the neighbors, we will do a range of checks on that neighbor such as verifying that it is within the bounds of our graph and that it hasnt already been visited yet. 
          We continue this process until the stack is empty (no more nodes to process) or when we find the target node.
        `,
      keys: 'V = number of vertices, E = number of edges',
      timeComplexity: 'Time complexity - O(V + E)',
      spaceComplexity: 'Space complexity - O(V + E)'
    },
    'Breadth-First Search': {
      codeImage: <img src={bfs} id="code" alt="bfs code"></img>,
      codeExplanation: `
        A breadth-first search is an iterative only traversal algorithm that is widely used in various problems. 
        The algorithm requires a queue data structure (which follows the first-in first-out rule, commonly known as FIFO). 
        In our queue, we are storing integer arrays which will each hold the row and column number for each node. 
        At the beginning of the algorithm, we add our start node to the queue to begin the loop and also set the node as visited by modifying its value in the grid by setting it to '-1'. 
        We set the start node as visited in the beginning because we are setting the neighbors of the current node as visited, not the node itself. 
        This is to prevent the algorithm from visiting the same nodes multiple times. 
        Test it out for yourself on a simple 4x4 graph to understand the reasoning behind this. 
        On each iteration of the while loop, we remove the first item off the queue and check if it is our target node that we are looking for. 
        If it is, return true, otherwise, continue processing the remaining nodes. 
        In the 'addNode' function, we are simply checking that the neighbor is within the bounds of the grid and that it has not been visited yet. 
        If these conditions satisfy, we add the neighbor to the queue and mark it as visited. 
        We continue this process until all nodes have been visited and thats it, your done!
      `,
      keys: 'V = number of vertices, E = number of edges',
      timeComplexity: 'Time complexity - O(V + E)',
      spaceComplexity: 'Space complexity - O(V + E)'
    },
    'Dynamic Programming': {
      codeImage: <img src={dp} id="code" alt="dp code"></img>,
      codeExplanation: `
        In dynamic programming, we are using smaller subproblems to solve larger subproblems so we can reach a final solution for our input. 
        In this case, the subproblem is figuring out which is has the lowest accumulated sum between 3 elements in the previous row. 
        Say we were on the second row in a 10x10 matrix on column index 2 with the value of 20. 
        We know that in the problem, we can only take 3 cells from the previous row: grid[row - 1][col - 1] (left), grid[row - 1][col] (middle), and grid[row - 1][col + 1] (right). 
        To get the smallest sum for the current cell, we need to add 20 to min(left, middle, right). 
        Why? Because to achieve the slowest falling path sum, we need to ensure that we take the smallest accumulated sum and add that to the value inside grid[row][col]. 
        In short terms, the dp formula for this problem is: dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]). 
        We apply this formula to every cell in the matrix to ensure that we achieve the smallest possible falling sum for each cell. 
        Additionally, in line 9, we are checking if we are at the last row. 
        This is so we can start recording the smallest sum computed by the algorithm as we are now at the bottom of the matrix.
      `,
      keys: 'N = num of rows and M = num of columns',
      timeComplexity: 'Time complexity - O(N * M)',
      spaceComplexity: 'Space complexity - O(1)'
    },
    'Dijkstras Algorithm': {
      codeImage: <img src={dijkstra} id="code" alt="dijkstra code"></img>,
      codeExplanation: `
        In this visualisation, it is important to understand that the numbers in each cell represents its weight. 
        The reason i mention this is that in a normal graph, the nodes themselves do not have a weight but instead the edges that connect them do. 
        Even though the algorithm is no different when done on an original graph that is using an adjacency list or matrix (apart from calculating the weights of the edges instead), you should keep this in mind when reading over the code and explanation. 
        To keep track of the distances from the start node to every other node, we use a 'distances' array. 
        This 'distances' array will be used to update the lowest sum path found. 
        We fill this array with infinity values to ensure that no matter our weight at the beginning, it replaces the default value of infinity. 
        The distance of the start node to itself is 0 correct? 
        That is why we set distances[start_node_index] to 0, allowing for the algorithm to begin comparing new paths. 
        We are using a min-heap to store the best distances found to the nodes that we have touched so far. 
        A min-heap allows us to find the lowest sum path by always taking the lowest path found so far. 
        After all nodes have been visited, we return the value inside of distances[start_node_index] to get our result!
      `,
      keys: 'V = number of vertices, E = number of edges',
      timeComplexity: 'Time complexity - O(2 * (V + E) * log V) -> O(V + E * log V)',
      spaceComplexity: 'Space complexity - O((2 * V) + E) -> O(V + E)'
    },
});