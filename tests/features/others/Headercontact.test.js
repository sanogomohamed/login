import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Headercontact } from 'src/features/others/Headercontact';

describe('others/Headercontact', () => {
  it('renders node with correct class name', () => {
    const props = {
      others: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Headercontact {...props} />
    );

    expect(
      renderedComponent.find('.others-headercontact').getElement()
    ).to.exist;
  });
});
