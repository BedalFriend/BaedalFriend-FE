import React from 'react';
import * as GnbST from './GnbFloatStyle';

function GnbFloat(props) {
  return (
    <GnbST.Box>
      <GnbST.Bar
        onClick={() => {
          console.log('click!');
        }}
      ></GnbST.Bar>
    </GnbST.Box>
  );
}

export default GnbFloat;
