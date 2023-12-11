
import React from 'react';
import './Syllabus.css';


const Syllabus = () => (
  <div className="syllabus-sheet">
    {/* C Language Syllabus */}
    <div className="subject-container c-language">
      <h1>C Language Syllabus</h1>
      {generateDayWiseSchedule('C')}
    </div>

    {/* C++ Language Syllabus */}
    <div className="subject-container cpp-language">
      <h1>C++ Language Syllabus</h1>
      {generateDayWiseSchedule('C++')}
    </div>

    {/* Data Structures Syllabus */}
    <div className="subject-container data-structures">
      <h1>Data Structures Syllabus</h1>
      {generateDataStructuresSchedule()}
    </div>
  </div>
);


const generateDayWiseSchedule = (subject) => {
  const commonSyllabus = [
    'Introduction to the language',
    'Variables and Data Types',
    'Basic Input/Output',
    'Control Flow Statements',
    'Loops',
    'Functions (Part 1)',
    'Functions (Part 2)',
    'Arrays (Part 1)',
    'Arrays (Part 2)',
    'Strings (Part 1)',
    'Strings (Part 2)',
    'Pointers (Part 1)',
    'Pointers (Part 2)',
    'Pointers (Part 3)',
    'Pattern Printing',
    'Problem Solving (Day 1)',
    'Problem Solving (Day 2)',
  ];

  return (
    <ul>
      {commonSyllabus.map((topic, index) => (
        <li key={index}>{`Day ${index + 1}: ${topic}`}</li>
      ))}
      <li>Day 18-25: Problem Solving and Practice</li>
    </ul>
  );
};


const generateDataStructuresSchedule = () => {
  
  const dataStructuresSyllabus = [
    'Introduction to Data Structures',
    'Arrays and Linked Lists',
    'Stacks and Queues',
    'Trees (Binary Trees, Binary Search Trees)',
    'Graphs (Representation and Traversal)',
    'Sorting Algorithms',
    'Searching Algorithms',
    'Hashing',
    'Dynamic Programming',
    'Greedy Algorithms',
    'Advanced Data Structures (Heap, Trie)',
    'Graph Algorithms (DFS, BFS)',
    'Advanced Sorting Techniques',
    'Balanced Search Trees (AVL Trees)',
    'Disjoint Set Union (DSU)',
    'Graph Algorithms (Dijkstra, Bellman-Ford)',
    'Graph Algorithms (Floyd Warshall, Kruskal)',
    'Advanced Graph Algorithms',
    'String Algorithms',
    'Segment Trees',
    'Binary Indexed Tree (Fenwick Tree)',
    'Trie (Prefix Tree)',
    'Advanced Dynamic Programming',
    'Advanced Graph Algorithms',
    'Practice and Problem Solving',
  ];

  return (
    <ul>
      {dataStructuresSyllabus.map((topic, index) => (
        <li key={index}>{`Day ${index + 1}: ${topic}`}</li>
      ))}
    </ul>
  );
};

export default Syllabus;
