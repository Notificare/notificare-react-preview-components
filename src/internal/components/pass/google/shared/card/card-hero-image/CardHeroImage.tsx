import './CardHeroImage.css';

export function CardHeroImage({ heroImage }: CardHeroImageProps) {
  return (
    <div className="notificare__pass__google__hero-image-wrapper">
      <img src={heroImage} className="notificare__pass__google__hero-image" />
    </div>
  );
}

interface CardHeroImageProps {
  heroImage?: string;
}
