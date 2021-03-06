import React from 'react';
import { storiesOf } from '@kadira/storybook';

import FlipMoveWrapper from './helpers/FlipMoveWrapper';
import FlipMoveListItem from './helpers/FlipMoveListItem';

['div', FlipMoveListItem].forEach((type) => {
  const typeLabel = type === 'div' ? 'native' : 'composite';

  storiesOf(`Misc - ${typeLabel}`, module)
    .add('Flex - horizontally centered', () => (
      <FlipMoveWrapper
        itemType={type}
        flipMoveContainerStyles={{ display: 'flex', justifyContent: 'center' }}
        listItemStyles={{
          width: '115px',
          height: '115px',
        }}
      />
    ))
    .add('Flex - vertically centered (BUGGY)', () => (
      <FlipMoveWrapper
        itemType={type}
        flipMoveContainerStyles={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '400px',
        }}
      />
    ));
});
