export default function MovieController() {
  this.resource("movies");

  this.get("/movies/:id/cast-members", (schema, request) => {
    let movie = schema.movies.find(request.params.id);

    return movie.castMembers;
  });
}
