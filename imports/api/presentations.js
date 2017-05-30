import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import moment from 'moment';

const PresentationsCollection = new Mongo.Collection('presentations');

if (Meteor.isServer) {
  // publishing the sections for only logged in users
  Meteor.publish('presentationsPub', function () { // eslint-disable-line func-names
    return PresentationsCollection.find({ userId: this.userId });
  });
}

Meteor.methods({
  // Meteor method for inserting new Presentations
  'presentations.insert': function (title, sectionId) { // eslint-disable-line func-names
    // console.log('presentations insert method');
    // make sure user is logged in
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    new SimpleSchema({
      title: {
        type: String,
        min: 5,
      },
    }).validate({
      title,
    });

    PresentationsCollection.insert({
      title,
      sectionId,
      userId: this.userId,
      updatedAt: moment().valueOf(),
    });
  },

  // Meteor method for removing Presentations
  'presentations.remove': function (_id) { // eslint-disable-line func-names
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
  },

  // Meteor method for updating Presenations
  'presentations.update': function (_id, present, complete, title, group, presenters, notes) { // eslint-disable-line func-names
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    PresentationsCollection.update(_id, {
      $set: { present, complete, title, group, presenters, notes },
    });
  },
});


export default PresentationsCollection;
