import Twit from 'twit';
import winston from 'winston';

const nbCachePosts = 46;

// Array of hashtags to exclude (noise)
const exclude = [
  'cat',
  'calumhood',
  'cloudporn',
  'dog',
  'followalways',
  'followback',
  'food',
  'like4like',
  'likeforlike',
  'lovethis',
  'natureporn',
  'porn',
  'selfie',
  'sex',
  'skyporn',
  'sneakerhead',
  'tagsforlikes',
  'xoxo',
];

function isPostExcluded(post) {
  const hashtags = post.entities.hashtags.map(val => val.text);
  for (let i = 0; i < hashtags.length; i++) {
    if (exclude.indexOf(hashtags[i]) !== -1) {
      return true;
    }
  }
  return false;
}

export default function (io) {
  // Init twitter lib
  const twitter = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });

  // Init stream
  const stream = twitter.stream('statuses/filter', { track: '#sunset' });
  const posts = [];

  // Listen stream
  stream.on('tweet', (tweet) => {
    if (tweet && tweet.retweeted_status == null && tweet.entities != null &&
      tweet.entities.media != null && tweet.entities.media[0].media_url != null) {
      if (!isPostExcluded(tweet)) {
        // Add post in cache
        posts.push({
          image_url: tweet.entities.media[0].media_url,
        });
        io.sockets.emit('new:tweet', {
          image_url: tweet.entities.media[0].media_url,
        });
        // Only keep number cache max
        if (posts.length > nbCachePosts) {
          posts.splice(0, posts.length - nbCachePosts);
        }
      }
    }
  });

  io.on('connection', (socket) => {
    // On user connection send him posts cache
    posts.forEach((post) => {
      socket.emit('new:tweet', post);
    });
  });

  winston.log('info', 'Twitter stream started');
}
