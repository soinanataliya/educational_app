export default {
  CURRENT_COURSE_SET(state, course) {
    state.currentCourse = course;
  },
  TIMETABLE_SET(state, timetable) {
    state.timetable = timetable;
  },
  CURRENT_LESSON_SET(state, lesson) {
    state.currentLesson = lesson;
  },
};
