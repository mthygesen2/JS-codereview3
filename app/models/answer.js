import DS from 'ember-data';

export default DS.Model.extend({
  answerUserName: DS.attr(),
  answerUser: DS.attr()
});
