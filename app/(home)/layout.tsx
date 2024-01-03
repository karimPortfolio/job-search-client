'use client'

import React from "react";
import Navbar from "@/components/Navbar/navbar";
import { Provider } from "react-redux";
import store from '@/redux/store';

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {

  return (
      <Provider store={store}>
          <Navbar />
          <main>
            {children}
          </main>
      </Provider>
  );
};

export default HomePageLayout;
