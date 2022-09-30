export const dataStructureInfo = [
        {
            Title: 'Heaps',
            Overview: 'A Heap is a tree-like data structure that organizes \'nodes\' in a particular manner (depending on the type of heap) and can only have two children for each node. There are two types: a Min-Heap and a Max-Heap. A Min-Heap is where both children are always less or equal to the parent node and a Max-Heap is where the two children are always greater than or equal to the parent node.', 
            Insertion: "O(log n)", 
            Deletion: "O(log n)", 
            Retrieval: "O(log n)"
        },
        {
            Title: 'Binary Trees',
            Overview: "A Binary Tree is a type of tree data structure that has the constraint of only allowing each node to have up to two children. Unlike a heap, binary trees are not organized in a certain way, however, there are various types of binary trees including complete, perfect, and full binary trees.", 
            Insertion: "O(n)", 
            Deletion: "O(n)", 
            Retrieval: "O(n)"
        },
        {
            Title: 'Stacks',
            Overview: "A Stack is a sequential data structure that has the property of 'last in first out'. More formally, the first item added to the stack is always the first to be removed. This data structure is especially useful for solving recursive problems iteratively and also solving sub-problems to get to your final answer.",
            Insertion: "O(1)", 
            Deletion: "O(n)", 
            Retrieval: "O(1)"
        },
        {
            Title: 'Queues',
            Overview: "A Queue is a sequential/linear data structure that has the property of 'first in first out' (opposite to a stack). It is a data structure that performs exactly like a queue in real life, the first person in the queue gets to go before all of the others. Queues are widely used in various algorithms such as Breath-First Search and various modifications can be made to a queue, e.g. constructing a monotonic queue.", 
            Insertion: "O(1)", 
            Deletion: "O(n)", 
            Retrieval: "O(1)"
        }
    ];