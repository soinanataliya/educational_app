
import Main from './components/Main.vue';
import Timetable from './components/Timetable.vue';
import Lesson from './components/Lesson.vue';
import Statistics from './components/Statistics.vue';
import Tests from './components/Tests.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/timetable', component: Timetable },
  { path: '/lesson', component: Lesson },
  {
    path: '/timetable/:id',
    name: 'Lesson',
    component: Lesson,
    props: true,
  },
  { path: '/timetable/:id/statistics', component: Statistics, name: 'Statistics' },
  { path: '/timetable/:id/tests', component: Tests, name: 'Tests' },
];

export default routes;
