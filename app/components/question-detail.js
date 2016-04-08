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
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    upVote(answer) {
      this.sendAction('upVote', answer);
    },
    downVote(answer) {
      this.sendAction('downVote', answer);
    }
  }
});
