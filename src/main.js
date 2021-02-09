import { createApp } from 'vue';
import components from '@components';
import router from 'src/router';
import App from './App.vue';

const app = createApp(App);

components.forEach(component => app.component(component.name, component));

app.use(router);

app.mount('#app');
