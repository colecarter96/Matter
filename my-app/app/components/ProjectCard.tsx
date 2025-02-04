"use client";
import Link from 'next/link';

interface Props{
    title: string;
    description: string;
    date: string;
    link: string;

}



const ProjectCard:React.FC<Props> = ({title, description, date, link}) => {

    const isExternal = link.startsWith("http");

    return isExternal ? (
        <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-2xl hover:blur-lg">
            <a href={link} target="_blank" rel="noopener noreferrer" className="">
                <h1 className="font-bold text-xl">{title}</h1>
                <h3 >{date}</h3>
                <p className='pt-5'>{description}</p>
            </a>
        </div>
        
    ) : (
        <Link href={link}>
            <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-2xl hover:bg-neutral-300 hover:blur-lg">
                <h1 className="font-bold text-xl">{title}</h1>
                <h3>{date}</h3>
                <p className='pt-5'>{description}</p>
            </div>
        </Link>
    );
}

export default ProjectCard;

// const ProjectCard: React.FC<Props> = ({ title, description, date, link }) => {
//     const isExternal = link.startsWith("http");

//     return isExternal ? (
//         <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-2xl relative group">
//             <a href={link} target="_blank" rel="noopener noreferrer" className="block relative z-20">
//                 <h1 className="font-bold text-xl">{title}</h1>
//                 <h3>{date}</h3>
//                 <p className="pt-5">{description}</p>
//             </a>
//             {/* This div will be blurred on hover */}
//             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 group-hover:blur-lg transition-opacity transition-blur duration-300 z-10"></div>
//             {/* View button outside of the blurred div */}
//             <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-lg font-semibold text-blue-600 z-20">
//                 View
//             </div>
//         </div>
//     ) : (
//         <Link href={link}>
//             <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-2xl relative group">
//                 <h1 className="font-bold text-xl">{title}</h1>
//                 <h3>{date}</h3>
//                 <p className="pt-5">{description}</p>
//                 {/* This div will be blurred on hover */}
//                 <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 group-hover:blur-lg transition-opacity transition-blur duration-300 z-10"></div>
//                 {/* View button outside of the blurred div */}
//                 <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-lg font-semibold text-blue-600 z-20">
//                     View
//                 </div>
//             </div>
//         </Link>
//     );
// };

// export default ProjectCard;
