import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [searchResults, setSearchResults] = useState()
  
  const handleChange = async (event) => {
    const response = await axios.get(`${process.env.GEOAPIFY_API_URL}`+`text=${event.target.value}`+``)
  }
  
  return (
    <div>
      <input type="text" />
    </div>
  )
}