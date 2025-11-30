import { AiOutlineLoading3Quarters as LoadingIcon } from "react-icons/ai";

/**
 * A page that displays a loading icon in the center.
 */
export default function Loader() {
  return (
    <div className="flex-1 justify-center items-center">
      <LoadingIcon className="w-16 h-16 text-primary animate-spin" />
    </div>
  )
}
