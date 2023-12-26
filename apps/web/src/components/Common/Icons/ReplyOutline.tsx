import type { SVGProps } from 'react'

import React from 'react'

const ReplyOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 18 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M7.03033 0.46967C7.32322 0.762563 7.32322 1.23744 7.03033 1.53033L3.31066 5.25L11.5 5.25C12.4534 5.25 13.8667 5.52984 15.0632 6.39135C16.298 7.2804 17.25 8.75556 17.25 11C17.25 11.4142 16.9142 11.75 16.5 11.75C16.0858 11.75 15.75 11.4142 15.75 11C15.75 9.24444 15.0353 8.2196 14.1868 7.60865C13.3 6.97016 12.2133 6.75 11.5 6.75L3.31066 6.75L7.03033 10.4697C7.32322 10.7626 7.32322 11.2374 7.03033 11.5303C6.73744 11.8232 6.26256 11.8232 5.96967 11.5303L0.96967 6.53033C0.676777 6.23744 0.676777 5.76256 0.96967 5.46967L5.96967 0.46967C6.26256 0.176777 6.73744 0.176777 7.03033 0.46967Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

export default ReplyOutline
