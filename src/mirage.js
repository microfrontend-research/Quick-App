import { Server, Model, Factory, hasMany, belongsTo } from "miragejs";
import models from "./mocks/models";
import factories from "./mocks/factories";
import seeds from "./mocks/seeds";
import routes from "./mocks/routes";

export function makeServer({ environment = "test" } = {}) {
  let server = new Server({
    environment,

    models,

    factories,

    seeds,

    routes,
  });

  return server;
}
