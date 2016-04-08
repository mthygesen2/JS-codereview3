import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  updateQuestionForm: false,
actions:{
  update(question, params) {
      this.sendAction('update', question, params);
    },
    addToFavorite(item) {
     this.get('favoriteQuestions').add(item);
   }
 }
});

// delete(question) {
//   if (confirm('Are you sure you want to delete this question?')) {
//     this.sendAction('destroyQuestion', question);
//   }
// }
