import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { FrontLayout } from 'src/features/common';

describe('common/FrontLayout', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <FrontLayout />
    );

    expect(
      renderedComponent.find('.common-front-layout').getElement()
    ).to.exist;
  });
});
