import {
    AiOutlinePlus,
    AiOutlineStar,
    AiOutlineSchedule,
} from 'react-icons/ai';
import {VscHome } from 'react-icons/vsc';
import { BiSun } from 'react-icons/bi';
import { BsFillPersonFill} from 'react-icons/bs';
import { SidebarItem } from '../../models/SidebarItem'


export const SidebarData: SidebarItem[] = [

    {
        title: 'My Day',
        path: '/tasks/myday',
        icon:<BiSun  style={{color: "grey", fontSize: "20px"}} />
    },
     {
        title: 'Important',
        path: '/tasks/important',
        icon: <AiOutlineStar style={{color: "grey", fontSize: "20px"}}  />
    },
    {
        
        title: 'Planned',
        path: '/tasks/planned',
        icon: <AiOutlineSchedule style={{color: "grey",  fontSize: "20px"}} />
    },
    {
        
        title: 'Assigned To You',
        path: '/tasks/assigned_to_me',
        icon: < BsFillPersonFill style={{color: "green", fontSize: "20px"}} />
    },
    {
        

        title: 'Tasks',
        path: '/tasks',
        icon: <VscHome style={{color: "black", fontSize: "20px"}} />
    },
    {
        
        title: 'New List',
        path: "/tasks",
        icon: <AiOutlinePlus style={{color: "black", fontSize: "20px"}} />
    }
];