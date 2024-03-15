import { Loader } from "lucide-react";

export default function loading() {
  return (
    <div className="h-[100dvh] flex justify-center items-center">
      <Loader className="h-8 w-8 animate-spin" />
    </div>
  );
}
