import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  test('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header Text" />);
    const thElement = wrapper.find('th');

    expect(thElement).toHaveLength(1);
    expect(thElement.text()).toBe('Header Text');
    expect(thElement.prop('colSpan')).toBe('2');
  });

  test('renders two cells when textSecondCell is present and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />);
    const thElements = wrapper.find('th');

    expect(thElements).toHaveLength(2);
    expect(thElements.at(0).text()).toBe('Header 1');
    expect(thElements.at(1).text()).toBe('Header 2');
  });

  test('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Cell 1" textSecondCell="Cell 2" />);
    const tdElements = wrapper.find('td');

    expect(tdElements).toHaveLength(2);
    expect(tdElements.at(0).text()).toBe('Cell 1');
    expect(tdElements.at(1).text()).toBe('Cell 2');
  });
});
