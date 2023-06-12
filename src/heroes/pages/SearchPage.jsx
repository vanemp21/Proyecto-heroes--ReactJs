
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import queryString from 'query-string';
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";
export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = (q.length > 0) && heroes.length === 0;
  //   const [searchParams] = useSearchParams()
  // const q = searchParams.get('q') || ''
  // navigate({search: createSearchParams({q: searchText}).toString()});

  const { searchText, onInputChange } = useForm({
    searchText: q
  });
  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;
    console.log({ searchText })
    // navigate(`?q=${searchText.toLowerCase().trim()}`)
    navigate(`?q=${searchText}`)
  }
  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type="text" className="form-control" name="searchText"
              placeholder="Search a hero" autoComplete="off"
              value={searchText}
              onChange={onInputChange} />
            <button className="btn btn-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results:</h4>
          <hr />
          {/* {
            (q === '') ? <div className="alert alert-primary">
              Search a hero
            </div> : (heroes.length === 0) && <div className="alert alert-danger">
              Hero not found with <b>{q}</b>
            </div>
          } */}
          <div className="alert alert-primary" style={{display: showSearch ? '':'none'}}>
              Search a hero
            </div>
            <div className="alert alert-danger" style={{display: showError ? '':'none'}}>
              Hero not found with <b>{q}</b>
            </div>


          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
          {/* */}
        </div>
      </div>

    </>
  )
}
