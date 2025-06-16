import React from 'react';

const DSASection = () => {
  const topics = [
    {
      title: 'Arrays',
      description: 'Practice patterns like sliding window, prefix sum, etc.',
      link: 'https://github.com/IshikaSaxena2005/DSA-JAVA-/blob/main/Array_ArrayList.java',
    },
    {
      title: 'Linked Lists',
      description: 'Cover reversal, cycle detection, merging, etc.',
      link: 'https://github.com/IshikaSaxena2005/DSA-JAVA-/blob/main/LinkedList.java',
    },
    {
      title: 'Stack',
      description: 'Solve problems like balancing symbols, undo operations, and evaluating expressions.',
      link: 'https://github.com/IshikaSaxena2005/DSA-JAVA-/blob/main/Stack.java',
    },
    {
      title: 'Queue',
      description: 'Understand FIFO structure, implement circular queues, and use it in scheduling tasks.',
      link: 'https://github.com/IshikaSaxena2005/DSA-JAVA-/blob/main/Queue.java',
    },
        {
      title: 'HashMap',
      description: 'Understand FIFO structure, implement circular queues, and use it in scheduling tasks.',
      link: 'https://github.com/IshikaSaxena2005/DSA-JAVA-/blob/main/HashMap%20and%20HashSet.java',

    },
            {
      title: 'Prefix Sum',
      description: 'Efficiently compute range sums and solve subarray sum problems in linear time.',
      link: 'https://github.com/IshikaSaxena2005/DSA-JAVA-/blob/main/Prefix%20Sum.java',
      
    },
                {
      title: 'Heaps',
      description: 'Implement priority queues, heapsort, and solve top-k and median problems.',
      link: 'https://github.com/IshikaSaxena2005/DSA-JAVA-/blob/main/Heaps.java',
      
    },
    {
      title: 'Binary Search Tree',
      description: 'Explore tree traversal techniques, tree construction, and path-related problems.',
      link: 'https://github.com/IshikaSaxena2005/DSA-JAVA-/blob/main/Binary%20Search%20Tree.java',
      
    },
        {
      title: 'Dynamic Programming',
      description: 'Break down complex problems into overlapping subproblems and optimize using memoization.',
      link: 'https://github.com/IshikaSaxena2005/DSA-JAVA-/blob/main/Dynamic%20Programming.java',
      
    },
    // Add more topics here
  ];

  return (
    <div className="w-full px-6 py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Gear Up for DSA Mastery 🔥</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 text-left"
          >
            <h3 className="text-xl font-semibold text-black mb-2">{topic.title}</h3>
            <p className="text-gray-600 mb-4">{topic.description}</p>
            <a
              href={topic.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white bg-purple-400 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium"
            >
             Code Playground 🎯
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DSASection;
