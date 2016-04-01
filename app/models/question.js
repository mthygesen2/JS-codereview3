import DS from 'ember-data';

export default DS.Model.extend({
  userQuestion: DS.attr(),
  userName: DS.attr(),
  comment: DS.attr(),
  answers: DS.hasMany('answer', { async:true })
});
