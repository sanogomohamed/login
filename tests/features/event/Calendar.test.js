import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Calendar } from 'src/features/event/Calendar';

describe('event/Calendar', () => {
  it('renders node with correct class name', () => {
    const props = {
      event: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Calendar {...props} />
    );

    expect(
      renderedComponent.find('.event-calendar').getElement()
    ).to.exist;
  });
});
