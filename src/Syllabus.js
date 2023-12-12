
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

     {/* Python */}
    <div className="subject-container c-language">
      <h1>Python Language Syllabus</h1>
      {generatePython('Python')}
    </div>

    {/* Java Language Syllabus */}
    <div className="subject-container cpp-language">
      <h1>Java Language Syllabus</h1>
      {generateJava('Java')}
    </div>

    {/* Data Structures Syllabus */}
    <div className="subject-container data-structures">
      <h1>Data Structures Syllabus (CPP & Java)</h1>
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

const generateJava = (subject) => {
  const commonSyllabusJ = [
    'Introduction to the language',
    'Variables and Data Types',
    'Basic Input/Output',
    'Control Flow Statements',
    'Loops',
    'Functions (Part 1)',
    'Functions (Part 2)',
    'Arrays (Part 1)',
    'Arrays (Part 2)',
    'Strings',
    'Classes/Objects',
    'Attributes and Methods',
    'Constructors and Modifiers',
    'Inheritance',
    'Polymorphism',
    'Encapsulation',
    'Abstraction',
    'Interface',
    'ArrayList',
    'LinkedList',
    'HashMap',
    'HashSet',
    'Wrapper Classes',
    'Exception Handling',
    'Diamond Problem',
  ];

  return (
    <ul>
      {commonSyllabusJ.map((topic, index) => (
        <li key={index}>{`Day ${index + 1}: ${topic}`}</li>
      ))}
      <li>Day 21-25: Problem Solving and Practice</li>
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



const generatePython = (subject) => {
  const commonSyllabusP = [
    'Introduction to the language',
    'Variables and Data Types',
    'Basic Input/Output',
    'Control Flow Statements',
    'Operators',
    'Loops',
    'Strings',
    'Functions (Part 1)',
    'Functions (Part 2)',
    'Lists',
    'Tuples',
    'Dictionary',
    'Class & Object',
    'Inheritance',
    'Polymorphism',
    'Encapsulation',
    'Abstractcion',  // <-- Add a comma here
    'Pattern Printing',
    'Problem Solving (Day 1)',
    'Problem Solving (Day 2)',
  ];

  return (
    <ul>
      {commonSyllabusP.map((topic, index) => (
        <li key={index}>{`Day ${index + 1}: ${topic}`}</li>
      ))}
      <li>Day 20-25: Problem Solving and Practice</li>
    </ul>
  );
};



export default Syllabus;
