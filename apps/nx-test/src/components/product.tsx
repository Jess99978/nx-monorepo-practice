export default function Product() {
  return (
    <div className="tlw-w-48 tlw-border tlw-border-gray-200 tlw-flex tlw-flex-col tlw-gap-3 tlw-px-1 hover:tlw-cursor-pointer">
      <img src="../assets/product-01.jpg" alt="" />
      <p className="tlw-text-sm">3M 3US-F011-5 活性碳替換濾心</p>
      <div className="tlw-flex tlw-items-center tlw-justify-between">
        <div className="tlw-flex tlw-items-center tlw-gap-2">
          <p className="tlw-text-primary tlw-text-lg tlw-font-semibold">
            $2,780
          </p>
          <p className="tlw-text-sm tlw-text-gray-500 tlw-line-through">$2,880</p>
        </div>
        <span>
          <img src="../assets/cart.svg" alt="" />
        </span>
      </div>
    </div>
  );
}
