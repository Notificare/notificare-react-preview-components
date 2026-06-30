import './Card.css';
import { ReactNode } from 'react';
import { getTextColorByBackgroundLuminance } from '~/internal/utils/pass/text-color';

export function Card({ hexBackgroundColor = '#ffffff', children }: CardProps) {
  return (
    <div
      className="notificare__pass__google__card-preview"
      style={{
        backgroundColor: hexBackgroundColor,
        color: getTextColorByBackgroundLuminance(hexBackgroundColor),
      }}
    >
      {children}
    </div>
  );
}

interface CardProps {
  hexBackgroundColor?: string;
  children: ReactNode;
}
