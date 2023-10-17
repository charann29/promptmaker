const data = require('./data.json');
const { random, sampleSize: sample } = require('lodash');

const subjects = ['cats', 'birds', 'fish', 'ocean waves', 'trees', 'poppies'];

const getRandomValue = (key, opts) => (key in opts ? opts[key] : sample(data[key]));

const promptmaker = (opts = {}) => {
  const medium = getRandomValue('mediums', opts);
  const subject = getRandomValue('subjects', opts);
  const movement = getRandomValue('movements', opts);
  const artist = getRandomValue('artists', opts);
  const flavors = getRandomValue('flavors', opts) || sample(data.flavors, random(1, 3));

  let prompt = `${medium} of ${subject} ${movement} by ${artist}`;
  if (flavors) prompt += `, ${flavors.join(', ')}`;
  return prompt;
};

promptmaker.mediums = data.mediums;
promptmaker.subjects = subjects;
promptmaker.artists = data.artists;
promptmaker.movements = data.movements;
promptmaker.flavors = data.flavors;

module.exports = promptmaker;
