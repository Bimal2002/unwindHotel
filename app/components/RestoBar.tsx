// RestoBar.tsx
const RestoBar = () => (
  <section className="ftco-section">
    <div className="container-fluid">
      <div className="row g-md-5">
        {/* Column 1: Restaurant Image */}
        <div className="col-md-12 col-xl-5 restaurantImageContainer" style={{ display: 'flex', alignItems: 'stretch' }}>
          <div className="img w-100 img-cuisine restaurantImage" style={{ backgroundImage: "url(images/resto-bar.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
            <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-cooking"></span></div>
          </div>
        </div>

        {/* Column 2: Menu Items */}
        <div className="col-md-12 col-xl-7">
          <div className="row g-md-2 menuItemsContainer" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {/* Menu Item 1 */}
            <div className="col-md-6 menuItem" style={{ width: '100%', marginBottom: '20px' }}>
              <div className="pricing-entry d-flex align-items-center">
                <div className="img" style={{ backgroundImage: "url(images/menu-1.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}></div>
                <div className="desc ps-3">
                  <div className="d-flex text">
                    <h3><span>Grilled Beef with potatoes</span></h3>
                    <span className="price">$20.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Item 2 */}
            <div className="col-md-6 menuItem" style={{ width: '100%', marginBottom: '20px' }}>
              <div className="pricing-entry d-flex align-items-center">
                <div className="img" style={{ backgroundImage: "url(images/menu-2.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}></div>
                <div className="desc ps-3">
                  <div className="d-flex text">
                    <h3><span>Grilled Beef with potatoes</span></h3>
                    <span className="price">$29.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Repeat for other menu items */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RestoBar;
