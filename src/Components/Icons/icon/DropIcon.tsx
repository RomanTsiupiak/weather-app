import React from 'react';

import IconBase from '../IconBase';

const Icon = React.forwardRef<SVGSVGElement>((props, ref) => (
  <IconBase ref={ref} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 20.364C23 23.18 20.187 26 16 26c-4.187 0-7-2.819-7-5.636 0-2.922 1.9-6.562 4.134-9.73a48.228 48.228 0 0 1 2.816-3.6 59.553 59.553 0 0 1 2.9 3.872c1.088 1.59 2.147 3.334 2.927 5.03C22.57 17.664 23 19.181 23 20.364Zm-16 0c0-5.437 5.131-11.993 7.645-14.878C15.46 4.55 16 4 16 4s.517.572 1.304 1.53C19.798 8.567 25 15.487 25 20.364 25 24.58 20.97 28 16 28s-9-3.419-9-7.636ZM11.498 17h2.152c-.405.924-.65 1.8-.65 2.546C13 20.69 14.12 22 16 22v2c-2.761 0-5-1.994-5-4.454 0-.821.191-1.686.498-2.546Z"
      fill="currentColor"
    />
  </IconBase>
));

Icon.displayName = 'DropIcon';

export default Icon;
