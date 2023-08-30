import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes";

//client
//.setEndpoint('https://cloud.appwrite.io/v1')
//.setProject('64e24d844ece705056da');

const app = createApp(App);
app.use(router);
app.mount("#app");
