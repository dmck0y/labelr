import Router from "./router";
import styles from "./styles/main.styl";
import App from "ampersand-app";

window.App = App;
App.extend({
  init () {
    this.router = new Router();
    this.router.history.start();
  }
});

App.init();
