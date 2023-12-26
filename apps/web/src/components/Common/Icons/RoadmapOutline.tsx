import type { SVGProps } from 'react'

import React from 'react'

const RoadmapOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M15.861 1.16338C15.9137 1.18096 15.967 1.19877 16.0211 1.2168L17.2231 1.61748C17.6863 1.77182 18.0922 1.9071 18.4142 2.05691C18.7623 2.21887 19.0814 2.42748 19.3253 2.76588C19.5692 3.10428 19.6662 3.47292 19.7098 3.85441C19.7501 4.20729 19.75 4.63515 19.75 5.12331V13.3359C19.75 14.0343 19.75 14.6234 19.6959 15.089C19.6397 15.5728 19.5136 16.0511 19.161 16.4369C18.9519 16.6658 18.6978 16.8489 18.4146 16.9749C17.9371 17.1874 17.4435 17.1557 16.9667 17.0561C16.5078 16.9602 15.949 16.7739 15.2865 16.5531L15.2438 16.5388C14.1233 16.1653 13.7393 16.049 13.3665 16.0617C13.218 16.0668 13.0703 16.0865 12.9257 16.1207C12.5627 16.2065 12.2229 16.4198 11.2401 17.075L9.85768 17.9966C9.81026 18.0282 9.76348 18.0594 9.71732 18.0903C8.6558 18.7988 7.91754 19.2915 7.05448 19.4071C6.19141 19.5227 5.3495 19.2416 4.13896 18.8373C4.08632 18.8197 4.03298 18.8019 3.97892 18.7839L2.77683 18.3832C2.31373 18.2288 1.90783 18.0936 1.5858 17.9438C1.23766 17.7818 0.918614 17.5732 0.674708 17.2348C0.430802 16.8964 0.333789 16.5278 0.290236 16.1463C0.249948 15.7934 0.249973 15.3655 0.250002 14.8774L0.250002 6.66478C0.249977 5.96634 0.249957 5.37729 0.304102 4.91163C0.360355 4.42784 0.486448 3.94957 0.838963 3.56377C1.04807 3.33491 1.30221 3.15174 1.58544 3.02573C2.06293 2.81331 2.55653 2.84493 3.03328 2.94455C3.49217 3.04044 4.05097 3.22673 4.71356 3.44762L4.75619 3.46183C5.87675 3.83535 6.26073 3.95172 6.63351 3.93899C6.78204 3.93392 6.9297 3.91415 7.07432 3.87996C7.43731 3.79415 7.77714 3.58086 8.75995 2.92565L10.1423 2.00407C10.1897 1.97246 10.2365 1.94124 10.2827 1.91043C11.3442 1.2019 12.0825 0.709134 12.9455 0.593554C13.8086 0.477973 14.6505 0.759126 15.861 1.16338ZM13.75 2.10577V14.5796C14.2857 14.6377 14.8498 14.826 15.5931 15.0741C15.6342 15.0878 15.6759 15.1017 15.7182 15.1158C16.4348 15.3547 16.9103 15.5119 17.2735 15.5878C17.6287 15.6621 17.7505 15.6286 17.8049 15.6044C17.8993 15.5624 17.984 15.5014 18.0537 15.4251C18.0938 15.3812 18.164 15.2762 18.2059 14.9158C18.2488 14.5472 18.25 14.0464 18.25 13.291V5.16261C18.25 4.62355 18.2489 4.28223 18.2195 4.02455C18.1922 3.78604 18.1477 3.69737 18.1084 3.64294C18.0692 3.58851 17.9992 3.51821 17.7815 3.41695C17.5464 3.30755 17.2229 3.19854 16.7115 3.02808L15.5467 2.63982C14.6604 2.34437 14.1345 2.17626 13.75 2.10577ZM12.25 14.7599V2.43371C11.9388 2.61353 11.5397 2.87528 10.9744 3.25214L9.592 4.17373C9.55493 4.19844 9.51837 4.22284 9.48229 4.24691C8.79402 4.70619 8.28096 5.04856 7.75 5.24073V17.567C8.06122 17.3871 8.46033 17.1254 9.02563 16.7485L10.408 15.8269C10.4451 15.8022 10.4816 15.7778 10.5177 15.7538C11.206 15.2945 11.719 14.9521 12.25 14.7599ZM6.25 17.8949V5.42108C5.71431 5.36301 5.15021 5.17471 4.40693 4.92659C4.36579 4.91286 4.32411 4.89894 4.28185 4.88485C3.5652 4.64597 3.08969 4.48874 2.72647 4.41284C2.37129 4.33862 2.2495 4.37205 2.19515 4.39623C2.10074 4.43823 2.01603 4.49929 1.94632 4.57557C1.9062 4.61949 1.83597 4.72446 1.79406 5.08488C1.75121 5.45346 1.75 5.9543 1.75 6.7097V14.8381C1.75 15.3771 1.75114 15.7184 1.78055 15.9761C1.80779 16.2146 1.85234 16.3033 1.89157 16.3577C1.9308 16.4122 2.00083 16.4825 2.21849 16.5837C2.45364 16.6931 2.77709 16.8021 3.28849 16.9726L4.45326 17.3609C5.33961 17.6563 5.86547 17.8244 6.25 17.8949Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

export default RoadmapOutline
