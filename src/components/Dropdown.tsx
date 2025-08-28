export default function Dropdown() {
  return (
    <div className="flex flex-col absolute w-full">
      <ul className="flex flex-col gap-4 text-center border-b border-[#B2B2B2] bg-[#dedfde]">
        <li className="font-[Italiana] text-black border-b border-[#B2B2B2]">HOME</li>
        <li className="font-[Italiana] text-black border-b border-[#B2B2B2]">PORTFOLIO</li>
        <li className="font-[Italiana] text-black border-b border-[#B2B2B2]">ABOUT</li>
        <li className="font-[Italiana] text-black border-b border-[#B2B2B2]">CONTACT</li>
        <li className="font-[Italiana] text-black border-b border-[#B2B2B2]">GALLERIES</li>
      </ul>
    </div>
  )
}
