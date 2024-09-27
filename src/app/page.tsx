import Link from "next/link";

import computerIcon  from '@/resources/interface/computer.png';
import addUserIcon   from '@/resources/interface/add-user.png';
import settingDbIcon from '@/resources/interface/database-config.png';
import accessIcon    from '@/resources/interface/access.png';
import serverIcon    from '@/resources/interface/server.png';
import databaseIcon  from '@/resources/interface/database.png';
import Image, { StaticImageData } from "next/image";


export default function Home() {
  return (
    <div className="p-[40px]">
      <h1 className="text-[#e8e8e8] font-bold text-[32px] pb-5" style={{borderBottom: '1px solid gray'}}>Welcome to OpenSDMS</h1>

      <div className="flex pt-14 space-x-[120px]">
	  	<div className="space-y-7">
		  <h2 className="text-[18px] text-[#e8e8e8] font-semibold">Device</h2>
		  <div className="space-y-6">
			<Item icon={computerIcon} text="Creating a new device"/>
			<Item icon={computerIcon} text="  a new device"/>
		  </div>
        </div>

		<div className="space-y-7">
		  <h2 className="text-[18px] text-[#e8e8e8] font-semibold">Repository</h2>
		  <div className="space-y-6">
			<Item icon={computerIcon} text="Creating a new repository"/>
			<Item icon={computerIcon} text="Manage repository detail" />
		  </div>
        </div>

		<div className="space-y-7">
		  <h2 className="text-[18px] text-[#e8e8e8] font-semibold">User</h2>
		  <div className="space-y-6">
			<Item icon={computerIcon} text="Creating a new user"	 />
			<Item icon={computerIcon} text="Manage user permissions" />
		  </div>
        </div>

      </div>
    </div>
  );
}


function Item ({icon, text,}: {icon: StaticImageData, text: string}) {
	return (
		<div className="flex space-x-3 items-center cursor-pointer">
			<p className="text-[15px] text-[#3498db] italic">{text}</p>
		</div>
	)
}