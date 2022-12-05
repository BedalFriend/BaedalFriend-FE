import React from 'react';
import * as NtST from './NoticeStyle';

export default function Notice({ chat, action }) {
  return (
    <NtST.Box>
      <NtST.Bar>
        <NtST.Nickname>{chat.sender}</NtST.Nickname>
        <NtST.Extra>
          &nbsp;님이 {action === 'ENTER' ? '입장' : '퇴장'}하셨습니다.
        </NtST.Extra>
      </NtST.Bar>
    </NtST.Box>
  );
}
