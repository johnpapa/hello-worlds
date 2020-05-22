import { Template } from 'meteor/templating';

import './main.html';


if(Meteor.isClient) {
  Template.myWord.helpers({
    text: 'World'
  });
}


