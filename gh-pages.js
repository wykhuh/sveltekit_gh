import ghpages from 'gh-pages';

ghpages.publish(
  'build',
  (err) => {
    if (err) console.log('err', err);
    console.log('Deploy Complete!');
  }
);
