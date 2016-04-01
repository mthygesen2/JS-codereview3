import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
    actions: {
      answerFormShow() {
        this.set('addNewAnswer', true);
      },
      save() {
        var params = {
          answerUserName: this.get('answerUserName'),
          answerContent: this.get('answerContent'),
          question: this.get('question')
        };
        this.set('addNewAnswer', false);
        this.sendAction('save', params);
      }
    }
  });
