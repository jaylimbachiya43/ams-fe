import StudentFeesPage from '@/components/StudentFeesPage/index'
import React from 'react'
import WideCards from '../../../../ams-fe/src/sections/WideCards/index'

const dataFee = [
    {
        title: 'Fees',
        contentComponent: StudentFeesPage,
    },
]

const StudentFees = () => {
    return (
        <div>
            <WideCards data={dataFee} />
        </div>
    )
}

export default StudentFees

