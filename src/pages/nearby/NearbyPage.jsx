import React, { useContext, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import MapContainer from './MapContainer';
import { TabContext } from '../../context/TabContext';

const Nearby = () => {
  const { setTab } = useContext(TabContext);

  useEffect(() => {
    setTab('Nearby');
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Layout>
        <MapContainer setTab={setTab} />
      </Layout>
    </div>
  );
};

export default Nearby;
