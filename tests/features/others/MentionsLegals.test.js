import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { MentionsLegals } from 'src/features/others';

describe('others/MentionsLegals', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <MentionsLegals />
    );

    expect(
      renderedComponent.find('.others-mentions-legals').getElement()
    ).to.exist;
  });
});
