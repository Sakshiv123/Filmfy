import { Link } from "react-router-dom";
import { useGetAllMoviesQuery } from "../../redux/api/movies";

// Base URL for accessing the images from the server (backend)
//const baseURL = "http://localhost:5173/uploads/"; // Ensure this ends with one slash

const AdminMoviesList = () => {
          const { data: movies } = useGetAllMoviesQuery();

          return (
                    <div className="container mx-[9rem]">
                              <div className="flex flex-col md:flex-row">
                                        <div className="p-3">
                                                  <div className="ml-[2rem] text-xl font-bold h-12">
                                                            All Movies ({movies?.length})
                                                  </div>

                                                  <div className="flex flex-wrap justify-around items-center p-[2rem]">
                                                            {movies?.map((movie) => {
                                                                      // Remove any leading slashes in movie.image to avoid double "/uploads/"
                                                                      const imagePath = movie.image?.replace(/^\/+/, '');

                                                                      return (
                                                                                <Link
                                                                                          key={movie._id}
                                                                                          to={`/admin/movies/update/${movie._id}`}
                                                                                          className="block mb-4 overflow-hidden"
                                                                                >
                                                                                          <div className="flex">
                                                                                                    <div
                                                                                                              key={movie._id}
                                                                                                              className="max-w-sm m-[1rem] rounded overflow-hidden shadow-lg"
                                                                                                    >
                                                                                                              <img
                                                                                                                        // Use the correct concatenation of the baseURL and image path
                                                                                                                        //src={imagePath ? `${baseURL}${imagePath}` : 'placeholder.jpg'}
                                                                                                                        src={movie.image}
                                                                                                                        alt={movie.name}
                                                                                                                        className="w-[30rem] h-[20rem] rounded m-0 p-0 transition duration-300 ease-in-out transform group-hover:opacity-50"
                                                                                                              />
                                                                                                              <div className="px-6 py-4 border border-gray-400">
                                                                                                                        <div className="font-bold text-xl mb-2">{movie.name}</div>
                                                                                                              </div>
                                                                                                              <p className="text-gray-700 text-base">{movie.detail}</p>
                                                                                                              <div className="mt-[2rem] mb-[1rem]">
                                                                                                                        <Link
                                                                                                                                  to={`/admin/movies/update/${movie._id}`}
                                                                                                                                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                                                                                                                        >
                                                                                                                                  Update Movie
                                                                                                                        </Link>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>
                                                                                </Link>
                                                                      );
                                                            })}
                                                  </div>
                                        </div>
                              </div>
                    </div>
          );
};

export default AdminMoviesList;
