<template>
  <div class="lesson" v-if="lesson">
    <div class="lesson__title">Урок: {{lesson.title}}</div>
    <div class="lesson__menu menu">
      <router-link
        :to="{ path: `/timetable/${lesson.id}/statistics`,
        name: 'Statistics'}"
        class="menu__item"
      >
        Статистика
      </router-link>
      <router-link
        :to="{ path: `/timetable/${lesson.id}/tests`,
        name: 'Tests'}"
        class="menu__item"
      >
        Тесты
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { getTimetable } from '../utils';

export default {
  name: 'Lesson',
  computed: {
    lesson() {
      const { timetable, $attrs } = this;
      const { lesson, id } = $attrs;

      if (lesson !== undefined) {
        return lesson;
      }

      return timetable
        ? timetable.find(item => item.id === id)
        : null;
    },
    ...mapGetters(['timetable']),
  },
  beforeMount() {
    getTimetable()
      .then((res) => {
        this.setTimetable(res);
      });
  },
  methods: {
    ...mapActions(['setTimetable']),
  },
};
</script>

<style lang="scss" scoped>
.lesson {
  &__title {
    font-size: 30px;
    font-weight: 700;
  }
  &__menu {
    margin: 40px 0;
  }
}
.menu {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  &__item {
    display: block;
    text-align: center;
    width: 190px;
    margin-left: 20px;
    padding: 20px;
    background-color: #E0F7FA;
    text-decoration: none;
    color: #2c3e50;
    cursor: pointer;
    transition: 0.2s linear;
    &:hover {
       background-color: #80DEEA;
    }
  }
}
</style>
