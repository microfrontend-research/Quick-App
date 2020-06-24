import { Factory } from "miragejs";

export default {
  movie: Factory.extend({
    title(i) {
      return `Movie ${i}`;
    },

    year() {
      let [min, max] = [1950, 2019];

      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    rating: "PG-13",

    castMembers: [],
  }),

  event: Factory.extend({
    icon() {
      return `google`;
    },

    name(i) {
      return `Subject ${i}`;
    },

    date() {
      return new Date();
    },

    repeat: false,
  }),
};
