import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Mapcontact } from 'src/features/others/Mapcontact';

describe('others/Mapcontact', () => {
  it('renders node with correct class name', () => {
    const props = {
      others: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Mapcontact {...props} />
    );

    expect(
      renderedComponent.find('.others-mapcontact').getElement()
    ).to.exist;
  });
});
