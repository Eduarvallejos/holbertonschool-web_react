import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection Component', () => {
  it('renders title and children correctly', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Verify that there is an h2 with the correct title
    expect(wrapper.find('h2').text()).toBe('test title');

    // Verify that there is a p with the correct children
    expect(wrapper.find('p').text()).toBe('test children node');
  });
});
