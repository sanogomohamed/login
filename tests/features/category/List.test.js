import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { List } from 'src/features/category/List';

describe('category/List', () => {
  it('renders node with correct class name', () => {
    const props = {
      category: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <List {...props} />
    );

    expect(
      renderedComponent.find('.category-list').getElement()
    ).to.exist;
  });
});
