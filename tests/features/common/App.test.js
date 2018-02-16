import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { App } from 'src/features/common/App';

describe('common/App', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <App {...props} />
    );

    expect(
      renderedComponent.find('.common-app').getElement()
    ).to.exist;
  });
});
