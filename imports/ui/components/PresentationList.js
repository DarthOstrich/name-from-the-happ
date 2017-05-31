import { Mongo } from 'meteor/mongo';

// const Students = new Mongo.Collection('students');

const students = [
  {
    _id: '1',
    pres_id: '1',
    name: 'John',
    score: 0,
  },
  {
    _id: '2',
    pres_id: '2',
    name: 'Kate',
    score: 0,
  },
  {
    _id: '3',
    pres_id: '3',
    name: 'Jenny',
    score: 0,
  },
  {
    _id: '4',
    pres_id: '4',
    name: 'Tiff',
    score: 0,
  },
  {
    _id: '5',
    pres_id: '5',
    name: 'Tony',
    score: 0,
  },
];

export const Students = new Mongo.Collection('student');
