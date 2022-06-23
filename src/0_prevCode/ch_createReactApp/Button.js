import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>; // 구현 클래스 명 랜덤으로 생성됨
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
