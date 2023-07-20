import Checkbox from './Checkbox';
import styles from './styles.module.scss';

interface CheckboxsProps {
  label: string;
  checkBoxList: string[];
  checkedList: string[];
  setCheckedList: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Checkboxs({
  label,
  checkBoxList,
  checkedList,
  setCheckedList,
}: CheckboxsProps) {
  const checkedItemHandler = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);
      return;
    }
    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
      return;
    }
    return;
  };

  const checkHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    checkedItemHandler(value, e.target.checked);
  };

  return (
    <ul role="group" aria-labelledby={label} className={styles.chk_boxs}>
      {checkBoxList.map((item, idx) => (
        <Checkbox
          id={item}
          key={idx}
          name={item}
          value={item}
          onChange={(event) => checkHandler(event, item)}
        />
      ))}
    </ul>
  );
}
