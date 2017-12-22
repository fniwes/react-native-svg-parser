
const SIMPLE_CSS = `
.content {
  font-family: 'Helvetica';
  font-size: 11px;
  fill: #DDDDDD
}
#background {
  fill: #eeeeee;
}
#elementid1 {
  fill: #F7F7F7;
  stroke: none;
}
#elementid2 {
  fill: none;
  stroke: none;
}
#elementid3 {
  display: none;
}
`

const SIMPLE_SVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4.296122345000001 24.174109004999984 94.51469159 86.29088279" version="1.1" overflow="visible">
  <g id="background" role="group" fill="#ffffff">
    <path d="M-4.2961 24.1741 L-4.2961 110.465 L90.2186 110.465 L90.2186 24.1741 L-4.2961 24.1741 Z"/>
  </g>
  <g class="content" transform="matrix(0.0254 0 0 -0.0254 -19.6129971976 105.69902944479999)">
    <g id="Wall-Shapes">
      <path d="M773.496 3040.5039 L4018.9941 3040.5039 L4018.9941 2570.7739 L4154.939 2570.7739 L4154.7358 2478.7693 L4019.0012 2478.781 L4019.0012 1612.1283 L4019.0168 1137.1318 L3976.666 1137.1316 L3976.666 1120.3816 L3976.666 1120.3816 L3976.5076 909.9913 L3945.2495 910.0722 L3945.2498 800.6404 L3887.9331 800.6403 L3887.8081 560.2642 L3887.8081 560.2642 L3832.9324 551.649 L3780.3635 533.7023 L3745.3135 515.5833 L3687.3276 471.2697 L3641.6921 416.2925 L3612.5061 360.6814 L3610.1345 350.2104 L3610.1345 350.2104 L3610.4536 243.1061 L3604.9905 243.1289 L3604.9905 241.3789 L3427.9905 241.3789 L3420.3655 241.3789 L3420.3655 241.3789 L3420.3655 22.0922 L3397.9961 22.0922 L3397.9954 -18.4976 L3325.9956 -18.4946 L3325.9961 22.0925 L3085.6941 22.0032 L3085.6211 47.9985 L3037.9961 47.9985 L3037.9858 -11.996 L2965.9958 -11.9956 L2965.9961 22.092 L2790.376 22.0039 L2790.397 -7.0651 L2615.896 -7.0734 L2616 24.0039 L2549.8779 24.0039 L2549.8613 -6.558 L2510.3792 -6.5644 L2510.3792 22.4407 L2414.0017 22.4407 L2414.0017 -6.5644 L2374 -6.5644 L2374 25.3789 L2374 70.4407 L2458.6257 70.4407 L2458.8562 443.1157 L2606.5688 443.0001 L2606.5688 408.5039 L2633.7507 408.5039 L2633.2507 366.5039 L2662.6257 366.5039 L2662.6257 390.5039 L3146.9517 390.4597 L3146.9517 453.8789 L3392.4519 453.8347 L3392.4519 477.8347 L3392.6208 477.8347 L3392.6208 682.7242 L3392.4517 682.7242 L3392.4517 719.2097 L3139.9958 720.0038 L3140.7458 509.7539 L3076.5325 509.7539 L3076.5325 527.7538 L3071.6575 527.7538 L3071.8208 467.037 L3020.4077 467.3789 L3020.0767 659.4597 L3071.7017 659.4597 L3071.7017 617.21 L3078.9958 617.2541 L3078.9517 719.2097 L2592.9873 720.1288 L2593.8623 610.2537 L2537.7102 610.196 L2536.9062 690.2538 L2352.4062 690.2538 L2351.8865 606.0037 L772.1652 606.0037 L772.1652 2266.2361 L773.496 3040.5039 Z"/>
    </g>
    <g id="elementid1" aria-hidden="true">
      <path d="M2618.7195 1998.093 L3369.3982 1998.093 L3369.3982 1165.8359 L2618.7195 1165.8359 L2618.7195 1998.093 Z"/>
      <path d="M2198.7195 2482.825 L2198.7195 1153.8359 L1322.5883 1153.8359 L1322.5883 2195.1667 L1322.5883 2195.1667 L1322.5883 2482.825 L2198.7195 2482.825 Z"/>
      <path d="M2294.7195 2238.5159 L2339.5876 2201.3875 L2477.0798 2201.3875 L2522.7195 2238.5159 L2522.7195 2488.825 L2294.7195 2488.825 L2294.7195 2238.5159 Z"/>
    </g>
    <g id="elementid2">
      <path d="M3347.8958 858.2892 L3402.8958 858.2892 L3402.8958 996.2892 L3347.8958 996.2892 L3347.8958 858.2892 Z"/>
      <path d="M3270.2449 831.2892 L3293.7449 831.2892 L3293.7449 1023.2892 L3270.2449 1023.2892 L3270.2449 831.2892 Z"/>
      <path d="M2334.0408 734.7377 L2346.0559 734.7377 L2346.0559 974.7536 L2334.0408 974.7536 L2334.0408 734.7377 Z"/>
    </g>
    <g id="elementid3" role="group">
      <text font-family="Verdana" text-anchor="middle" font-size="36">baby</text>
    </g>
  </g>
