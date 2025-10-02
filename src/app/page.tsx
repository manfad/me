import PaperWrapper from "./components/PaperWrapper";
export default function Home() {
  return (
<div className="relative flex items-center justify-center min-h-screen bg-black">
    <div className="relative w-[500px] min-h-[650px]">

<PaperWrapper className="pageWrapper absolute inset-0 opacity-0 z-30" />
        <PaperWrapper className="pageWrapper absolute inset-0 opacity-0 z-20" />
        <PaperWrapper className="pageWrapper absolute inset-0 opacity-100 z-10" /> 
        </div>
    </div>
  );
}
