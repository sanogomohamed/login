import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Profil } from 'src/features/user/Profil';

describe('user/Profil', () => {
  it('renders node with correct class name', () => {
    const props = {
      user: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Profil {...props} />
    );

    expect(
      renderedComponent.find('.user-profil').getElement()
    ).to.exist;
  });
});
