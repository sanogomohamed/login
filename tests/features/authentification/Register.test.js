import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Register } from 'src/features/authentification/Register';

describe('authentification/Register', () => {
  it('renders node with correct class name', () => {
    const props = {
      authentification: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Register {...props} />
    );

    expect(
      renderedComponent.find('.authentification-register').getElement()
    ).to.exist;
  });
});
