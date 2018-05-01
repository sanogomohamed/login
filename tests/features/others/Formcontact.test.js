import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Formcontact } from 'src/features/others/Formcontact';

describe('others/Formcontact', () => {
  it('renders node with correct class name', () => {
    const props = {
      others: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Formcontact {...props} />
    );

    expect(
      renderedComponent.find('.others-formcontact').getElement()
    ).to.exist;
  });
});
