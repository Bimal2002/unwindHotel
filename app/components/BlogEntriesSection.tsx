// components/BlogEntriesSection.tsx
'use client';
import "../globals.css";
import BlogEntry from "./BlogEntrty";


// Example array of blog data
const blogData = [
  {
    image: '/images/image_1.jpg',
    date: 'Dec. 23, 2020',
    comments: 3,
    title: 'Best Hotel Near Beach in Hawaii',
    content: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    image: '/images/image_2.jpg',
    date: 'Jan. 15, 2021',
    comments: 5,
    title: 'Exploring Hidden Gems of Thailand',
    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    image: '/images/image_3.jpg',
    date: 'Feb. 20, 2021',
    comments: 8,
    title: 'A Journey Through the Alps',
    content: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks, and devious Semikoli.',
  },
  {
    image: '/images/image_4.jpg',
    date: 'Mar. 10, 2021',
    comments: 12,
    title: 'Discovering the Wonders of Japan',
    content: 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove.',
  },
  {
    image: '/images/image_5.jpg',
    date: 'Apr. 5, 2021',
    comments: 7,
    title: 'Adventures in the Australian Outback',
    content: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
  {
    image: '/images/image_6.jpg',
    date: 'May 21, 2021',
    comments: 9,
    title: 'Cultural Extravaganza in India',
    content: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    image: '/images/image_7.jpg',
    date: 'Jun. 18, 2021',
    comments: 11,
    title: 'A Trip to the Heart of Africa',
    content: 'One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
  },
  {
    image: '/images/image_8.jpg',
    date: 'Jul. 8, 2021',
    comments: 4,
    title: 'Exploring the Beauty of Canada',
    content: 'The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and".',
  },
  // Add more blog entries as needed
];

const BlogEntriesSection = () => (
  <section className="ftco-section bg-light">
    <div className="container-xl">
      <div className="row">
        {blogData.map((blog, index) => (
          <BlogEntry
            key={index} // Ensure each entry has a unique key
            image={blog.image}
            date={blog.date}
            comments={blog.comments}
            title={blog.title}
            content={blog.content}
          />
        ))}
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <div className="block-27">
            <ul>
              <li><a href="#">&lt;</a></li>
              <li className="active"><span>1</span></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">&gt;</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BlogEntriesSection;
 