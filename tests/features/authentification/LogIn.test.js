import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { LogIn } from 'src/features/authentification/LogIn';

describe('authentification/LogIn', () => {
  it('renders node with correct class name', () => {
    const props = {
      authentification: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LogIn {...props} />
    );

    expect(
      renderedComponent.find('.authentification-log-in').getElement()
    ).to.exist;
  });
});
