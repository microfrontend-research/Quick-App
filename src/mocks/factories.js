import {Factory} from 'miragejs';
import Mock, {Random} from 'mockjs-lite';
import {brandIcons} from '@/shareds/categIcon';

export default {
  movie: Factory.extend({
    title(i) {
      return `Movie ${i}`;
    },

    year() {
      let [min, max] = [1950, 2019];

      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    rating: 'PG-13',

    castMembers: [],
  }),

  event: Factory.extend({
    icon() {
      return Mock.mock({
        'icon|1': Object.keys(brandIcons),
      }).icon;
    },

    name() {
      return Mock.mock({
        'name|1': ['@title(1,2)', '@cword(3, 5)'],
      }).name;
    },

    date() {
      return Random.datetime('2019-01-01 08:00:00', '2020-12-12 18:00:00');
    },

    repeat: false,
  }),

  historyToday: Factory.extend({
    date() {
      return Date.now();
    },

    news() {
      return Mock.mock({
        'news|3-10': [
          {
            poster: Random.image('200x100', '4A7BF7', 'Hello'),
            article: '@cparagraph(1, 3)',
          },
        ],
      }).news;
    },

    festival() {
      return Mock.mock({
        'festival|3-10': ['春节', '元宵', '情人节', '清明', '劳动节', '儿童节', '中秋节'],
      }).festival;
    },

    birthday() {
      return Mock.mock({
        'birthday|3-10': ['@cname'],
      }).birthday;
    },

    yearsEventToday() {
      return Mock.mock({
        'yearsEventToday|3-10': ['@cparagraph(1, 3)'],
      }).yearsEventToday;
    },
  }),
};
