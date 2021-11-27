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
  { path: "/genres", component: IndexGenres, exact: true },
  { path: "/genres/create", component: CreateGenres },
  { path: "/genres/edit/:id(\\d+)", component: EditGenres },

  { path: "/actors", component: IndexActors, exact: true },
  { path: "/actors/create", component: CreateActor },
  { path: "/actors/edit/:id(\\d+)", component: EditActor },

  { path: "/moviecinemas", component: IndexMovieCinemas, exact: true },
  { path: "/moviecinemas/create", component: CreateMovieCinema },
  { path: "/moviecinemas/edit/:id(\\d+)", component: EditMovieCinema },

  { path: "/movies/create", component: CreateMovie },
  { path: "/movies/edit/:id(\\d+)", component: EditMovie },
  { path: "/movies/filter", component: FilterMovies },
  { path: "/movies/:id(\\d+)", component: MovieDetails },

  { path: "/", component: LandingPage, exact: true },
  { path: "*", component: RedirectToLandingPage },
];

export default routes;
