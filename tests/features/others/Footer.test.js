import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Footer } from 'src/features/others/Footer';

describe('others/Footer', () => {
  it('renders node with correct class name', () => {
    const props = {
      others: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Footer {...props} />
    );

    expect(
      renderedComponent.find('.others-footer').getElement()
    ).to.exist;
  });
});
