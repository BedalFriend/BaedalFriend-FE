import React from 'react';
import * as PicST from './ProfilePicStyle';
import BasicPath from '../../../imgs/BasicProfile.png';

export default function ProfilePic({ size, border, user }) {
  if (user) {
    if (user.profileURL) {
      return (
        <PicST.Img
          src={user.profileURL}
          size={size}
          border={border}
          alt='profile pic'
        />
      );
    } else {
      return (
        <PicST.Img
          src={BasicPath}
          size={size}
          border={border}
          alt='profile pic'
        />
      );
    }
  }
}
//! size level : 28 36 48 56
