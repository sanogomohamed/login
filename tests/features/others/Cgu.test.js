import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Cgu } from 'src/features/others';

describe('others/Cgu', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Cgu />
    );

    expect(
      renderedComponent.find('.others-cgu').getElement()
    ).to.exist;
  });
});
