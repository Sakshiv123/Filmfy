// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import {
//           useGetSpecificMovieQuery,
//           useAddMovieReviewMutation,
//           useUpdateMovieWatchLinkMutation
// } from "../../redux/api/movies";
// import MovieTabs from "./MovieTabs";

// const MovieDetails = () => {
//           const { id: movieId } = useParams();
//           const [rating, setRating] = useState(0);
//           const [comment, setComment] = useState("");
//           const { data: movie, refetch } = useGetSpecificMovieQuery(movieId);
//           const { userInfo } = useSelector((state) => state.auth);
//           const [createReview, { isLoading: loadingMovieReview }] =
//                     useAddMovieReviewMutation();

//           const submitHandler = async (e) => {
//                     e.preventDefault();

//                     try {
//                               await createReview({
//                                         id: movieId,
//                                         rating,
//                                         comment,
//                               }).unwrap();

//                               refetch();

//                               toast.success("Review created successfully");
//                     } catch (error) {
//                               toast.error(error.data || error.message);
//                     }
//           };

//           return (
//                     <>
//                               <div>
//                                         <Link
//                                                   to="/"
//                                                   className="  text-white font-semibold hover:underline ml-[20rem]"
//                                         >
//                                                   Go Back
//                                         </Link>
//                               </div>

//                               <div className="w-full h-[280px] relative hidden lg-block">
//                                         <div className="w-full h-full">
//                                                   <img
//                                                             src={movie?.image}
//                                                             alt={movie?.name}
//                                                             className="w-[70%] "
//                                                   />
//                                         </div>

//                                         {/* Container One */}
//                                         <div className="container  flex justify-between ml-[20rem] mt-[3rem]">
//                                                   <section>
//                                                             <h2 className="text-5xl my-4 font-extrabold">{movie?.name}</h2>
//                                                             <p className="my-4 xl:w-[35rem] lg:w-[35rem] md:w-[30rem] text-[#B0B0B0]">
//                                                                       {movie?.detail}
//                                                             </p>

//                                                   </section>

//                                                   <div className="mr-[5rem]">
//                                                             <p className="text-2xl font-semibold">
//                                                                       Releasing Date: {movie?.year}
//                                                             </p>

//                                                             <div>
//                                                                       {movie?.cast.map((c) => (
//                                                                                 <ul key={c._id}>
//                                                                                           <li className="mt-[1rem]">{c}</li>
//                                                                                 </ul>
//                                                                       ))}
//                                                             </div>
//                                                   </div>
//                                         </div>


//                                         <div className="container ml-[20rem]">
//                                                   <MovieTabs
//                                                             loadingMovieReview={loadingMovieReview}
//                                                             userInfo={userInfo}
//                                                             submitHandler={submitHandler}
//                                                             rating={rating}
//                                                             setRating={setRating}
//                                                             comment={comment}
//                                                             setComment={setComment}
//                                                             movie={movie}
//                                                   />
//                                         </div>
//                               </div>
//                     </>
//           );
// };

// export default MovieDetails;

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
          useGetSpecificMovieQuery,
          useAddMovieReviewMutation,
} from "../../redux/api/movies";
import MovieTabs from "./MovieTabs";

const MovieDetails = () => {
          const { id: movieId } = useParams();
          const [rating, setRating] = useState(0);
          const [comment, setComment] = useState("");
          const { data: movie, refetch } = useGetSpecificMovieQuery(movieId);
          const { userInfo } = useSelector((state) => state.auth);
          const [createReview, { isLoading: loadingMovieReview }] =
                    useAddMovieReviewMutation();

          const submitHandler = async (e) => {
                    e.preventDefault();
                    try {
                              await createReview({
                                        id: movieId,
                                        rating,
                                        comment,
                              }).unwrap();
                              refetch();
                              toast.success("Review created successfully");
                    } catch (error) {
                              toast.error(error.data || error.message);
                    }
          };

          return (
                    <div className="min-h-screen bg-gray-900 text-white">
                              {/* Back Button */}
                              <div className="py-4">
                                        <Link
                                                  to="/"
                                                  className="text-white font-semibold hover:underline ml-32 hover:text-orange-500 transition-colors"
                                        >
                                                  &#8592; Go Back
                                        </Link>
                              </div>

                              {/* Movie Poster & Basic Info */}

                              {/* Image Section */}
                              <div className="relative mb-8 lg:mb-10">
                                        <div className="h-full">
                                                  <img
                                                            src={movie?.image}
                                                            alt={movie?.name}
                                                            className="w-[1000px] h-[600px] mx-auto object-cover rounded-lg shadow-lg"
                                                  />
                                        </div>
                              </div>




                              {/* Movie Details */}
                              <div className="container lg:px-32 py-10 flex flex-col lg:flex-row justify-between gap-8">
                                        {/* Left Section: Title & Description */}
                                        <section className="lg:w-[100%] mr-[20rem] mt-[2rem]">
                                                  <h2 className="text-4xl lg:text-5xl mt-[2rem] font-bold mb-4">{movie?.name}</h2>
                                                  <p className="my-4 xl:w-[35rem] lg:w-[35rem] md:w-[30rem] text-gray-300 leading-relaxed">
                                                            {movie?.detail}
                                                  </p>

                                                  {movie?.url && (
                                                            <a
                                                                      href={movie.url}
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                                      className="inline-block bg-teal-600 text-white hover:bg-teal-200  py-2 px-4 rounded mt-4 lg:rounded"
                                                            >
                                                                      Watch
                                                            </a>
                                                  )}
                                        </section>

                                        {/* Right Section: Release Date & Cast */}

                                        {/* Left Section: Release Date & Cast */}
                                        <div className="lg:w-4/5 mx-auto">
                                                  <div className="bg-gray-800 p-3 rounded-lg shadow-lg w-full lg:w-[18rem] mt-9">
                                                            <p className="text-2xl font-semibold mb-2">
                                                                      Releasing Date:{" "}
                                                                      <span className="text-orange-500">{movie?.year}</span>
                                                            </p>
                                                            <div className="border-t border-gray-700 mt-4 pt-4">
                                                                      <h3 className="text-xl font-bold mb-2">Cast</h3>
                                                                      <ul className="space-y-2">
                                                                                {movie?.cast?.map((c, index) => (
                                                                                          <li key={index} className="text-lg">
                                                                                                    {c}
                                                                                          </li>
                                                                                ))}
                                                                      </ul>
                                                            </div>
                                                  </div>
                                        </div>




                              </div>

                              {/* Movie Review & Tabs Section */}
                              <div className="container  px-6 lg:px-32 py-2">
                                        <MovieTabs
                                                  loadingMovieReview={loadingMovieReview}
                                                  userInfo={userInfo}
                                                  submitHandler={submitHandler}
                                                  rating={rating}
                                                  setRating={setRating}
                                                  comment={comment}
                                                  setComment={setComment}
                                                  movie={movie}
                                        />
                              </div>
                    </div >
          );
};

export default MovieDetails;
