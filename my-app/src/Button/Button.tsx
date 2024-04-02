import s from "./Button.module.css";

type ButtonPropsType = {
  counter?: number;
  title: string;
  callBack: () => void;
  isDisabled?: boolean;
};

export const Button = (props: ButtonPropsType) => {
  const onClickHandler = () => {
    props.callBack();
  };
  return (
    <div className={s.buttonDiv}>
      <button
        className={s.but}
        disabled={props.isDisabled}
        onClick={onClickHandler}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
