import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Layout1 } from 'src/features/common';

describe('common/Layout1', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Layout1 />
    );

    expect(
      renderedComponent.find('.common-layout-1').getElement()
    ).to.exist;
  });
});
