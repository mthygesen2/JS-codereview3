import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return this.store.findAll('question');
},
  actions: {
    destroyQuestion(question) {
    var answer_deletions = question.get('answers').map(function(answer) {
      return answer.destroyRecord();
    });
    Ember.RSVP.all(answer_deletions).then(function() {
      return question.destroyRecord();
    });
    this.transitionTo('admin');
    }
  }
});
