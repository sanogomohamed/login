import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Subcribe } from 'src/features/category/Subcribe';

describe('category/Subcribe', () => {
  it('renders node with correct class name', () => {
    const props = {
      category: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Subcribe {...props} />
    );

    expect(
      renderedComponent.find('.category-subcribe').getElement()
    ).to.exist;
  });
});
