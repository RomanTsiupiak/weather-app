import React from 'react';

import IconBase, { IconBaseProps } from '../IconBase';

const Icon = React.forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => (
  <IconBase ref={ref} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.611 11.948a4.9 4.9 0 0 0-1.248.16A5.446 5.446 0 0 0 9.791 13.62a4.17 4.17 0 0 0-.542-.04 4.095 4.095 0 0 0 0 8.19h12.362a4.91 4.91 0 1 0 0-9.82Z"
      fill="#D0D2D3"
    />
  </IconBase>
));

Icon.displayName = 'CloudIcon';

export default Icon;
