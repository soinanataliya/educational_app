export default {
  setCurrentCourse({ commit }, course) {
    commit('CURRENT_COURSE_SET', course);
  },
  setTimetable({ commit }, timetable) {
    commit('TIMETABLE_SET', timetable);
  },
  setCurrentLesson({ commit }, lesson) {
    commit('CURRENT_LESSON_SET', lesson);
  },
};
