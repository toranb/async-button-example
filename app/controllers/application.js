import Ember from "ember";
import PromiseMixin from "ember-promise/mixins/promise";

export default Ember.Controller.extend({
    actions: {
        save: function(callback) {
          var promise = PromiseMixin.xhr("/api/todos");

          callback(promise);

          promise.then(function() {
              console.log(arguments);
          });
        }
    }
});
