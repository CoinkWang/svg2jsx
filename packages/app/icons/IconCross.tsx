import React from 'react';

import Icon, { IconProps } from '../components/Icon';

const IconCross: React.FC<IconProps> = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 15 15" width={15} height={15} {...props}>
      <path d="M9.78 7.838a.335.335 0 0 1 0-.486l5.2-5.2a.749.749 0 0 0 .208-.486.749.749 0 0 0-.208-.486l-.969-.972A.749.749 0 0 0 13.525 0a.63.63 0 0 0-.486.208l-5.2 5.2a.335.335 0 0 1-.486 0L2.15.208A.749.749 0 0 0 1.665 0a.749.749 0 0 0-.486.208l-.971.971A.749.749 0 0 0 0 1.665a.749.749 0 0 0 .208.486l5.2 5.2a.335.335 0 0 1 0 .486l-5.2 5.2a.67.67 0 0 0 0 .971l.971.971a.749.749 0 0 0 .486.208.749.749 0 0 0 .486-.208l5.2-5.2a.335.335 0 0 1 .486 0l5.2 5.2a.67.67 0 0 0 .971 0l.971-.971a.67.67 0 0 0 0-.971z" />
    </Icon>
  );
};

export default IconCross;
