import { StaticImageData } from "next/image";

interface Props {
    imageUrl: StaticImageData;
    onClick?: () => void;
    children?: React.ReactNode;
}

export const CarouselItem: React.FC<Props> = ({ imageUrl, onClick, children }) => {
    return (
      <div 
        className="group relative cursor-pointer
          min-w-[280px] w-full 
          h-[300px] md:h-[500px] 
          rounded-lg md:ml-6 
          first:ml-0
          overflow-hidden" 
        onClick={onClick}
      >
        {/* Background container */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%),
              url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
        
        {/* Content container */}
        <div className="relative h-full w-full">
          {children}
        </div>
      </div>
    );
  };