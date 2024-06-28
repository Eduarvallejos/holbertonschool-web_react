import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import { CourseShape } from "./CourseShape";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    table: {
        height: '100%',
        padding: '50px',
        marginBottom: '20%',
        width: '60%',
        textAlign: 'center',
    },

});

const CourseList = ({ listCourses = [] }) => {
    return (
        <table className={css(styles.table)}>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length === 0 ? (
                    <CourseListRow textFirstCell="No course available yet" isHeader={false} />
                ) : (
                    listCourses.map(course => (
                        <CourseListRow 
                            key={course.id} 
                            textFirstCell={course.name} 
                            textSecondCell={String(course.credit)} 
                            isHeader={false} 
                        />
                    ))
                )}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};



export default CourseList;
