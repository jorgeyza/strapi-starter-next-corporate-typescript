import Navbar from './elements/navbar';
import Footer from './elements/footer';
import { useState } from 'react';

import NotificationBanner from './elements/notification-banner';
import { GlobalDataType } from '../utils/types';

interface LayoutProps {
  children: React.ReactNode;
  global: GlobalDataType;
}

const Layout: React.FC<LayoutProps> = ({ children, global }) => {
  const { navbar, footer, notificationBanner } = global;

  const [bannerIsShown, setBannerIsShown] = useState(true);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Aligned to the top */}
      <div className="flex-1">
        {notificationBanner && bannerIsShown && (
          <NotificationBanner
            data={notificationBanner}
            closeSelf={() => setBannerIsShown(false)}
          />
        )}
        <Navbar navbar={navbar} />
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}
      <Footer footer={footer} />
    </div>
  );
};

export default Layout;
