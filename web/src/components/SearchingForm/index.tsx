import { useState } from "react"
import { useAppDispatch } from "../../store"
import { searchMovie, reset } from '../../store/slices/movies'

import { Button } from "../Button"

import './styles.scss'

export function SearchingForm() {
  const [ searchMovieName, setSearchMovieName ] = useState('')
  
  const dispatch = useAppDispatch()

  function handleSearchMovie() {
    dispatch(searchMovie(searchMovieName))
  }

  function handleResetMovie() {
    dispatch(reset())
    setSearchMovieName('')
  }


  return (
    <div className="searching-form">
      <input 
        type="text" 
        value={searchMovieName}
        onChange={(e) => setSearchMovieName(e.target.value)}
      />

      <Button onClick={handleSearchMovie}>
        Search
      </Button>

      <Button onClick={handleResetMovie}>
        Reset
      </Button>

    </div>
  )
}