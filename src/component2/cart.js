import { useSelector } from "react-redux";
const imagePath = "https://image.tmdb.org/t/p/w500";
const CartComponent = () => {
  const favorites = useSelector((state) => state.todos);
  console.log(favorites);
  return (
    <>
    
      <div className="row">
        {
          favorites?.map((todo) => {
            return (

              <>
                <div className="col-md-6 col-lg-4 col-xl-4">
                  <div className="card text-black">
                    <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                    <img
                      src={`${imagePath}${todo.poster_path}`}
                      className="card-img-top cardImg"
                      alt="Apple Computer"
                    />
                    <div className="card-body">
                      <div className="text-center">
                        <h5 className="card-title">{todo.title}</h5>


                        <p className="text-muted mb-4">{todo.overview}</p>
                        <span className="glyphicon glyphicon-heart-empty" ></span>

                      </div>
                      <div>
                        <div className="d-flex justify-content-between">
                          <span>{todo.first_air_date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>)
          })}
      </div>
    </>

  )

}
export default CartComponent;