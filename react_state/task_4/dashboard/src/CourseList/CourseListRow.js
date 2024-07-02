import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: "#deb5b545",
  },
  defaultRow: {
    backgroundColor: "#f5f5f5ab",
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
  th: {
    fontWeight: 'bold',
  },
  thText1: {
    textAlign: 'center',
  },
  thText2: {
    textAlign: 'center',
  },
});

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const rowStyle = isHeader ? styles.headerRow : (isChecked ? styles.rowChecked : styles.defaultRow);

  return (
    <tr className={css(rowStyle)}>
      {isHeader ? (
        textSecondCell == null ? (
          <th colSpan="2" className={css(styles.th)}>{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.th, styles.thText1)}>{textFirstCell}</th>
            <th className={css(styles.th, styles.thText2)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            {textFirstCell}
          </td>
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
