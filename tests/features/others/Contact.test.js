import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Contact } from 'src/features/others/Contact';

describe('others/Contact', () => {
  it('renders node with correct class name', () => {
    const props = {
      others: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Contact {...props} />
    );

    expect(
      renderedComponent.find('.others-contact').getElement()
    ).to.exist;
  });
});
