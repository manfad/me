import Paper from "./Paper";
import Bookmark from "./Bookmark";
interface NoteProps {
  rotation?: number;
  children?: React.ReactNode;
  bookmarkText?: string;
  bookmarkColor?: string;
  onClick?: () => void;
  isActive?: boolean;
}


export default function Note({rotation, children, bookmarkText, bookmarkColor, onClick, isActive}: NoteProps) {
  return (
    <div className="w-90 min-h-[650px] rounded-lg"
         style={{
           transform: `rotate(${rotation}deg)`,
         }}
    >
      <Bookmark 
        text={bookmarkText} 
        color={bookmarkColor} 
        position="absolute top-2 -right-9 z-10"
        onClick={onClick}
        isActive={isActive}
      />
      <Paper>
        {children}
      </Paper>
    </div>
  );
}
