export const Pricing = () => {
  return (
    <>
    <div>
      <div className="flex flex-row justify-center items-center px-3 py-1 w-36 h-8 bg-[rgba(20,99,255,0.1)] rounded-full mt-[190px] ml-[748px]">Pricing plans 🤑</div>
     <p className="w-[903px] h-[172px] font-inter font-bold text-[72px] leading-[120%] flex items-center text-center tracking-[-3px] text-[#1D1E25] ml-[379px]  mt-[24px]   ">Choose a plan for a more advanced business</p>
      <div className="flex flex-row justify-end items-center p-0.5 w-[44px] h-[24px] bg-[#EDEDED] rounded-full ml-[649px] mt-[58px]"> 
<button
  class="w-[20px] h-[20px] bg-[#1463FF] flex-none order-0 flex-grow-0 rounded-lg "
  style={{ boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)' }}
></button>
      </div>
      <p className=" ml-[699px] mt-[-23px]">Annual pricing (save 20%)</p>
      <div className="absolute w-[1198px] h-[865px] left-[121px] top-[523px]">
  <img
    src="public/img/Pricing (1).png"
    alt=""
    className="w-full h-full object-cover ml-[122px] mt-[122px]"
  />
</div>
<p className="w-[700px] h-[67px] font-inter font-semibold text-[56px] leading-[120%] tracking-[-2px] text-[#1D1E25] mt-[1092px] ml-[403px]">Frequently asked questions</p>
     <p className="w-[510px] h-[32px] flex items-center text-center 
            font-inter font-medium text-[18px] leading-[32px] text-[#7E8492] 
            flex-none order-1 grow-0 ml-[498px] mt-[24px]">Everything you need to know about the product and billing.</p>
      </div>
      <div> <img className="flex flex-col items-start p-0 gap-[56px] 
            w-[1114px] h-[661px] flex-none order-1 grow-0 mt-[80px] ml-[196px]" src="public/img/Content (1).png" alt="" /></div></>

  );
};
