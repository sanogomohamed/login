import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { List } from 'src/features/event/List';

describe('event/List', () => {
  it('renders node with correct class name', () => {
    const props = {
      event: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <List {...props} />
    );

    expect(
      renderedComponent.find('.event-list').getElement()
    ).to.exist;
  });
});
