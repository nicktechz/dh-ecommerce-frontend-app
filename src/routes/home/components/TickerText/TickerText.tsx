import style from './TickerText.module.css';
import { ReactElement } from 'react';

type Color = 'Light' | 'Dark';

interface ITickerText {
  color: Color;
  text: string;
  icon: ReactElement;
}

function TickerText({ color, text, icon }: ITickerText) {
  return (
    <aside
      className={`${style.ticker_text_container} ${
        color === 'Light' ? style.light : style.dark
      }`}
    >
      <ul>
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
      </ul>
      <ul>
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
        <li>
          <span>{text}</span>
        </li>
        {icon}
      </ul>
    </aside>
  );
}

export default TickerText;
