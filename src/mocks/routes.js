import MovieController from "./controller/movie";
import EventController from "./controller/event";

export default function routes() {
  this.namespace = "api";

  MovieController.apply(this);

  EventController.apply(this);

  this.passthrough();
}
