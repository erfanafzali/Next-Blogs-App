import Spinner from "@/components/ui/Spinner"

 
function Loading() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-secondary-600 font-bold">درحال بارگذاری پست ها
      </span>
      <Spinner/>
    </div>
  )
}

export default Loading
