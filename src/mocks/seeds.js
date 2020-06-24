export default function seeds(server) {
  server.create("movie");
  server.create("movie", { rating: "R" });
  server.createList("movie", 10);
  server.createList("event", 10);
}
