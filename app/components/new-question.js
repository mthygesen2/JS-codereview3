import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
    actions: {
      questionFormShow() {
        this.set('addNewQuestion', true);
      },

      save1() {
        var params = {
          userQuestion: this.get('userQuestion'),
          userName: this.get('userName'),
          comment: this.get('comment'),
        };
        this.set('addNewQuestion', false);
        this.sendAction('save2', params);
      }
    }
  });
