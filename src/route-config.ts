import IndexGenres from "./genres/IndexGenres";
import CreateGenres from "./genres/CreateGenre";
import EditGenres from "./genres/EditGenre";

import LandingPage from "./movies/LandingPage";

import IndexActors from "./actors/IndexActors";
import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexCinemas from "./cinemas/IndexCinemas";
import CreateCinema from "./cinemas/CreateCinema";
import EditCinema from "./cinemas/EditCinema";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
  { path: "/genres", component: IndexGenres, exact: true },
  { path: "/genres/create", component: CreateGenres },
  { path: "/genres/edit/:id(\\d+)", component: EditGenres },

  { path: "/actors", component: IndexActors, exact: true },
  { path: "/actors/create", component: CreateActor },
  { path: "/actors/edit/:id(\\d+)", component: EditActor },

  { path: "/cinemas", component: IndexCinemas, exact: true },
  { path: "/cinemas/create", component: CreateCinema },
  { path: "/cinemas/edit/:id(\\d+)", component: EditCinema },

  { path: "/movies/create", component: CreateMovie },
  { path: "/movies/edit/:id(\\d+)", component: EditMovie },
  { path: "/movies/filter", component: FilterMovies },

  { path: "/", component: LandingPage, exact: true },
  { path: "*", component: RedirectToLandingPage },
];

export default routes;
