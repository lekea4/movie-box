import IndexGenres from "./genres/IndexGenres";
import CreateGenres from "./genres/CreateGenre";
import EditGenres from "./genres/EditGenre";

import LandingPage from "./movies/LandingPage";

import IndexActors from "./actors/IndexActors";
import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexMovieCinemas from "./moviecinemas/IndexMovieCinemas";
import CreateMovieCinema from "./moviecinemas/CreateMovieCinema";
import EditMovieCinema from "./moviecinemas/EditMovieCinema";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import MovieDetails from "./movies/MovieDetails";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
  { path: "/genres", component: IndexGenres, exact: true, isAdmin: true },
  { path: "/genres/create", component: CreateGenres, isAdmin: true },
  { path: "/genres/edit/:id(\\d+)", component: EditGenres, isAdmin: true },

  { path: "/actors", component: IndexActors, exact: true, isAdmin: true },
  { path: "/actors/create", component: CreateActor, isAdmin: true },
  { path: "/actors/edit/:id(\\d+)", component: EditActor, isAdmin: true },

  {
    path: "/moviecinemas",
    component: IndexMovieCinemas,
    exact: true,
    isAdmin: true,
  },
  { path: "/moviecinemas/create", component: CreateMovieCinema, isAdmin: true },
  {
    path: "/moviecinemas/edit/:id(\\d+)",
    component: EditMovieCinema,
    isAdmin: true,
  },

  { path: "/movies/create", component: CreateMovie, isAdmin: true },
  { path: "/movies/edit/:id(\\d+)", component: EditMovie, isAdmin: true },
  { path: "/movies/filter", component: FilterMovies },
  { path: "/movies/:id(\\d+)", component: MovieDetails },

  { path: "/", component: LandingPage, exact: true },
  { path: "*", component: RedirectToLandingPage },
];

export default routes;
