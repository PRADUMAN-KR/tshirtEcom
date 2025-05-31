import React, { useState } from "react"
import { Button } from "@/components/ui/button"

export const SearchBar = () =>{
    const[query, setQuery] = useState("")

    const handleSearch = () => {  
        console.log("Searching for:", query)
    }

return (
    <div className="flex items-center gap-2">
        <input type="text"
        value = {query}
        onChange={(e) =>setQuery(e.target.value)} 
        placeholder="Search..."
        className="h-10 px-3"/>
        <Button onClick={handleSearch}>
            Search
        </Button>
    </div>
)
}