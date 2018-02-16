import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Settings } from 'src/features/user/Settings';

describe('user/Settings', () => {
  it('renders node with correct class name', () => {
    const props = {
      user: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Settings {...props} />
    );

    expect(
      renderedComponent.find('.user-settings').getElement()
    ).to.exist;
  });
});
