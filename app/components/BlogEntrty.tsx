// components/BlogEntry.tsx
import Link from 'next/link';
import { motion } from 'framer-motion';
import "../globals.css";

interface BlogEntryProps {
  image: string;
  date: string;
  comments: number;
  title: string;
  content: string;
}

const BlogEntry: React.FC<BlogEntryProps> = ({ image, date, comments, title, content }) => (
  <motion.div
    className="col-md-4 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated"
    style={{ padding: '10px' }}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="blog-entry justify-content-end" style={{ maxWidth: '100%' }}>
      <Link href="#" className="block-20" style={{ backgroundImage: `url(${image})`, height: '200px' }}>
        {/* Your image rendering */}
      </Link>
      <div className="text p-3 float-right d-block" style={{ padding: '15px' }}>
        <div className="topper d-flex align-items-center">
          <span className="me-3" style={{ fontSize: '12px' }}>{date}</span>
          <span className="comment" style={{ fontSize: '12px' }}>{comments} <i className="fa fa-comment"></i></span>
        </div>
        <h3 className="heading mb-1" style={{ fontSize: '16px' }}><Link href="#">{title}</Link></h3>
        <p style={{ fontSize: '14px' }}>{content}</p>
      </div>
    </div>
  </motion.div>
);

export default BlogEntry;
