
interface BookmarkProps {

    text?: string;
    color?: string;
    position?: string;
}

export default function Bookmark({ text , color,position  }: BookmarkProps) {
    return (
    <div
        style={{
            backgroundColor: `${color}`,
            color: 'black',
        }}
        className={`w-20 h-7 [clip-path:polygon(20%_0,100%_0,100%_100%,20%_100%,0%_50%)] flex items-center justify-center ${position}
            hover:scale-105 transition-transform duration-200 cursor-pointer text-[10px] font-semibold font-sans
            `}
        >       
     <span className="text-[10px]">{text}</span>
        </div>
    );
}