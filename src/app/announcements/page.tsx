import Show from "@/components/Show/index";
import WideCards from "@/sections/WideCards/index";

const dataAn = [
    {
        title: 'Announcements',
        contentComponent: Show,
    },
]

export default function Announcements() {
    return (
        <div>
            <WideCards data={dataAn}/>
        </div>
    )
}