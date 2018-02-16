import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Item } from 'src/features/event/Item';

describe('event/Item', () => {
  it('renders node with correct class name', () => {
    const props = {
      event: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Item {...props} />
    );

    expect(
      renderedComponent.find('.event-item').getElement()
    ).to.exist;
  });
});
