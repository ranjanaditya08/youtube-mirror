const GOOGLE_API_KEY = "AIzaSyBHsfGBm0EFcD0Fw8d9Q8RpjeYPBcc4Ygk";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const COMMENTS_API = `https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&maxResults=100&videoId=`;
