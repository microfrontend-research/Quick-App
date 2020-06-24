import { Model, hasMany, belongsTo } from "miragejs";

export default {
  movie: Model.extend({
    castMembers: hasMany(),
  }),
  castMembers: Model.extend({
    movie: belongsTo(),
  }),
  event: Model,
  historyToday: Model,
};
