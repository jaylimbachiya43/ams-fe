import React from 'react'

const data = [
    { label: 'Full Name', value: 'Jay Parmar' },
    { label: 'Employee ID', value: '12345' },
    { label: 'Username', value: 'JP123' },
    { label: 'Email', value: 'abc@xyz.com' },
    { label: 'Designation', value: 'Web Developer' },
    { label: 'DOB', value: 'Octoer 15, 2023' },
    { label: 'Contact', value: '123-456-7890' },
]

const StuDetails = () => {
  return (
    <div className="flex justify-center items-center bg-transparent">
      <table className="w-full p-4 rounded-lg shadow-md bg-transparent">
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-transparent' : 'bg-gray-50'}
            >
              <td className="p-2 font-semibold">{item.label}</td>
              <td className="p-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StuDetails