import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Menu } from 'src/features/common';

describe('components/SimpleNav', () => {
  it('renders node with correct dom structure', () => {
    const routes = [{
      childRoutes: [
        { path: '/', childRoutes: [{ path: 'abc' }] },
        { path: '/root', autoIndexRoute: true },
        { path: 'relative-path', name: 'Link Name' },
        {
          path: 'sub-links',
          childRoutes: [
            { path: 'sub-link' },
          ],
        },
        { path: '*' },
      ],
    }];
    const comp = shallow(
      <Menu routes={routes} />
    );

    expect(
      comp.find('.common-menu').getElement()
    ).to.exist;
    expect(
      comp.find('li').length
    ).to.equal(8);
  });
});
