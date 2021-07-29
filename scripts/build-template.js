import handlebars from 'handlebars';
import a from '../templates/sidebar.hbs'
const template = handlebars.compile("<span>{{a}}</span>")

console.log(template({ a: "rocks!" }));