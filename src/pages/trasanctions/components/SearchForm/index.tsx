import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder='busque por trasançãoes' />

      <button type="submit">
        <MagnifyingGlass size={20} />
        buscar
      </button>
      </SearchFormContainer>


  )
}