</svg>
`

const SVG_WITH_UNMAPPED_ELEMENTS = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4.296122345000001 24.174109004999984 94.51469159 86.29088279" version="1.1" overflow="visible">
  <g id="background" role="group" fill="#ffffff">
    <path d="M-4.2961 24.1741 L-4.2961 110.465 L90.2186 110.465 L90.2186 24.1741 L-4.2961 24.1741 Z"/>
  </g>
  <filter id="dropShadowFilter" height="130%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="15"/>
    <feOffset dx="5" dy="-5"/>
    <feComponentTransfer>
      <feFuncA type="linear" slope="0.2"/>
    </feComponentTransfer>
    <feMerge>
      <feMergeNode/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
  <g class="content" transform="matrix(0.0254 0 0 -0.0254 -19.6129971976 105.69902944479999)">
    <g id="Wall-Shapes">
      <path d="M773.496 3040.5039 L4018.9941 3040.5039 L4018.9941 2570.7739 L4154.939 2570.7739 L4154.7358 2478.7693 L4019.0012 2478.781 L4019.0012 1612.1283 L4019.0168 1137.1318 L3976.666 1137.1316 L3976.666 1120.3816 L3976.666 1120.3816 L3976.5076 909.9913 L3945.2495 910.0722 L3945.2498 800.6404 L3887.9331 800.6403 L3887.8081 560.2642 L3887.8081 560.2642 L3832.9324 551.649 L3780.3635 533.7023 L3745.3135 515.5833 L3687.3276 471.2697 L3641.6921 416.2925 L3612.5061 360.6814 L3610.1345 350.2104 L3610.1345 350.2104 L3610.4536 243.1061 L3604.9905 243.1289 L3604.9905 241.3789 L3427.9905 241.3789 L3420.3655 241.3789 L3420.3655 241.3789 L3420.3655 22.0922 L3397.9961 22.0922 L3397.9954 -18.4976 L3325.9956 -18.4946 L3325.9961 22.0925 L3085.6941 22.0032 L3085.6211 47.9985 L3037.9961 47.9985 L3037.9858 -11.996 L2965.9958 -11.9956 L2965.9961 22.092 L2790.376 22.0039 L2790.397 -7.0651 L2615.896 -7.0734 L2616 24.0039 L2549.8779 24.0039 L2549.8613 -6.558 L2510.3792 -6.5644 L2510.3792 22.4407 L2414.0017 22.4407 L2414.0017 -6.5644 L2374 -6.5644 L2374 25.3789 L2374 70.4407 L2458.6257 70.4407 L2458.8562 443.1157 L2606.5688 443.0001 L2606.5688 408.5039 L2633.7507 408.5039 L2633.2507 366.5039 L2662.6257 366.5039 L2662.6257 390.5039 L3146.9517 390.4597 L3146.9517 453.8789 L3392.4519 453.8347 L3392.4519 477.8347 L3392.6208 477.8347 L3392.6208 682.7242 L3392.4517 682.7242 L3392.4517 719.2097 L3139.9958 720.0038 L3140.7458 509.7539 L3076.5325 509.7539 L3076.5325 527.7538 L3071.6575 527.7538 L3071.8208 467.037 L3020.4077 467.3789 L3020.0767 659.4597 L3071.7017 659.4597 L3071.7017 617.21 L3078.9958 617.2541 L3078.9517 719.2097 L2592.9873 720.1288 L2593.8623 610.2537 L2537.7102 610.196 L2536.9062 690.2538 L2352.4062 690.2538 L2351.8865 606.0037 L772.1652 606.0037 L772.1652 2266.2361 L773.496 3040.5039 Z"/>
    </g>
    <g id="elementid1" aria-hidden="true">
      <path d="M2618.7195 1998.093 L3369.3982 1998.093 L3369.3982 1165.8359 L2618.7195 1165.8359 L2618.7195 1998.093 Z"/>
      <path d="M2198.7195 2482.825 L2198.7195 1153.8359 L1322.5883 1153.8359 L1322.5883 2195.1667 L1322.5883 2195.1667 L1322.5883 2482.825 L2198.7195 2482.825 Z"/>
      <path d="M2294.7195 2238.5159 L2339.5876 2201.3875 L2477.0798 2201.3875 L2522.7195 2238.5159 L2522.7195 2488.825 L2294.7195 2488.825 L2294.7195 2238.5159 Z"/>
    </g>
    <g id="elementid2">
      <path d="M3347.8958 858.2892 L3402.8958 858.2892 L3402.8958 996.2892 L3347.8958 996.2892 L3347.8958 858.2892 Z"/>
      <path d="M3270.2449 831.2892 L3293.7449 831.2892 L3293.7449 1023.2892 L3270.2449 1023.2892 L3270.2449 831.2892 Z"/>
      <path d="M2334.0408 734.7377 L2346.0559 734.7377 L2346.0559 974.7536 L2334.0408 974.7536 L2334.0408 734.7377 Z"/>
    </g>
    <g id="elementid3" role="group">
      <text font-family="Verdana" text-anchor="middle" font-size="36">baby</text>
    </g>
  </g>
</svg>
`

export {SIMPLE_CSS, SIMPLE_SVG, SVG_WITH_UNMAPPED_ELEMENTS}