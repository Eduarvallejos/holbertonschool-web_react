import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


describe('BodySectionWithMarginBottom Component', () => {
  it('renders BodySection component and passes props correctly', () => {
    const title = 'Test Title';
    const children = <p>Test children node</p>;

    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );

    // Verify that there is a div with class bodySectionWithMargin
    expect(wrapper.find('#bodySectionWithMargin').exists()).toBe(true);

    // Verify that a BodySection is rendered within the div
    const bodySection = wrapper.find(BodySection);
    expect(bodySection.exists()).toBe(true);

    // Verify that the props are passed correctly to the BodySection
    expect(bodySection.props().title).toBe(title);
    expect(bodySection.props().children).toEqual(children);
  });
});
