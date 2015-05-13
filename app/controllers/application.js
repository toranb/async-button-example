import Ember from "ember";

export default Ember.Controller.extend({
    actions: {
        save: function(callback) {
          var promise = new Ember.RSVP.Promise(function(resolve) {
            window.setTimeout(function() {
              resolve(1);
            }, 3000);
          });

          callback(promise);

          promise.then(function() {
              console.log(arguments);
          });
        }
    }
});
