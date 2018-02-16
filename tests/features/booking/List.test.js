import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { List } from 'src/features/booking/List';

describe('booking/List', () => {
  it('renders node with correct class name', () => {
    const props = {
      booking: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <List {...props} />
    );

    expect(
      renderedComponent.find('.booking-list').getElement()
    ).to.exist;
  });
});
