import React from 'react';

export interface IconBaseProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number;
}

const IconBase = React.forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
  const { size, children, ...restProps } = props;
  const s = size ?? 24;

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={s}
      height={s}
      fill="currentColor"
      viewBox="0 0 32 32"
      {...restProps}
    >
      {children}
    </svg>
  );
});

IconBase.displayName = 'IconBase';

export default IconBase;
