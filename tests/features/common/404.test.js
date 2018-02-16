import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { 404 } from 'src/features/common';

describe('components/PageNotFound', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <404 />
    );

    expect(
      renderedComponent.find('.common-404').getElement()
    ).to.exist;
  });
});
