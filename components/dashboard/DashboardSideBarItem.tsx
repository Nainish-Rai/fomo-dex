const SideBarItem = ({ title, icon }: { title: string; icon: any }) => {
  return (
    <div className=" my-1 flex cursor-pointer gap-3.5 rounded-xl p-2 px-5 text-neutral-400 duration-200 hover:bg-purple-900 hover:text-white">
      {icon}
      <div className="my-auto">{title}</div>
    </div>
  )
}

export default SideBarItem
