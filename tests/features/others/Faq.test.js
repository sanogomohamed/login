import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Faq } from 'src/features/others';

describe('others/Faq', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Faq />
    );

    expect(
      renderedComponent.find('.others-faq').getElement()
    ).to.exist;
  });
});
