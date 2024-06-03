import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
  });

  it('renders correctly with an empty array or no listCourses property', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
  });
  
  it('renders correctly with a list of courses', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(CourseListRow)).toHaveLength(listCourses.length + 2);
  });
});
