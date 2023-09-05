import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "./redux/favouriteSlice";
import { Link } from "react-router-dom";

const api = "a4715176284f3fb3252194a08da9eb62";
const imagePath = "https://image.tmdb.org/t/p/w500";

export default function BasicExample() {
  const [alltv, setshow] = useState([]);
  const [pagenxt, setpagenxt] = useState(1);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
          api_key: api,
          page: pagenxt,
        },
      })
      .then((response) => {
        console.log(response.data.page);
        console.log(response.data.results);
        setshow(response.data.results);
      })
      .catch((err) => {});
  }, [pagenxt]);

  const isFavorite = (id) => favorites.some((item) => item.id === id);

  const handleToggleFavorites = (id, title, imgSrc) => {
    if (isFavorite(id)) {
      // Dispatch the action to remove the movie by id
      dispatch(removeFromFavorites(id));
    } else {
      // If it's not a favorite, add it to favorites
      dispatch(addToFavorites({ id, title, imgSrc }));
    }
  };

  const handleNextPage = () => {
    setpagenxt((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (pagenxt > 1) {
      setpagenxt((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary float-end my-3"
        onClick={handleNextPage}
      >
        Next
      </button>
      <button
        type="button"
        className="btn btn-primary float-end my-3"
        onClick={handlePreviousPage}
      >
        Previous
      </button>
      <div className="row">
        {alltv.map((item) => {
          const {
            id,
            title,
            poster_path: posterPath,
            overview,
            first_air_date: firstAirDate,
          } = item;

          return (
            <div className="col-md-6 col-lg-4 col-xl-4" key={id}>
              <div className="card text-black">
                <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                <Link to={`/details/${id}`}>
                  <img
                    src={`${imagePath}${posterPath}`}
                    className="card-img-top cardImg"
                    
                  />
                </Link>
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="text-muted mb-4">{overview}</p>
                    <button
                      onClick={() =>
                        handleToggleFavorites(
                          id,
                          title,
                         `${imagePath}${posterPath}`
                        )
                      }
                      className={`btn ${
                        isFavorite(id) ? "btn-danger" : "btn-primary"
                      }`}
                    >
                      {isFavorite(id)
                        ? "Remove from Favorites"
                        : "Add to Favorites"}
                    </button>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>{firstAirDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
