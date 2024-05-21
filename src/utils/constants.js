const GOOGLE_API_KEY = "AIzaSyBHsfGBm0EFcD0Fw8d9Q8RpjeYPBcc4Ygk";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY +
  "&videoCategoryId=";

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const COMMENTS_API = `https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&maxResults=100&videoId=`;

export const listOfButtons = [
  {
    id: 0,
    name: "Most Popular",
  },
  {
    id: 2,
    name: "Autos & Vehicles",
  },
  {
    id: 1,
    name: "Film & Animation",
  },
  {
    id: 10,
    name: "Music",
  },
  {
    id: 15,
    name: "Pets & Animals",
  },
  {
    id: 28,
    name: "Science & Technology",
  },
  {
    id: 26,
    name: "Howto & Style",
  },
  {
    id: 17,
    name: "Sports",
  },
  {
    id: 20,
    name: "Gaming",
  },
  {
    id: 22,
    name: "People & Blogs",
  },
  {
    id: 23,
    name: "Comedy",
  },
  {
    id: 24,
    name: "Entertainment",
  },
  {
    id: 25,
    name: "News & Politics",
  },
];

export const GET_YOUTUBE_VIDEO_BY_ID =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet&key=" +
  GOOGLE_API_KEY +
  "&id=";
