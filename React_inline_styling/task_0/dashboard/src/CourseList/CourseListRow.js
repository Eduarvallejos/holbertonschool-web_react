import React from "react";
import PropTypes from "prop-types";


const HeaderStyle = {
    backgroundColor: "#deb5b545",
};

const rowStyle = {
    backgroundColor: "#f5f5f5ab",
};

const CourseListRow = ({isHeader = false, textFirstCell, textSecondCell = null}) => {
    const appliedStyle = isHeader ? HeaderStyle : rowStyle;
    return (
        <tr style={appliedStyle}>
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

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

export default CourseListRow;
