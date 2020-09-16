import '@riotjs/hot-reload'
import { component } from 'riot'
import App from './app.riot'

// mount the root tag
component(App)(document.getElementById('root'))