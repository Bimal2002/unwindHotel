// components/RecentBlogSection.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import "../globals.css";

const RecentBlogSection = () => {
  return (
    <section className="ftco-section bg-light">
      <div className="container-xl">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 heading-section text-center">
            <motion.span className="subheading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              Our Blog
            </motion.span>
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              Recent Blog
            </motion.h2>
          </div>
        </div>
        <div className="row">
          {/* Blog Entry 1 */}
          <motion.div className="col-md-6 col-lg-3 d-flex" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }}>
            <div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20 img d-flex align-items-end" style={{ backgroundImage: "url('images/image_1.jpg')" }}>
              </a>
              <div className="text">
                <p className="meta"><span>Admin</span> <span>Dec. 23, 2020</span><a href="#">3 Comments</a></p>
                <h3 className="heading mb-3"><a href="#">Best Hotel Near Beach in Hawaii</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </motion.div>

          {/* Blog Entry 2 */}
          <motion.div className="col-md-6 col-lg-3 d-flex" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
            <div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20 img d-flex align-items-end" style={{ backgroundImage: "url('images/image_2.jpg')" }}>
              </a>
              <div className="text">
                <p className="meta"><span>Admin</span> <span>Dec. 23, 2020</span><a href="#">3 Comments</a></p>
                <h3 className="heading mb-3"><a href="#">Best Hotel Near Beach in Hawaii</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </motion.div>

          {/* Blog Entry 3 */}
          <motion.div className="col-md-6 col-lg-3 d-flex" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
            <div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20 img d-flex align-items-end" style={{ backgroundImage: "url('images/image_3.jpg')" }}>
              </a>
              <div className="text">
                <p className="meta"><span>Admin</span> <span>Dec. 23, 2020</span><a href="#">3 Comments</a></p>
                <h3 className="heading mb-3"><a href="#">Best Hotel Near Beach in Hawaii</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </motion.div>

          {/* Blog Entry 4 */}
          <motion.div className="col-md-6 col-lg-3 d-flex" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
            <div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20 img d-flex align-items-end" style={{ backgroundImage: "url('images/image_4.jpg')" }}>
              </a>
              <div className="text">
                <p className="meta"><span>Admin</span> <span>Dec. 23, 2020</span><a href="#">3 Comments</a></p>
                <h3 className="heading mb-3"><a href="#">Best Hotel Near Beach in Hawaii</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogSection;
