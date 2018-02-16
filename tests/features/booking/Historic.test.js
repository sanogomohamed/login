import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Historic } from 'src/features/booking/Historic';

describe('booking/Historic', () => {
  it('renders node with correct class name', () => {
    const props = {
      booking: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Historic {...props} />
    );

    expect(
      renderedComponent.find('.booking-historic').getElement()
    ).to.exist;
  });
});
