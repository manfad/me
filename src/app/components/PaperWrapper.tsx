import Paper from "./Paper";
import { RoughNotation } from "react-rough-notation";
import Bookmark from "./Bookmark";
import { relative } from "path";
interface PaperWrapperProps {
  rotation?: number;
  children?: React.ReactNode;
  bookmarkText?: string;
  bookmarkColor?: string;
}

export default function PaperWrapper({rotation,children,bookmarkText,bookmarkColor }: PaperWrapperProps) {
  return (
    <div className=" w-[500px] min-h-[650px] rounded-lg"
         style={{
           transform: `rotate(${rotation}deg)`,
           background: 'radial-gradient(circle at center, #1a1a1a 0%, #000 80%)'
         }}
    >

    <Bookmark text={bookmarkText} color={bookmarkColor} position="absolute top-8 -right-9 z-10" />
      <Paper >
        
        {children}
      </Paper>
    </div>
  );
}
