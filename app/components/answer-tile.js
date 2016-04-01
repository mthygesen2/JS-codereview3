import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    update(answer, params) {
      this.sendAction('update', answer, params);
    },
    delete(answer) {
      if(confirm('Are you sure you want to delete this answer?')) {
      this.sendAction('delete', answer);
      }
    }
  }
});


// save(params) {
//   this.sendAction('save', params);
// },
