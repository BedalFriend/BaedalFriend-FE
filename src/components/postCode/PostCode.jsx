import React, { useEffect, useState } from 'react';
import * as PostST from './PostCodeStyle';
import DaumPostcode from 'react-daum-postcode';

export default function PostCode(props) {
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [isOpenPost, setIsOpenPost] = useState(true);

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  const onCompletePost = (data) => {
    let fullAddr = data.address;
    let extraAddr = '';
    console.log(data);
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr +=
          extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }

    setAddress(data.zonecode);
    setAddressDetail(fullAddr);
    //setIsOpenPost(false);
  };

  const postCodeStyle = {
    border: '5px solid black',
    display: 'block',
    position: 'relative',
    top: '0%',
    width: '100%',
    height: '100%',
    padding: '0px',
  };

  useEffect(() => {
    const $body = document.querySelector('body');
    $body.style.overflow = 'hidden';
    return () => ($body.style.overflow = 'auto');
  }, []);

  return (
    <PostST.Box>
      <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />
    </PostST.Box>
  );
}
