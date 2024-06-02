import React from "react";
import PropTypes from "prop-types";

const CourseListRow = ({isHeader = false, textFirstCell, textSecondCell = null}) => {
    return (
        <tr>
            {isHeader ? (
                textSecondCell == null ? (
                    <th colSpan="2">{textFirstCell}</th>
                ) : (
                    <>
                        <th className="text1">{textFirstCell}</th>
                        <th className="text2">{textSecondCell}</th>
                    </>
                )
            ) : (
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
};

CourseListRow.prototype = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
};

export default CourseListRow;