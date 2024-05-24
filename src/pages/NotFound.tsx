import CtaLink from "@/components/CtaLink"

function NotFound() {
  return (
    <div className="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
    <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
            <h2 className="font-bold text-[70px] text-gray-600 dark:text-gray-100">
                <span className="sr-only">خطأ</span>404
            </h2>
            <p className="text-xl">عذرا، لم نتمكن من العثور على هذه الصفحة.</p>
            <CtaLink text="العودة إلى الصفحة الرئيسية" link="/" className="w-full" />
        </div>
    </div>
</div>
  )
}

export default NotFound