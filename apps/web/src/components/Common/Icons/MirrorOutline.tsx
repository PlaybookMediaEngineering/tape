import type { SVGProps } from 'react'

import React from 'react'

const MirrorOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 22 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M1.93077 9.2003C2.00244 4.23968 6.07619 0.25 11.0789 0.25C14.3873 0.25 17.287 1.99427 18.8934 4.60721C19.1103 4.96007 19.0001 5.42199 18.6473 5.63892C18.2944 5.85585 17.8325 5.74565 17.6156 5.39279C16.2727 3.20845 13.8484 1.75 11.0789 1.75C6.8945 1.75 3.50372 5.0777 3.431 9.19817L3.83138 8.80092C4.12542 8.50918 4.60029 8.51105 4.89203 8.80509C5.18377 9.09913 5.18191 9.574 4.88787 9.86574L3.20805 11.5324C2.91565 11.8225 2.44398 11.8225 2.15157 11.5324L0.471757 9.86574C0.177716 9.574 0.17585 9.09913 0.467591 8.80509C0.759331 8.51105 1.2342 8.50918 1.52824 8.80092L1.93077 9.2003ZM18.7864 8.46658C19.0786 8.17781 19.5487 8.17781 19.8409 8.46658L21.5271 10.1333C21.8217 10.4244 21.8245 10.8993 21.5333 11.1939C21.2421 11.4885 20.7673 11.4913 20.4727 11.2001L20.0628 10.7949C19.9934 15.7604 15.9017 19.75 10.8825 19.75C7.56379 19.75 4.65381 18.007 3.0412 15.3939C2.82366 15.0414 2.93307 14.5793 3.28557 14.3618C3.63806 14.1442 4.10016 14.2536 4.31769 14.6061C5.6656 16.7903 8.09999 18.25 10.8825 18.25C15.0887 18.25 18.4922 14.9171 18.5625 10.7969L18.1546 11.2001C17.86 11.4913 17.3852 11.4885 17.094 11.1939C16.8028 10.8993 16.8056 10.4244 17.1002 10.1333L18.7864 8.46658Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

export default MirrorOutline
