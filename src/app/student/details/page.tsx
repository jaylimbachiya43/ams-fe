import StuDetails from "@/components/StuDetails/index";
import WideCards from "@/sections/WideCards/index";

const dataC = [
    {
        title: 'Details',
        contentComponent: StuDetails,
    },
]

export default function Details() {
    return (
        <div>
            <WideCards data={dataC}/>
        </div>
    )
}