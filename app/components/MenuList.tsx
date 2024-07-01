// MenuList.js
'use client';
import "../globals.css";
const MenuList = () => (
    <section className="ftco-section">
      <div className="container-fluid">
        <div className="row g-md-5">
          {/* Column 1 */}
          <div className="col-md-12 col-xl-5 d-flex align-items-stretch">
            <div className="img w-100 img-cuisine" style={{ backgroundImage: "url(images/resto-bar.jpg)" }}>
              <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-cooking"></span></div>
            </div>
          </div>
  
          {/* Column 2 */}
          <div className="col-md-12 col-xl-7 ps-xl-5">
            <div className="row g-md-2">
              {/* Menu Items */}
              <div className="col-md-6">
                {/* Menu Item 1 */}
                <div className="pricing-entry d-flex align-items-center">
                  <div className="img" style={{ backgroundImage: "url(images/menu-1.jpg)" }}></div>
                  <div className="desc ps-3">
                    <div className="d-flex text">
                      <h3><span>Grilled Beef with potatoes</span></h3>
                      <span className="price">$20.00</span>
                    </div>
                  </div>
                </div>
  
                {/* Menu Item 2 */}
                <div className="pricing-entry d-flex align-items-center">
                  <div className="img" style={{ backgroundImage: "url(images/menu-2.jpg)" }}></div>
                  <div className="desc ps-3">
                    <div className="d-flex text">
                      <h3><span>Grilled Beef with potatoes</span></h3>
                      <span className="price">$29.00</span>
                    </div>
                  </div>
                </div>
  
                {/* Menu Item 3 */}
                <div className="pricing-entry d-flex align-items-center">
                  <div className="img" style={{ backgroundImage: "url(images/menu-3.jpg)" }}></div>
                  <div className="desc ps-3">
                    <div className="d-flex text">
                      <h3><span>Grilled Beef with potatoes</span></h3>
                      <span className="price">$20.00</span>
                    </div>
                  </div>
                </div>
  
                {/* Menu Item 4 */}
                <div className="pricing-entry d-flex align-items-center">
                  <div className="img" style={{ backgroundImage: "url(images/menu-4.jpg)" }}></div>
                  <div className="desc ps-3">
                    <div className="d-flex text">
                      <h3><span>Grilled Beef with potatoes</span></h3>
                      <span className="price">$20.00</span>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Column 3 */}
              <div className="col-md-6">
                {/* Menu Item 5 */}
                <div className="pricing-entry d-flex align-items-center">
                  <div className="img" style={{ backgroundImage: "url(images/menu-5.jpg)" }}></div>
                  <div className="desc ps-3">
                    <div className="d-flex text">
                      <h3><span>Grilled Beef with potatoes</span></h3>
                      <span className="price">$49.91</span>
                    </div>
                  </div>
                </div>
  
                {/* Menu Item 6 */}
                <div className="pricing-entry d-flex align-items-center">
                  <div className="img" style={{ backgroundImage: "url(images/menu-6.jpg)" }}></div>
                  <div className="desc ps-3">
                    <div className="d-flex text">
                      <h3><span>Ultimate Overload</span></h3>
                      <span className="price">$20.00</span>
                    </div>
                  </div>
                </div>
  
                {/* Menu Item 7 */}
                <div className="pricing-entry d-flex align-items-center">
                  <div className="img" style={{ backgroundImage: "url(images/menu-7.jpg)" }}></div>
                  <div className="desc ps-3">
                    <div className="d-flex text">
                      <h3><span>Grilled Beef with potatoes</span></h3>
                      <span className="price">$20.00</span>
                    </div>
                  </div>
                </div>
  
                {/* Menu Item 8 */}
                <div className="pricing-entry d-flex align-items-center">
                  <div className="img" style={{ backgroundImage: "url(images/menu-8.jpg)" }}></div>
                  <div className="desc ps-3">
                    <div className="d-flex text">
                      <h3><span>Ham & Pineapple</span></h3>
                      <span className="price">$20.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default MenuList;
  