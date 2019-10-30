<template>
  <div class="header">
    <div class="header__title">Header</div>
    <select class="header__select" @change="chooseCourse($event)">
      <option
      :value="course.id"
        v-for="course in courses"
        :key="course.id"
        >
        {{course.name}}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      courses: [],
    };
  },
  beforeMount() {
    this.getCourses();
  },
  computed: {
    ...mapGetters(['currentCourse']),
  },
  methods: {
    getCourses() {
      const url = 'https://5daca7380af117001417072a.mockapi.io/api/v1/courses';
      fetch(url)
        .then(res => res.json())
        .then((res) => {
          this.courses = res;
          this.setCurrentCourse(res[0]);
        });
    },
    chooseCourse(event) {
      const courseId = event.target.value - 1;
      this.setCurrentCourse(this.courses[courseId]);
    },
    ...mapActions(['setCurrentCourse', 'setCurrentTimetable']),
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: #B2EBF2;
  padding: 20px 40px;
  &__title {
    margin-right: 40px;
  }
  &__select {
    width: 250px;
    height: 30px;
  }
}
</style>
