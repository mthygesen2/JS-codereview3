import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,

  actions: {
    update(answer, params) {
      this.sendAction('update', answer, params);
    },
    deleteAnswer(answer) {
      if(confirm('Are you sure you want to delete this answer?')) {
      this.sendAction('deleteAnswer', answer);
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


// save(params) {
//   this.sendAction('save', params);
// },
