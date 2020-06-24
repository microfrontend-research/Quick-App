export default function seeds(server) {
  server.create("movie", { rating: "R" });
  server.createList("movie", 10);

  server.createList("event", 10);

  server.createList("historyToday", 10);

  console.log(server.db.dump());
}
