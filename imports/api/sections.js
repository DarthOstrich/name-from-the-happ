import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import moment from 'moment';

const SectionsCollection = new Mongo.Collection('sections');

if (Meteor.isServer) {
  // publishing the sections for only logged in users
  Meteor.publish('sectionsPub', function () { // eslint-disable-line func-names
    return SectionsCollection.find({ userId: this.userId });
  });
}

Meteor.methods({
  // Meteor method for inserting new Sections
  'sections.insert': function (title) { // eslint-disable-line func-names
    console.log('sections insert method');
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

    SectionsCollection.insert({
      title,
      userId: this.userId,
      updatedAt: moment().valueOf(),
    });
  },
  // Meteor method for removing new Sections
  'sections.remove': function (_id) { // eslint-disable-line func-names
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    new SimpleSchema({
      _id: {
        type: String,
        min: 17,
      },
    }).validate({
      _id,
    });
    SectionsCollection.remove({ _id });
  },
});


export default SectionsCollection;
