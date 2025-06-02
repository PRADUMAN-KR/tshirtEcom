"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { search_product } from "@/action/APIAction"
import { Card, CardContent } from "@/components/ui/card"

const SearchPage = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

 useEffect(() => {
  const fetchData = async () => {
    setLoading(true)
    const res = await search_product(query)
    
    // ✅ Handle both array or wrapped response
    if (Array.isArray(res)) {
      setResults(res)
    } else if (res?.result) {
      setResults(res.result)
    } else {
      setResults([])
    }

    setLoading(false)
  }

  if (query) {
    fetchData()
  } else {
    setResults([])
    setLoading(false)
  }
}, [query])


  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for: <span className="text-purple-600">{query}</span></h1>
      
      {loading ? (

        <p>Loading...</p>
      ) : results.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((product, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage
