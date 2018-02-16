import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Tree } from 'src/features/category/Tree';

describe('category/Tree', () => {
  it('renders node with correct class name', () => {
    const props = {
      category: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Tree {...props} />
    );

    expect(
      renderedComponent.find('.category-tree').getElement()
    ).to.exist;
  });
});
