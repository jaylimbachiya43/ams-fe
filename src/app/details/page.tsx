import AltStripes from "@/components/AltStripes/index";
import WideCards from "@/sections/WideCards/index";

const dataC = [
    {
        title: 'Details',
        contentComponent: AltStripes,
    },
]

export default function Details() {
    return (
        <div>
            <WideCards data={dataC}/>
        </div>
    )
}