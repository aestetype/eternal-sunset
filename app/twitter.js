import Twit from 'twit';
import winston from 'winston';

const nbCachePosts = 46;

// Array of hashtags to exclude (noise)
const exclude = [
  'adultwork',
  'amateur',
  'babe',
  'boobs',
  'boobies',
  'cat',
  'calumhood',
  'camgirls',
  'cammodels',
  'cams',
  'casualdates',
  'casualsex',
  'chatroom',
  'cloudporn',
  'coungar',
  'dates',
  'dating',
  'dog',
  'erotic',
  'erotica',
  'escort',
  'flirt',
  'followalways',
  'followback',
  'food',
  'gay',
  'girl',
  'horny',
  'hottest',
  'kiksex',
  'kikmenow',
  'livesex',
  'like4like',
  'likeforlike',
  'lovethis',
  'masturbation',
  'mfc',
  'nakedselfies',
  'natureporn',
  'naughty',
  'nudemodel',
  'nudeselfie',
  'onlinecammodel',
  'onlinedating',
  'orgy',
  'panties',
  'phonesex',
  'porn',
  'pussy',
  'rimming',
  'selfie',
  'sex',
  'sexchat',
  'sexdate',
  'sexdating',
  'sexwebcam',
  'sexyteen',
  'sexyselfie',
  'sexyselfies',
  'skyporn',
  'snapchatme',
  'sneakerhead',
  'striptease',
  'tagsforlikes',
  'topless',
  'underessed',
  'webcam',
  'webcamfun',
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
      tweet.entities.media != null && tweet.entities.media[0].media_url_https != null) {
      if (!isPostExcluded(tweet)) {
        // Add post in cache
        posts.push({
          image_url: tweet.entities.media[0].media_url_https,
        });
        io.sockets.emit('new:tweet', {
          image_url: tweet.entities.media[0].media_url_https,
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
