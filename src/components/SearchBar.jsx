import React,{useState} from 'react'

const SearchBar = () => {
    const [search,setSearch] = useState("")
    return (
        <div>
            <input type="search" className="search" 
            placeholder="enter book name" 
            onChange={(e) => setSearch(e.target.value)} />
            <button>Search books</button>
        </div>
    )
}

export default SearchBar
