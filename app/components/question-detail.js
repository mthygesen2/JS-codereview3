import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['vote:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {
    save(params) {
      this.sendAction('save', params);
    },
    update(answer, params) {
      this.sendAction('update', answer, params);
    },
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    },
    upVote(answer) {
      this.sendAction('upVote', answer);
    },
    downVote(answer) {
      this.sendAction('downVote', answer);
    }
  }
});
