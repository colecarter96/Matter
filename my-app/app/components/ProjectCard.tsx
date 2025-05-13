"use client";
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description: string;
    date: string;
    link: string;
    featured?: boolean;
}

const ProjectCard = ({ title, description, date, link, featured = false }: ProjectCardProps) => {
    const isExternal = link.startsWith("http");
    
    const cardClasses = `p-6 shadow-md rounded-lg transition-all duration-300 
        ${featured 
            ? 'bg-gradient-to-r from-slate-50 to-slate-100 min-h-[200px]' 
            : 'bg-white'
        } hover:shadow-xl hover:translate-y-[-5px]`;

    const titleClasses = `font-bold ${featured ? 'text-2xl mb-2' : 'text-xl'}`;
    const dateClasses = `text-sm text-gray-500 ${featured ? 'mb-4' : 'mb-2'}`;

    return isExternal ? (
        <div className={cardClasses}>
            <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full relative">
                <div className="flex flex-col h-full">
                    <h1 className={titleClasses}>{title}</h1>
                    <h3 className={dateClasses}>{date}</h3>
                    <p className='pt-2'>{description}</p>
                    {featured && (
                        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-bl-lg">
                            Featured
                        </div>
                    )}
                    <div className="flex justify-end mt-auto pt-4">
                        <span className="text-blue-500 text-sm font-medium">Visit site →</span>
                    </div>
                </div>
            </a>
        </div>
    ) : (
        <Link href={link} className="block h-full">
            <div className={cardClasses}>
                <div className="flex flex-col h-full">
                    <h1 className={titleClasses}>{title}</h1>
                    <h3 className={dateClasses}>{date}</h3>
                    <p className='pt-2'>{description}</p>
                    {featured && (
                        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-bl-lg">
                            Featured
                        </div>
                    )}
                    <div className="flex justify-end mt-auto pt-4">
                        <span className="text-blue-500 text-sm font-medium">Learn more →</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

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
