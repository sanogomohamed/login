import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Register } from 'src/features/booking/Register';

describe('booking/Register', () => {
  it('renders node with correct class name', () => {
    const props = {
      booking: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Register {...props} />
    );

    expect(
      renderedComponent.find('.booking-register').getElement()
    ).to.exist;
  });
});
