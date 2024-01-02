import StuDetails from "../../../../../ams-fe/src/components/StuDetails/index";
import WideCards from "../../../../../ams-fe/src/sections/WideCards/index";

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