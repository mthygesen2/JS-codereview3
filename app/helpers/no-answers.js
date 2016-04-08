import Ember from 'ember';

export function noAnswers(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') <= 0) {
    return Ember.String.htmlSafe('<i class="fa fa-comment-o"></i>');
  }
}

export default Ember.Helper.helper(noAnswers);
