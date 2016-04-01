import DS from 'ember-data';

export default DS.Model.extend({
  answerUserName: DS.attr(),
  answerContent: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});
