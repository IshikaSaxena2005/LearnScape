import React from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({data}) => {
  

  const navigate= useNavigate();
  const [input, setInput] = React.useState(data ?data:'');
  const onSearchHandler=(e) =>{
    e.preventDefault()
    navigate('/course-list/'+ input)
  }




  return (
    <div className="w-full flex justify-center px-4">
      <form onSubmit={onSearchHandler}  className="flex items-center w-full max-w-2xl bg-white border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 focus-within:ring-2 focus-within:ring-purple-500">
        <img 
          src={assets.search_icon} 
          alt="search icon" 
          className="w-5 h-5 mx-4 opacity-60" 
        />
        <input  onChange={(e)=>setInput(e.target.value)} value={input}
          type="text" 
          placeholder="Search for courses" 
          className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500 py-3 pr-4"
        />
        <button 
          type="submit" 
          className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-full mr-2 hover:bg-purple-700 transition-colors duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
