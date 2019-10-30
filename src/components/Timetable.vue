<template>
  <div v-if="currentView.length">
    <router-link
      v-for="lesson in currentView"
      :key="lesson.id"
      class="timetable__item"
      :to="{ path: `/timetable/${lesson.id}`,
      name: 'Lesson',
      params: { lesson: lesson, id: lesson.id}}"
    >
      {{ lesson.title }}
      <div>{{getLessonTime(lesson.startedAt)}}</div>
    </router-link>
    <button
      @click="() => changeView(-step)"
      :disabled="currentStep == 0"
    >
      Previous
    </button>
    <button
      @click="() => changeView(step)"
      :disabled="(currentStep + step) >= currentTimetable.length"
    >
      Next
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { getTimetable, formatDate } from '../utils';

export default {
  name: 'Timetable',
  data() {
    return {
      lessons: [],
      currView: null,
      currentStep: 0,
    };
  },
  computed: {
    step() {
      return 5;
    },
    currentView() {
      const { currentTimetable, currentStep, step } = this;
      return currentTimetable.slice(currentStep, currentStep + step);
    },
    currentTimetable() {
      const { timetable } = this;
      return timetable !== null
        ? timetable.filter(lesson => lesson.courseId === this.currentCourse.id)
        : [];
    },
    ...mapGetters(['currentCourse', 'timetable', 'currentLesson']),
  },
  beforeMount() {
    getTimetable()
      .then((res) => {
        this.lessons = res;
        this.setTimetable(res);
      });
  },
  methods: {
    getLessonTime(seconds) {
      const date = new Date(null);
      date.setSeconds(seconds);
      return formatDate(date, true);
    },
    changeView(step) {
      this.currentStep = this.currentStep + step;
    },
    ...mapActions(['setTimetable']),
  },
};
</script>

<style lang="scss" scoped>
.timetable__item {
  display: block;
  background-color: #E0F7FA;
  cursor: pointer;
  transition: 0.2s linear;
  margin-left: 20px;
  margin-top: 5px;
  width: 300px;
  padding: 15px;
  text-decoration: none;
  color: #2c3e50;
  &:hover {
    background-color: #80DEEA;
  }
}
</style>
