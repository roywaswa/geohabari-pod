import React from 'react';

export function MenuIcon(props) {
	return (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 50 50" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
      <path stroke="#8DC63F" d="M6.25 25h37.5"></path>
      <path stroke="#783FC6" d="M6.25 12.5h25m-12.5 25h25z"></path>
    </g>
  </svg>);
}


export function CloseIcon(props) {
	return (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" {...props}>
    <defs>
      <mask id="ipTCloseOne0">
        <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth={2.3}>
          <path fill="#262626" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path>
          <path strokeLinecap="round" d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"></path>
        </g>
      </mask>
    </defs>
    <path fill="#783FC6" d="M0 0h48v48H0z" mask="url(#ipTCloseOne0)"></path>
  </svg>
  );
}