import ReactDOM from "react-dom/client";

import App from './App.jsx'
import './index.css'
import store from './redux/store.jsx';
import { Provider } from "react-redux";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from 'react-router-dom';

//Auth
import AdminRoute from "./pages/Admin/AdminRoute.jsx";
import GenreList from "./pages/Admin/GenreList.jsx";



//Restricted
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import PrivateRoute from "./pages/auth/privateRoutes.jsx";
import Home from './pages/Home.jsx';
import Profile from "./pages/user/Profile.jsx";
import CreateMovie from "./pages/Admin/CreateMovie.jsx";
import AdminMoviesList from "./pages/Admin/AdminMoviesList.jsx";
import UpdateMovie from "./pages/Admin/UpdateMovies.jsx";
import AllMovies from "./pages/Movies/AllMovies.jsx";
import MovieDetails from "./pages/Movies/MovieDetails.jsx";
import AllComments from "./pages/Admin/AllComments.jsx";
import AdminDashBoard from "./pages/Admin/DashBoard/AdminDashBoard.jsx"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index={true} path="/" element={<Home />} />
            <Route path="/movies" element={<AllMovies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/movies/:id" element={<MovieDetails />} />

            <Route path="" element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
            </Route >

            <Route element={<AdminRoute />}>
                <Route path="/admin/movies/genre" element={<GenreList />} />
                <Route path="/admin/movies/create" element={<CreateMovie />} />
                <Route path="/admin/movies/movie-list" element={<AdminMoviesList />} />
                <Route path="/admin/movies/update/:id" element={<UpdateMovie />} />
                <Route path="/admin/movies/comments" element={<AllComments />} />
                <Route path="/admin/movies/dashboard" element={<AdminDashBoard />} />
            </Route>




        </Route>

    ));

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>

)
