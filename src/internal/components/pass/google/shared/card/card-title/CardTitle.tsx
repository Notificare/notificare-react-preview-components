import './CardTitle.css';
import { ReactNode } from 'react';

export function CardTitle({ children }: CardTitleProps) {
  return <div className="notificare__pass__google__card-title-area"> {children} </div>;
}

interface CardTitleProps {
  children: ReactNode;
}
