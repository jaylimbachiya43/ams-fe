import Link from 'next/link';

const EditStudentBtn = () => {
  return (
    <Link href="/newstudent" className="bg-blue-500 text-white p-2 rounded-md">
        Edit
    </Link>
  );
};

export default EditStudentBtn;
